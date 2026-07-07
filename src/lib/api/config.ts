const DEFAULT_API_BASE_URL = 'http://127.0.0.1:8001';

const parseBoolEnv = (value: string | undefined): boolean =>
  value === 'true' || value === '1';

export const isMockApiEnabled = (): boolean =>
  parseBoolEnv(process.env.USE_MOCK_API) ||
  parseBoolEnv(process.env.NEXT_PUBLIC_USE_MOCK_API);

export const getApiBaseUrl = (): string => {
  const fromEnv =
    process.env.API_BASE_URL ??
    process.env.NEXT_PUBLIC_API_BASE_URL ??
    DEFAULT_API_BASE_URL;

  return fromEnv.replace(/\/$/, '');
};
