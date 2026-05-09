# aolda-cloudpage-frontend

아주대학교 클라우드 서비스 **아올다(Aolda)** 소개·안내를 위한 공식 웹 프론트엔드입니다. 서비스 소개(랜딩), 제품(프로젝트) 목록·상세, 공지사항, FAQ를 제공합니다.

## 요구 사항

- **Node.js** 18.x 이상 권장  
- 패키지 매니저: **npm** (또는 호환되는 `yarn`, `pnpm`)

## 실행 방법

저장소를 클론한 뒤 프로젝트 루트에서:

```bash
npm install
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 으로 접속합니다.

### npm 스크립트

| 명령 | 설명 |
|------|------|
| `npm run dev` | 개발 서버 (Next.js) |
| `npm run build` | 프로덕션 빌드 |
| `npm run start` | 빌드 결과 실행 (`build` 후) |
| `npm run lint` | ESLint (`next lint`) |
| `npm test` | 단위 테스트 (Vitest) |

## 기술 스택

| 구분 | 사용 기술 |
|------|-----------|
| 프레임워크 | [Next.js 14](https://nextjs.org/) (App Router) |
| UI | [React 18](https://react.dev/) |
| 언어 | [TypeScript](https://www.typescriptlang.org/) |
| 스타일 | [styled-components v6](https://styled-components.com/) + 테마(`src/styles/theme.ts`) |
| 마크다운 | [react-markdown](https://github.com/remarkjs/react-markdown) |
| HTML 정제 | [isomorphic-dompurify](https://github.com/kkomelin/isomorphic-dompurify) |
| 테스트 | [Vitest](https://vitest.dev/) |

`next.config.js`에서 **styled-components 컴파일러**가 켜져 있으며, App Router SSR을 위해 `StyledComponentsProvider`에서 `ServerStyleSheet` + `useServerInsertedHTML` 패턴을 사용합니다.

## 폴더 구조

```
aolda-cloudpage-frontend/
├── app/                      # App Router (라우트·레이아웃·에러 경계)
│   ├── layout.tsx            # 루트 레이아웃 (서버) + StyledComponentsProvider
│   ├── page.tsx              # / (메인)
│   ├── loading.tsx           # 전역 로딩 UI
│   ├── error.tsx             # 세그먼트 에러
│   ├── global-error.tsx      # 루트 레이아웃 에러
│   ├── not-found.tsx         # 404
│   ├── faq/page.tsx          # /faq
│   ├── notice/
│   │   ├── page.tsx          # /notice
│   │   └── [id]/page.tsx     # /notice/:id
│   └── product/
│       ├── page.tsx          # /product
│       └── [id]/page.tsx     # /product/:id
├── middleware.ts             # FAQ 경로 대소문자 정규화 등
├── public/                   # 정적 자산 (이미지 등)
├── src/
│   ├── components/
│   │   ├── atoms/            # 최소 UI 단위
│   │   ├── molecules/        # 조합 컴포넌트
│   │   ├── organisms/        # 섹션 단위 UI
│   │   ├── templates/        # 페이지 단위 템플릿 (BaseTemplate 등)
│   │   └── providers/        # StyledComponentsProvider
│   ├── lib/
│   │   ├── data/             # 목 데이터·조회 (공지·제품 상세 등)
│   │   └── sanitizeHtml.ts   # HTML 문자열 정제
│   └── styles/               # GlobalStyle, theme
├── next.config.js
├── tsconfig.json
├── vitest.config.ts
└── package.json
```

경로 별칭: `@/*` → `src/*` (`tsconfig.json`).

> 과거 개발용으로만 쓰이던 `app/molecules`, `app/organisms` **라우트는 제거**되었습니다. 디자인 시스템 컴포넌트는 `src/components/molecules`, `src/components/organisms`에 그대로 있습니다.

## 주요 페이지

| 경로 | 설명 |
|------|------|
| `/` | 메인 랜딩: 소개, 수치, 파트너, 불편 해소·약속, CTA 등 |
| `/product` | 제품(서비스) 목록, 검색·카테고리, 카드 그리드 |
| `/product/[id]` | 제품 상세: 개요, 문제·해결, 개발진, 유사 서비스 등 (예: `amdb`) |
| `/notice` | 공지 목록·검색·필터·페이지네이션 |
| `/notice/[id]` | 공지 상세 (없는 id는 404) |
| `/faq` | FAQ 검색·카테고리·아코디언 |

공식 네비게이션의 FAQ 링크는 소문자 **`/faq`** 입니다. `/FAQ` 등 대소문자만 다른 요청은 `middleware`에서 **`/faq`로 301/308 리다이렉트**됩니다.

## 데이터

- 공지·제품 상세 등은 현재 **`src/lib/data`** 의 목 데이터를 사용합니다.
- API·CMS 연동 시 동일 모듈을 fetch/서버 액션 등으로 교체하면 됩니다.

## 배포

일반적인 **Next.js Node 서버** 배포 방식을 따릅니다.

1. 빌드: `npm run build`
2. 실행: `npm run start` (기본 포트 3000)

호스팅 예시:

- **[Vercel](https://vercel.com/)**: 저장소 연결 후 프레임워크 프리셋 Next.js  
- **자체 서버 / Docker**: Node 런타임에서 `next start` 실행  
- **정적 내보내기**가 필요하면 `output: 'export'` 등 별도 설정이 필요하며, 현재 저장소는 기본 설정(SSR/동적 라우트) 기준입니다.

환경 변수는 현재 필수 항목이 거의 없으나, 추후 API URL 등을 추가할 때 `.env.local` 및 호스팅 대시보드에 동일 키를 등록하면 됩니다.

## 라이선스 및 문의

저장소 정책에 따릅니다. 이슈·문의는 해당 Git 호스팅(예: GitHub / 학교 GitLab)의 이슈 트래커를 이용해 주세요.
