import { ApiError } from '../errors';
import {
  MOCK_BRIEF,
  MOCK_FAQ_LIST,
  MOCK_NOTICE_DETAIL,
  MOCK_NOTICE_LIST,
  MOCK_PRODUCT_DETAIL,
  MOCK_PRODUCT_LIST,
  MOCK_USE_PROJECT,
} from './data';

const normalizePath = (path: string): string =>
  path.startsWith('/') ? path : `/${path}`;

/**
 * 백엔드 mock repository와 동일하게 ID별로 같은 상세 응답을 반환합니다.
 */
export const getMockApiResponse = <T>(path: string): T => {
  const normalized = normalizePath(path);

  switch (normalized) {
    case '/cloud/brief':
      return MOCK_BRIEF as T;
    case '/cloud/use_project':
      return MOCK_USE_PROJECT as T;
    case '/cloud/qna':
      return MOCK_FAQ_LIST as T;
    case '/cloud/notice':
      return MOCK_NOTICE_LIST as T;
    case '/cloud/product':
      return MOCK_PRODUCT_LIST as T;
    default:
      break;
  }

  if (/^\/cloud\/notice\/\d+$/.test(normalized)) {
    return MOCK_NOTICE_DETAIL as T;
  }

  if (/^\/cloud\/product\/\d+$/.test(normalized)) {
    return MOCK_PRODUCT_DETAIL as T;
  }

  throw new ApiError(`Mock API route not found: ${normalized}`, 404, 'ERR_INVALID_REQUEST');
};
