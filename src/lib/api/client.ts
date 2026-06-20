import { getApiBaseUrl, isMockApiEnabled } from './config';
import { ApiError } from './errors';
import { getMockApiResponse } from './mock/resolver';
import type { ApiErrorResponse } from './types/cloud';

export { ApiError } from './errors';

type FetchApiOptions = {
  revalidate?: number | false;
};

export async function fetchApi<T>(
  path: string,
  options: FetchApiOptions = {},
): Promise<T> {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (isMockApiEnabled()) {
    if (process.env.NODE_ENV === 'development') {
      console.info(`[api:mock] ${normalizedPath}`);
    }

    return getMockApiResponse<T>(normalizedPath);
  }

  const baseUrl = getApiBaseUrl();
  const url = `${baseUrl}${normalizedPath}`;

  const response = await fetch(url, {
    headers: { Accept: 'application/json' },
    next:
      options.revalidate === undefined
        ? { revalidate: 60 }
        : options.revalidate === false
          ? { revalidate: 0 }
          : { revalidate: options.revalidate },
  });

  if (!response.ok) {
    let code: string | undefined;

    try {
      const body = (await response.json()) as ApiErrorResponse;
      code = body.code;
    } catch {
      // non-JSON error body
    }

    throw new ApiError(
      `API request failed: ${response.status} ${response.statusText}`,
      response.status,
      code,
    );
  }

  return response.json() as Promise<T>;
}
