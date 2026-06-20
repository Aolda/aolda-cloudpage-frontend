# feat: aolda-ahp-backend Cloud API 전 페이지 연동

## 요약

* [aolda-ahp-backend](https://github.com/Aolda/aolda-ahp-backend) Cloud API 스펙을 프론트엔드 전 페이지에 반영
* 서버 컴포넌트에서 API 호출 후 템플릿에 props 전달
* API 실패 시 기존 mock 데이터(`lib/data`)로 graceful fallback
* DTO 타입·매퍼·단위 테스트로 백엔드 응답 구조 정합성 유지

## 연동 API

| 페이지 | 경로 | 백엔드 API | 용도 |
|--------|------|-----------|------|
| 메인 | `/` | `GET /cloud/brief` | 누적 사용자·프로젝트·블로그 지표 |
| 메인 | `/` | `GET /cloud/use_project` | 클라우드 사용처 카드 |
| FAQ | `/faq` | `GET /cloud/qna` | 카테고리 탭 + FAQ 아코디언 |
| 공지 | `/notice` | `GET /cloud/notice` | 공지 목록 |
| 공지 상세 | `/notice/[id]` | `GET /cloud/notice/:notice_id` | 본문·첨부·이전/다음 |
| 제품 | `/product` | `GET /cloud/product` | 카테고리 필터 + 서비스 카드 |
| 제품 상세 | `/product/[id]` | `GET /cloud/product/:product_id` | 상세·개발자·유사 서비스 |

## 주요 변경 사항

### API 레이어 (`src/lib/api/`)

```
src/lib/api/
├── config.ts              # API Base URL (기본: http://localhost:8001)
├── client.ts              # fetch 래퍼 + ApiError
├── cloud.ts               # Cloud 엔드포인트 함수
├── types/cloud.ts         # 백엔드 DTO 타입 (attatchments 등 오탈자 키 유지)
├── fallbacks.ts           # API 실패 시 fallback 데이터
├── main.ts                # getMainPageData()
├── faq.ts                 # getFaqPageData()
├── notice.ts              # getNoticePageData(), getNoticeDetailData()
├── product.ts             # getProductPageData(), getProductDetailData()
├── index.ts               # barrel export
└── mappers/
    ├── main.ts            # brief, use_project → UI
    ├── faq.ts             # qna → 카테고리 + 아코디언
    ├── notice.ts          # notice 목록/상세 → NoticeItem, NoticeDetailData
    ├── product.ts         # product 목록/상세 → ProductListItemView, ProductDetailRecord
    └── *.test.ts          # 매퍼 단위 테스트
```

### 페이지 연동

* `app/page.tsx` — `getMainPageData()` → `MainPageTemplate`
* `app/faq/page.tsx`, `app/FAQ/page.tsx` — `getFaqPageData()` → `FAQPageTemplate`
* `app/notice/page.tsx` — `getNoticePageData()` → `NoticePageTemplate`
* `app/notice/[id]/page.tsx` — `getNoticeDetailData()` → `NoticeDetailPageTemplate`
* `app/product/page.tsx` — `getProductPageData()` → `ProductPageClient` (검색 쿼리 처리)
* `app/product/[id]/page.tsx` — `getProductDetailData()` → `ProductDetailPageTemplate`

### 컴포넌트 변경

* `MainPageTemplate` — `stats`, `partners` props 수신
* `PartnersSection` — API 이미지 URL·기간 표시
* `ProductPageTemplate` — API 카테고리·서비스 목록 props
* `ProductPageClient` — `searchParams` 기반 검색 연동 (신규)

### 환경 설정

* `.env.local.example` — `NEXT_PUBLIC_API_BASE_URL=http://localhost:8001` 및 엔드포인트 주석
* `next.config.js` — `cdn.aolda.io` remotePatterns (API 이미지 URL)

### 매퍼 핵심 로직

* **brief** — 세 번째 지표 키 `__________` 동적 처리
* **use_project** — 학기 기간 포맷 + 마퀴용 6개 패딩
* **notice** — `NOTICE_TYPE/*` → 한글 카테고리, 날짜 `YYYY.MM.DD`
* **notice detail** — `attatchments` → 첨부파일, `neighbors` → prev/next href
* **product** — 카테고리별 flatMap, `/product/{productId}` 링크
* **product detail** — `participants` → developers, `relateServices` → similarServices

## 로컬 실행 방법

```bash
# 1. 백엔드 (포트 8001)
cd aolda-ahp-backend
USE_MOCK_DATA=true CORS_ALLOW_ORIGINS=http://localhost:3000 npm run dev

# 2. 프론트엔드
cp .env.local.example .env.local
yarn dev
```

## Test plan

- [ ] 백엔드 `localhost:8001` 실행 후 메인 `/` 지표·파트너 카드 API 데이터 표시 확인
- [ ] `/faq` 카테고리 탭·FAQ 목록 API 연동 확인
- [ ] `/notice` 목록 및 `/notice/1` 상세(본문·첨부·이전/다음) 확인
- [ ] `/product` 카테고리 필터·서비스 카드 및 `/product/1` 상세 확인
- [ ] 백엔드 중지 시 각 페이지 fallback 데이터로 정상 렌더링 확인
- [ ] `yarn test` — main/faq/notice/product 매퍼 테스트 통과 확인
- [ ] `cdn.aolda.io` 이미지 URL 원격 이미지 로드 확인
