/**
 * aolda-ahp-backend `src/constants/cloud.ts` 와 동일한 mock 응답
 * @see https://github.com/Aolda/aolda-ahp-backend
 */
import type {
  BriefResponse,
  FaqListResponse,
  NoticeDetailResponse,
  NoticeListResponse,
  ProductDetailResponse,
  ProductListResponse,
  UseProjectResponse,
} from '../types/cloud';

export const MOCK_BRIEF: BriefResponse = {
  userCount: { value: 12540, unit: '명' },
  projectCount: { value: 312, unit: '개' },
  __________: { value: 48, unit: '개' },
};

export const MOCK_USE_PROJECT: UseProjectResponse = {
  total: 3,
  data: [
    {
      teamName: 'Aolda Research Lab',
      description: '대학 연구과제 데이터 파이프라인을 운영합니다.',
      duration: {
        from: { year: 2024, semester: 2 },
        to: { year: 2025, semester: 1 },
      },
      projectImage: { url: 'https://cdn.aolda.io/cloud/use-1.jpg' },
    },
    {
      teamName: '산학협력 프로젝트 팀',
      description: '클라우드 기반 이미지 처리 서비스를 개발했습니다.',
      duration: { from: { year: 2023, semester: 1 } },
      projectImage: { url: 'https://cdn.aolda.io/cloud/use-2.jpg' },
    },
    {
      teamName: '스타트업 MVP',
      description: '초기 MVP 검증을 위한 백엔드 인프라를 구성했습니다.',
      projectImage: { url: 'https://cdn.aolda.io/cloud/use-3.jpg' },
    },
  ],
};

const MOCK_FAQ_QUESTIONS = [
  {
    faqId: 1,
    faqTitle: '서비스 가입은 어떻게 하나요?',
    faqAnswer: '홈페이지에서 신청서를 제출하시면 담당자가 안내드립니다.',
  },
  {
    faqId: 2,
    faqTitle: '요금은 어떻게 청구되나요?',
    faqAnswer: '프로젝트 사용량 기반으로 월 단위 정산됩니다.',
  },
  {
    faqId: 3,
    faqTitle: '학생 할인을 받을 수 있나요?',
    faqAnswer: '아주대학교 재학생 인증 후 학생 요금제가 적용됩니다.',
  },
  {
    faqId: 4,
    faqTitle: '프로젝트는 몇 개까지 생성할 수 있나요?',
    faqAnswer: '기본 계정은 최대 5개까지 생성할 수 있으며, 요청 시 한도를 상향할 수 있습니다.',
  },
  {
    faqId: 5,
    faqTitle: '리소스 사용량은 어디서 확인하나요?',
    faqAnswer: '콘솔 대시보드의 사용량 메뉴에서 실시간으로 확인할 수 있습니다.',
  },
  {
    faqId: 6,
    faqTitle: '비밀번호를 잊어버렸어요.',
    faqAnswer: '로그인 화면의 비밀번호 찾기를 통해 재설정할 수 있습니다.',
  },
  {
    faqId: 7,
    faqTitle: '팀 멤버를 초대하려면 어떻게 하나요?',
    faqAnswer: '프로젝트 설정 > 멤버 관리에서 이메일로 초대할 수 있습니다.',
  },
  {
    faqId: 8,
    faqTitle: '서버가 갑자기 중지됐어요.',
    faqAnswer: '리소스 한도 초과 또는 점검일 수 있습니다. 상태 페이지와 알림을 확인해 주세요.',
  },
  {
    faqId: 9,
    faqTitle: '도메인을 연결할 수 있나요?',
    faqAnswer: '커스텀 도메인 연결을 지원합니다. DNS 설정 가이드를 참고해 주세요.',
  },
  {
    faqId: 10,
    faqTitle: '백업은 자동으로 되나요?',
    faqAnswer: '일 단위 자동 백업이 기본 제공되며, 보관 기간은 7일입니다.',
  },
  {
    faqId: 11,
    faqTitle: 'API 키는 어디서 발급받나요?',
    faqAnswer: '콘솔 > 개발자 설정 > API 키 메뉴에서 발급할 수 있습니다.',
  },
  {
    faqId: 12,
    faqTitle: '결제 수단은 무엇을 지원하나요?',
    faqAnswer: '신용카드와 학교 연구비 정산을 지원합니다.',
  },
  {
    faqId: 13,
    faqTitle: '사용하지 않는 리소스는 자동 정리되나요?',
    faqAnswer: '일정 기간 미사용 시 알림 후 정리되며, 설정에서 정책을 변경할 수 있습니다.',
  },
  {
    faqId: 14,
    faqTitle: '문의는 어디에 남기면 되나요?',
    faqAnswer: 'FAQ 하단 문의하기 또는 공지사항의 문의요청을 이용해 주세요.',
  },
  {
    faqId: 15,
    faqTitle: '로그는 얼마나 보관되나요?',
    faqAnswer: '애플리케이션 로그는 기본 30일간 보관됩니다.',
  },
  {
    faqId: 16,
    faqTitle: '외부 DB와 연동할 수 있나요?',
    faqAnswer: '네, 네트워크 정책 허용 범위 내에서 외부 DB 연동이 가능합니다.',
  },
  {
    faqId: 17,
    faqTitle: 'SSL 인증서는 제공되나요?',
    faqAnswer: '기본 도메인에는 자동 SSL이 적용되며, 커스텀 도메인도 발급을 지원합니다.',
  },
  {
    faqId: 18,
    faqTitle: '계정 삭제는 어떻게 하나요?',
    faqAnswer: '설정 > 계정 관리에서 탈퇴 요청이 가능하며, 처리까지 최대 7일이 소요됩니다.',
  },
  {
    faqId: 19,
    faqTitle: '트래픽 한도를 초과하면 어떻게 되나요?',
    faqAnswer: '일시적으로 서비스가 제한되며, 한도 상향 요청 후 재개됩니다.',
  },
  {
    faqId: 20,
    faqTitle: '개발/운영 환경을 분리할 수 있나요?',
    faqAnswer: '프로젝트 단위로 환경을 분리해 구성할 수 있습니다.',
  },
  {
    faqId: 21,
    faqTitle: '알림 설정을 변경할 수 있나요?',
    faqAnswer: '콘솔 알림 설정에서 이메일/슬랙 알림을 개별 설정할 수 있습니다.',
  },
  {
    faqId: 22,
    faqTitle: '컨테이너 배포를 지원하나요?',
    faqAnswer: 'Docker 이미지 기반 배포를 지원합니다. 배포 가이드를 참고해 주세요.',
  },
  {
    faqId: 23,
    faqTitle: '요금 영수증은 어디서 받나요?',
    faqAnswer: '결제 내역 메뉴에서 월별 영수증을 다운로드할 수 있습니다.',
  },
  {
    faqId: 24,
    faqTitle: '점검 일정은 미리 공지되나요?',
    faqAnswer: '정기 점검은 최소 3일 전 공지사항에 안내됩니다.',
  },
  {
    faqId: 25,
    faqTitle: '지원 가능 리전은 어디인가요?',
    faqAnswer: '현재 국내 리전을 기본 제공하며, 추후 확장을 검토 중입니다.',
  },
] as const;

export const MOCK_FAQ_LIST: FaqListResponse = {
  categories: {
    CAT_GENERAL: {
      categoryImg: { url: 'https://cdn.aolda.io/faq/general.png' },
      categoryTitle: '일반',
    },
    CAT_BILLING: {
      categoryImg: { url: 'https://cdn.aolda.io/faq/billing.png' },
      categoryTitle: '요금',
    },
    CAT_TECHNICAL: {
      categoryImg: { url: 'https://cdn.aolda.io/faq/technical.png' },
      categoryTitle: '기술',
    },
  },
  questions: {
    paginate: { from: 1, to: 10, curr: 1 },
    total: MOCK_FAQ_QUESTIONS.length,
    data: [...MOCK_FAQ_QUESTIONS],
  },
};

const NOTICE_TYPES = [
  'NOTICE_TYPE/SERVICE',
  'NOTICE_TYPE/USAGE',
  'NOTICE_TYPE/INQUIRY',
] as const;

const NOTICE_TITLES = [
  '클라우드 사용 가이드 업데이트',
  '정기 점검 안내',
  '서비스 이용약관 개정 안내',
  '신규 콘솔 기능 출시',
  '리소스 한도 상향 안내',
  '보안 패치 적용 안내',
  '결제 시스템 점검 공지',
  '학생 인증 절차 변경 안내',
  'API 버전 업데이트 공지',
  '스토리지 정책 변경 안내',
  '네트워크 지연 현상 복구 안내',
  '신규 리전 오픈 예고',
  '문의 처리 지연 안내',
  '백업 정책 개선 안내',
  '대시보드 UI 개선 안내',
  '도메인 연결 가이드 업데이트',
  '요금제 개편 사전 안내',
  '장애 복구 완료 보고',
  '개발자 문서 개편 안내',
  '계정 보안 강화 안내',
  '로그 보관 기간 변경 안내',
  '컨테이너 배포 베타 오픈',
  '고객 지원 채널 변경 안내',
  '서비스 점검 일정 변경',
  '연말 운영 일정 안내',
] as const;

export const MOCK_NOTICE_LIST: NoticeListResponse = {
  paginate: { from: 1, to: 10, curr: 1 },
  total: NOTICE_TITLES.length,
  data: NOTICE_TITLES.map((noticeTitle, index) => {
    const noticeId = index + 1;
    const day = String((index % 28) + 1).padStart(2, '0');
    const month = String((index % 12) + 1).padStart(2, '0');

    return {
      noticeId,
      noticeType: NOTICE_TYPES[index % NOTICE_TYPES.length],
      noticeTitle,
      createdAt: `2025-${month}-${day} 10:00:00`,
    };
  }),
};

export const getMockNoticeDetail = (noticeId: number): NoticeDetailResponse => {
  const list = MOCK_NOTICE_LIST.data;
  const index = list.findIndex((item) => item.noticeId === noticeId);
  const item = index >= 0 ? list[index] : list[0];
  const resolvedId = item?.noticeId ?? 1;
  const resolvedIndex = index >= 0 ? index : 0;

  return {
    data: {
      noticeId: resolvedId,
      noticeType: item?.noticeType ?? 'NOTICE_TYPE/SERVICE',
      noticeTitle: item?.noticeTitle ?? '공지사항',
      createdAt: item?.createdAt ?? '2025-01-01 09:00:00',
      createdBy: { userId: 1, userName: '관리자' },
      readCount: 100 + resolvedId,
      attatchments:
        resolvedId % 3 === 1
          ? [
              {
                attatchmentId: resolvedId,
                file: { url: `https://cdn.aolda.io/notices/notice-${resolvedId}.pdf` },
              },
            ]
          : [],
      content: `# ${item?.noticeTitle ?? '공지사항'}\n\n- 본 공지는 mock 데이터입니다.\n- 공지 번호: ${resolvedId}\n- 세부 내용은 운영 정책에 따라 변경될 수 있습니다.`,
    },
    neighbors: {
      prev: resolvedIndex > 0 ? list[resolvedIndex - 1].noticeId : 0,
      next:
        resolvedIndex < list.length - 1 ? list[resolvedIndex + 1].noticeId : 0,
    },
  };
};

/** @deprecated 목록 첫 항목 기준 상세. 동적 ID는 getMockNoticeDetail 사용 */
export const MOCK_NOTICE_DETAIL: NoticeDetailResponse = getMockNoticeDetail(1);

const PRODUCT_ICON = { url: '/product/product_serviceCard.png' };

const DESC_ONE_LINE = '1줄설명';
const DESC_TWO_LINE = '2줄설명 2줄설명 2줄설명입니다.';
const DESC_THREE_LINE =
  'VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다.';

export const MOCK_PRODUCT_LIST: ProductListResponse = {
  categories: {
    CAT_FAVORITES: {
      categoryImg: { url: '/product/main_title_icon.png' },
      categoryTitle: '즐겨찾기',
    },
    CAT_COMPUTE: {
      categoryImg: { url: '/product/main_title_icon.png' },
      categoryTitle: '컴퓨팅',
    },
    CAT_NETWORK: {
      categoryImg: { url: '/product/main_title_icon.png' },
      categoryTitle: '네트워크',
    },
    CAT_DATABASE: {
      categoryImg: { url: '/product/main_title_icon.png' },
      categoryTitle: '데이터베이스',
    },
    CAT_STORAGE: {
      categoryImg: { url: '/product/main_title_icon.png' },
      categoryTitle: '스토리지',
    },
  },
  products: {
    CAT_FAVORITES: [
      {
        productId: 1,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_THREE_LINE,
      },
      {
        productId: 2,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_ONE_LINE,
      },
      {
        productId: 3,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_TWO_LINE,
      },
    ],
    CAT_COMPUTE: [
      {
        productId: 4,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_THREE_LINE,
      },
      {
        productId: 5,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_ONE_LINE,
      },
      {
        productId: 6,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_TWO_LINE,
      },
      {
        productId: 7,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_THREE_LINE,
      },
    ],
    CAT_NETWORK: [
      {
        productId: 8,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_ONE_LINE,
      },
      {
        productId: 9,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_TWO_LINE,
      },
      {
        productId: 10,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_THREE_LINE,
      },
      {
        productId: 11,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_ONE_LINE,
      },
      {
        productId: 12,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_TWO_LINE,
      },
    ],
    CAT_DATABASE: [
      {
        productId: 13,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_THREE_LINE,
      },
      {
        productId: 14,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_ONE_LINE,
      },
      {
        productId: 15,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_TWO_LINE,
      },
    ],
    CAT_STORAGE: [
      {
        productId: 16,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_ONE_LINE,
      },
      {
        productId: 17,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_THREE_LINE,
      },
      {
        productId: 18,
        productIcon: PRODUCT_ICON,
        productName: 'AMDB',
        description: DESC_TWO_LINE,
      },
    ],
  },
};

const flattenMockProducts = () =>
  Object.values(MOCK_PRODUCT_LIST.products).flat();

export const getMockProductDetail = (
  productId: number,
): ProductDetailResponse => {
  const product =
    flattenMockProducts().find((item) => item.productId === productId) ??
    flattenMockProducts()[0];

  return {
    productId: product.productId,
    productIcon: product.productIcon,
    productName: product.productName,
    description: product.description,
    cloudLink: `https://cloud.aolda.io/products/${product.productId}`,
    projectLink: `https://aolda.io/projects/${product.productId}`,
    // 구조화 섹션(문제점/해결책)은 getProductDetailData enrich에서 채움
    content: '',
    participants: [
      {
        crewId: 15,
        profile: { url: '/product/product_detail/product_detail_developerCard.png' },
        crewName: '정우재 크루',
        univDepartment: '소프트웨어',
        univJoinedYear: '22',
      },
      {
        crewId: 31,
        profile: { url: '/product/product_detail/product_detail_developerCard.png' },
        crewName: '이동훈 크루',
        univDepartment: '사이버보안',
        univJoinedYear: '21',
      },
      {
        crewId: 42,
        profile: { url: '/product/product_detail/product_detail_developerCard.png' },
        crewName: '인승진 크루',
        univDepartment: '소프트웨어',
        univJoinedYear: '21',
      },
      {
        crewId: 55,
        profile: { url: '/product/product_detail/product_detail_developerCard.png' },
        crewName: '한동현 크루',
        univDepartment: '소프트웨어',
        univJoinedYear: '21',
      },
    ],
    // thumbnail만 있어도 enrich가 리치 카드(DEFAULT_SIMILAR_SERVICES)로 보정함
    relateServices: [
      {
        pageTitle: 'GitHub - openstack/trove',
        thumbnailImg: {
          url: 'https://opengraph.githubassets.com/1/openstack/trove',
        },
        serviceLink: 'https://github.com/openstack/trove',
      },
      {
        pageTitle: 'Amazon RDS',
        thumbnailImg: {
          url: 'https://a0.awsstatic.com/libra-css/images/logos/aws_logo_smile_1200x630.png',
        },
        serviceLink: 'https://aws.amazon.com/ko/rds/',
      },
      {
        pageTitle: 'NAVER CLOUD PLATFORM',
        thumbnailImg: {
          url: 'https://www.ncloud.com/img/main/og/ncloud_og.png',
        },
        serviceLink: 'https://www.ncloud.com/',
      },
      {
        pageTitle: 'Spaces - Hugging Face',
        thumbnailImg: {
          url: 'https://huggingface.co/datasets/huggingface/brand-assets/resolve/main/hf-logo.png',
        },
        serviceLink: 'https://huggingface.co/spaces',
      },
    ],
  };
};

export const MOCK_PRODUCT_DETAIL: ProductDetailResponse = getMockProductDetail(1);
