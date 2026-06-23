/** GET /cloud/brief 응답 (aolda-ahp-backend) */
export interface BriefMetric {
  value: number;
  unit: string;
}

export interface BriefResponse {
  userCount: BriefMetric;
  projectCount: BriefMetric;
  __________?: BriefMetric;
  [key: string]: BriefMetric | undefined;
}

export interface SemesterPoint {
  year: number;
  semester: number;
}

export interface UseProjectDuration {
  from: SemesterPoint;
  to?: SemesterPoint;
}

export interface UseProjectItem {
  teamName: string;
  description: string;
  duration?: UseProjectDuration;
  projectImage: {
    url: string;
  };
}

export interface UseProjectResponse {
  total: number;
  data: UseProjectItem[];
}

export interface CloudCategory {
  categoryImg: { url: string };
  categoryTitle: string;
}

export interface PaginateMeta {
  from: number;
  to: number;
  curr: number;
}

export interface FaqQuestionItem {
  faqId: number;
  faqTitle: string;
  faqAnswer: string;
}

/** GET /cloud/qna 응답 */
export interface FaqListResponse {
  categories: Record<string, CloudCategory>;
  questions: {
    paginate: PaginateMeta;
    total: number;
    data: FaqQuestionItem[];
  };
}

export interface NoticeListItem {
  noticeId: number;
  noticeType: string;
  noticeTitle: string;
  createdAt: string;
}

/** GET /cloud/notice 응답 */
export interface NoticeListResponse {
  paginate: PaginateMeta;
  total: number;
  data: NoticeListItem[];
}

export interface NoticeAttachment {
  attatchmentId: number;
  file: { url: string };
}

export interface NoticeDetailBody {
  noticeId: number;
  noticeType: string;
  noticeTitle: string;
  createdAt: string;
  createdBy: {
    userId: number;
    userName: string;
  };
  readCount: number;
  attatchments: NoticeAttachment[];
  content: string;
}

/** GET /cloud/notice/:notice_id 응답 */
export interface NoticeDetailResponse {
  data: NoticeDetailBody;
  neighbors: {
    prev: number;
    next: number;
  };
}

export interface ProductListItem {
  productId: number;
  productIcon: { url: string };
  productName: string;
  description: string;
}

/** GET /cloud/product 응답 */
export interface ProductListResponse {
  categories: Record<string, CloudCategory>;
  products: Record<string, ProductListItem[]>;
}

export interface ProductParticipant {
  crewId: number;
  profile: { url: string };
  crewName: string;
  univDepartment: string;
  univJoinedYear: string;
}

export interface RelatedService {
  pageTitle: string;
  thumbnailImg: { url: string };
  serviceLink: string;
}

/** GET /cloud/product/:product_id 응답 */
export interface ProductDetailResponse {
  productId: number;
  productIcon: { url: string };
  productName: string;
  description: string;
  cloudLink: string;
  projectLink: string;
  content: string;
  participants: ProductParticipant[];
  relateServices: RelatedService[];
}

export interface ApiErrorResponse {
  code: string;
}
