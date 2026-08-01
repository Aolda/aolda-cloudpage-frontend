/**
 * @deprecated Prefer `yarn dev:mock` from package.json (cross-env).
 * Kept for compatibility; does not overwrite .env.local.
 */
import { spawn } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

console.info('[dev:mock] frontend mock API mode (does not modify .env.local)');

const child = spawn(
  'npx',
  [
    'cross-env',
    'WATCHPACK_POLLING=true',
    'USE_MOCK_API=true',
    'NEXT_PUBLIC_USE_MOCK_API=true',
    'next',
    'dev',
  ],
  {
    cwd: root,
    stdio: 'inherit',
    shell: true,
    env: {
      ...process.env,
      USE_MOCK_API: 'true',
      NEXT_PUBLIC_USE_MOCK_API: 'true',
    },
  },
);

child.on('exit', (code) => {
  process.exit(code ?? 0);
});
