import type { NoticeItemProps } from '../../components/molecules/NoticeItem';
import type { NoticeDetailData } from '../../components/organisms/NoticeDetailContent';

/**
 * API 기본 URL
 * 환경 변수에서 가져오거나 기본값 사용
 */
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

/**
 * 공지사항 목록 조회 API 응답 타입
 */
export interface NoticeListResponse {
  notices: NoticeItemProps[];
  totalCount: number;
}

/**
 * 공지사항 목록 조회 파라미터
 */
export interface NoticeListParams {
  /** 페이지 번호 (1부터 시작) */
  page?: number;
  /** 페이지당 항목 수 */
  limit?: number;
  /** 검색어 */
  search?: string;
  /** 필터 카테고리 */
  category?: string;
}

/**
 * 공지사항 목록을 조회합니다.
 * 
 * @param {NoticeListParams} params - 조회 파라미터
 * @returns {Promise<NoticeListResponse>} 공지사항 목록과 전체 개수
 * 
 * @example
 * const { notices, totalCount } = await fetchNotices({
 *   page: 1,
 *   limit: 10,
 *   search: '검색어',
 *   category: '문의요청'
 * });
 */
export const fetchNotices = async (
  params: NoticeListParams = {}
): Promise<NoticeListResponse> => {
  const { page = 1, limit = 10, search, category } = params;

  // 쿼리 파라미터 구성
  const queryParams = new URLSearchParams();
  queryParams.append('page', page.toString());
  queryParams.append('limit', limit.toString());
  if (search) queryParams.append('search', search);
  if (category && category !== 'all') queryParams.append('category', category);

  try {
    const response = await fetch(`${API_BASE_URL}/notices?${queryParams.toString()}`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('공지사항 목록 조회 실패:', error);
    throw error;
  }
};

/**
 * 공지사항 상세 정보를 조회합니다.
 * 
 * @param {string} id - 공지사항 ID
 * @returns {Promise<NoticeDetailData>} 공지사항 상세 데이터
 * 
 * @example
 * const notice = await fetchNoticeDetail('24');
 */
export const fetchNoticeDetail = async (id: string): Promise<NoticeDetailData> => {
  try {
    const response = await fetch(`${API_BASE_URL}/notices/${id}`);

    if (!response.ok) {
      if (response.status === 404) {
        throw new Error('공지사항을 찾을 수 없습니다.');
      }
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('공지사항 상세 조회 실패:', error);
    throw error;
  }
};

