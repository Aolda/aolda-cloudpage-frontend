# 컴포넌트 구조 및 사용 가이드

## 프로젝트 디렉토리 구조

이 프로젝트는 **Atomic Design** 패턴을 기반으로 구성되어 있습니다.

```
src/
├── components/
│   ├── molecules/          # 분자 컴포넌트 (재사용 가능한 작은 단위)
│   │   ├── Accordion/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Breadcrumb/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Button/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Filter/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── ImageCard/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── InPageNavigation/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── IntroMenu/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── ItemCard/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Logo/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── MainMenu/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── MenuCard/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── NoticeItem/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Pagination/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── Search/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── SectionTitle/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── ServiceCard/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── StatCard/
│   │   │   ├── index.tsx
│   │   │   └── style.ts
│   │   ├── ValueIcon/
│   │   │   └── index.tsx
│   │   └── ValueItems/
│   │       ├── index.tsx
│   │       └── style.ts
│   │
│   └── organisms/           # 유기체 컴포넌트 (복합 컴포넌트)
│       ├── FAQCategoryFilter/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── FAQHeroSection/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── FAQList/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── Footer/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── Header/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── IntroSection/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── MeetSection/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── NoticeDetailContent/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── NoticeFilters/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── NoticeHeroSection/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── NoticeList/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── NumbersSection/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── PartnersSection/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── ProductHeroSection/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── ProductList/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── ServiceInfoSection/
│       │   ├── index.tsx
│       │   └── style.ts
│       ├── SideNavigation/
│       │   ├── index.tsx
│       │   └── style.ts
│       └── ValuesSection/
│           ├── index.tsx
│           └── style.ts
│
├── pages/                   # 페이지 컴포넌트
│   ├── FAQ/
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── Introduction/
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── Notice/
│   │   ├── index.tsx
│   │   └── style.ts
│   ├── NoticeDetail/
│   │   └── index.tsx
│   └── Product/
│       ├── index.tsx
│       └── style.ts
│
└── styles/                  # 전역 스타일
    ├── theme.ts
    └── global.ts
```

---

## 페이지별 사용 컴포넌트

### 1. Introduction 페이지 (메인 홈페이지)

**위치**: `src/pages/Introduction/index.tsx`

**구성 섹션**:
- Header
- IntroSection
- NumbersSection
- ServiceInfoSection
- PartnersSection
- ValuesSection
- MeetSection
- Footer

**사용하는 Molecules 컴포넌트**:

#### Logo
- **위치**: `src/components/molecules/Logo/index.tsx`
- **설명**: 로고를 표시하는 범용 컴포넌트. BrandLogo와 PartnerLogo 두 가지 모드를 지원합니다.
- **사용 위치**: Header, Footer, PartnersSection

#### MainMenu
- **위치**: `src/components/molecules/MainMenu/index.tsx`
- **설명**: 헤더의 메뉴 목록을 나타내는 컴포넌트입니다.
- **사용 위치**: Header

#### SectionTitle
- **위치**: `src/components/molecules/SectionTitle/index.tsx`
- **설명**: 페이지의 각 섹션에 사용되는 제목 컴포넌트. 배경 이미지가 있으면 이미지 위에 오버레이로 표시하고, 없으면 일반 컨테이너에 표시합니다.
- **사용 위치**: IntroSection, NumbersSection, ServiceInfoSection, PartnersSection, ValuesSection, MeetSection

#### MenuCard
- **위치**: `src/components/molecules/MenuCard/index.tsx`
- **설명**: 제목과 액션 링크를 포함한 카드 형태의 메뉴 아이템입니다.
- **사용 위치**: IntroSection

#### StatCard
- **위치**: `src/components/molecules/StatCard/index.tsx`
- **설명**: 숫자와 라벨을 표시하는 통계 카드입니다.
- **사용 위치**: NumbersSection

#### ItemCard
- **위치**: `src/components/molecules/ItemCard/index.tsx`
- **설명**: 아이콘, 제목, 설명을 표시하는 카드입니다.
- **사용 위치**: ValuesSection (ValueItems를 통해)

#### Button
- **위치**: `src/components/molecules/Button/index.tsx`
- **설명**: 범용 버튼 컴포넌트. 링크 버튼과 일반 버튼을 모두 지원합니다.
- **사용 위치**: Header, MeetSection

#### ValueItems
- **위치**: `src/components/molecules/ValueItems/index.tsx`
- **설명**: SectionTitle과 ItemCard를 조합한 컴포넌트입니다.
- **사용 위치**: ValuesSection

---

### 2. Product 페이지 (제품 소개)

**위치**: `src/pages/Product/index.tsx`

**사용하는 Molecules 컴포넌트**:

#### SectionTitle
- **설명**: 제품 소개 페이지의 히어로 섹션 제목에 사용됩니다.
- **사용 위치**: ProductHeroSection

#### Search
- **위치**: `src/components/molecules/Search/index.tsx`
- **설명**: 제품/서비스를 검색할 수 있는 입력 필드입니다.
- **사용 위치**: ProductList

#### ServiceCard
- **위치**: `src/components/molecules/ServiceCard/index.tsx`
- **설명**: 제품/서비스를 표시하는 카드입니다. 아이콘, 제목, 설명을 포함합니다.
- **사용 위치**: ProductList

#### Filter
- **위치**: `src/components/molecules/Filter/index.tsx`
- **설명**: 체크박스 형태(다중 선택) 또는 태그 형태(단일 선택)의 필터를 제공합니다.
- **사용 위치**: SideNavigation (checkbox 모드)

---

### 3. Notice 페이지 (공지사항)

**위치**: `src/pages/Notice/index.tsx`

**사용하는 Molecules 컴포넌트**:

#### SectionTitle
- **설명**: 공지사항 페이지의 히어로 섹션 제목에 사용됩니다.
- **사용 위치**: NoticeHeroSection

#### Search
- **설명**: 공지사항을 검색할 수 있는 입력 필드입니다.
- **사용 위치**: NoticeHeroSection

#### NoticeItem
- **위치**: `src/components/molecules/NoticeItem/index.tsx`
- **설명**: 공지사항 목록의 개별 항목을 표시합니다.
- **사용 위치**: NoticeList

#### Button
- **설명**: "작성하기" 버튼에 사용됩니다.
- **사용 위치**: NoticeList

#### Pagination
- **위치**: `src/components/molecules/Pagination/index.tsx`
- **설명**: 페이지 목록과 이전/다음 버튼을 제공합니다.
- **사용 위치**: NoticeList

---

### 4. NoticeDetail 페이지 (공지사항 상세)

**위치**: `src/pages/NoticeDetail/index.tsx`

**사용하는 Molecules 컴포넌트**:

#### Breadcrumb
- **위치**: `src/components/molecules/Breadcrumb/index.tsx`
- **설명**: 페이지 경로를 표시하는 네비게이션 컴포넌트입니다.
- **사용 위치**: NoticeDetail 페이지

#### InPageNavigation
- **위치**: `src/components/molecules/InPageNavigation/index.tsx`
- **설명**: 이전글/다음글 네비게이션을 제공합니다.
- **사용 위치**: NoticeDetailContent

#### Button
- **설명**: "목록" 버튼에 사용됩니다.
- **사용 위치**: NoticeDetailContent

---

### 5. FAQ 페이지

**위치**: `src/pages/FAQ/index.tsx`

**사용하는 Molecules 컴포넌트**:

#### Breadcrumb
- **설명**: FAQ 페이지 경로를 표시합니다.
- **사용 위치**: FAQHeroSection

#### Search
- **설명**: FAQ를 검색할 수 있는 입력 필드입니다.
- **사용 위치**: FAQHeroSection

#### Accordion
- **위치**: `src/components/molecules/Accordion/index.tsx`
- **설명**: 제목을 클릭하면 내용이 펼쳐지거나 접히는 아코디언 형태의 컴포넌트입니다.
- **사용 위치**: FAQList

#### Pagination
- **설명**: FAQ 목록의 페이지네이션에 사용됩니다.
- **사용 위치**: FAQList

---

## 주요 Molecules 컴포넌트 요약

### Logo
로고를 표시하는 범용 컴포넌트. BrandLogo와 PartnerLogo 두 가지 모드를 지원합니다.

### MainMenu
헤더의 메뉴 목록을 나타내는 컴포넌트입니다.

### SectionTitle
페이지의 각 섹션에 사용되는 제목 컴포넌트. 배경 이미지가 있으면 이미지 위에 오버레이로 표시하고, 없으면 일반 컨테이너에 표시합니다.

### MenuCard
제목과 액션 링크를 포함한 카드 형태의 메뉴 아이템입니다.

### StatCard
숫자와 라벨을 표시하는 통계 카드입니다.

### ItemCard
아이콘, 제목, 설명을 표시하는 카드입니다.

### Button
범용 버튼 컴포넌트. 링크 버튼과 일반 버튼을 모두 지원합니다.

### Search
제품/서비스를 검색할 수 있는 입력 필드입니다.

### ServiceCard
제품/서비스를 표시하는 카드입니다. 아이콘, 제목, 설명을 포함합니다.

### Filter
체크박스 형태(다중 선택) 또는 태그 형태(단일 선택)의 필터를 제공합니다.

### NoticeItem
공지사항 목록의 개별 항목을 표시합니다.

### Pagination
페이지 목록과 이전/다음 버튼을 제공합니다.

### Breadcrumb
페이지 경로를 표시하는 네비게이션 컴포넌트입니다.

### Accordion
제목을 클릭하면 내용이 펼쳐지거나 접히는 아코디언 형태의 컴포넌트입니다.

### InPageNavigation
이전글/다음글 네비게이션을 제공합니다.

---

## 스타일링

모든 컴포넌트는 `styled-components`를 사용하여 스타일링됩니다.

- 각 컴포넌트는 `style.ts` 파일에 스타일 정의
- 테마는 `src/styles/theme.ts`에서 중앙 관리
- 전역 스타일은 `src/styles/global.ts`에서 정의

---

## 참고사항

- 모든 컴포넌트는 TypeScript로 작성되어 타입 안정성 보장
- JSDoc 주석을 통해 컴포넌트 사용법 문서화
- KRDS (Korea Design System) 표준에 맞춰 컴포넌트 이름 명명
- 접근성(accessibility)을 고려한 aria-label, alt 속성 사용
