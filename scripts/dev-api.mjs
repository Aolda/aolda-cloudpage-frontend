import { existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const backendEntry = resolve(root, 'backend/dist/server.js');

const wait = (ms) => new Promise((resolveWait) => setTimeout(resolveWait, ms));

const checkBackendHealth = async () => {
  try {
    const response = await fetch('http://127.0.0.1:8001/health');
    return response.ok;
  } catch {
    return false;
  }
};

const startBackend = () => {
  if (!existsSync(backendEntry)) {
    console.error('[dev:api] backend/dist/server.js 가 없습니다. 먼저 backend를 빌드하세요.');
    console.error('  npm --prefix backend run build');
    process.exit(1);
  }

  return spawn('node', [backendEntry], {
    cwd: root,
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'development',
      USE_MOCK_DATA: 'true',
      CORS_ALLOW_ORIGINS: 'http://localhost:3000,http://127.0.0.1:3000',
    },
  });
};

const startFrontend = () =>
  spawn('npx', ['next', 'dev'], {
    cwd: root,
    stdio: 'inherit',
    shell: false,
    env: {
      ...process.env,
      USE_MOCK_API: 'false',
      NEXT_PUBLIC_USE_MOCK_API: 'false',
      API_BASE_URL: 'http://127.0.0.1:8001',
      NEXT_PUBLIC_API_BASE_URL: 'http://127.0.0.1:8001',
      WATCHPACK_POLLING: process.env.WATCHPACK_POLLING ?? 'true',
    },
  });

const main = async () => {
  let backendProcess;

  if (!(await checkBackendHealth())) {
    console.info('[dev:api] 백엔드를 시작합니다 (http://127.0.0.1:8001)');
    backendProcess = startBackend();

    for (let attempt = 0; attempt < 30; attempt += 1) {
      if (await checkBackendHealth()) {
        console.info('[dev:api] 백엔드 준비 완료');
        break;
      }
      await wait(500);
    }

    if (!(await checkBackendHealth())) {
      console.error('[dev:api] 백엔드 헬스체크 실패. 로그를 확인하세요.');
      backendProcess?.kill('SIGTERM');
      process.exit(1);
    }
  } else {
    console.info('[dev:api] 백엔드가 이미 실행 중입니다');
  }

  console.info('[dev:api] 프론트엔드를 시작합니다 (실 API 모드)');
  const frontendProcess = startFrontend();

  const shutdown = (signal) => {
    frontendProcess.kill(signal);
    backendProcess?.kill(signal);
    process.exit(0);
  };

  process.on('SIGINT', () => shutdown('SIGINT'));
  process.on('SIGTERM', () => shutdown('SIGTERM'));

  frontendProcess.on('exit', (code) => {
    backendProcess?.kill('SIGTERM');
    process.exit(code ?? 0);
  });
};

main().catch((error) => {
  console.error('[dev:api] 시작 실패:', error);
  process.exit(1);
});
