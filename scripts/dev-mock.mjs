import { copyFileSync, existsSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const envMock = resolve(root, '.env.mock');
const envLocal = resolve(root, '.env.local');

if (existsSync(envMock)) {
  copyFileSync(envMock, envLocal);
}

process.env.USE_MOCK_API = 'true';
process.env.NEXT_PUBLIC_USE_MOCK_API = 'true';

const child = spawn('npx', ['next', 'dev'], {
  cwd: root,
  stdio: 'inherit',
  shell: true,
  env: process.env,
});

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
