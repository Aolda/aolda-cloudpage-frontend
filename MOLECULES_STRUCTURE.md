# Molecules 컴포넌트 구조 문서

이 문서는 아올다 클라우드 페이지 프론트엔드 프로젝트의 Molecules 컴포넌트 구조를 정리한 문서입니다.

## 목차

- [디렉토리 구조](#디렉토리-구조)
- [컴포넌트 목록](#컴포넌트-목록)
- [컴포넌트 상세 정보](#컴포넌트-상세-정보)

---

## 디렉토리 구조

```
src/components/molecules/
├── Accordion/
│   ├── index.tsx
│   └── style.ts
├── Breadcrumb/
│   ├── index.tsx
│   └── style.ts
├── DeveloperCard/
│   ├── index.tsx
│   └── style.ts
├── Filter/
│   ├── index.tsx
│   └── style.ts
├── HeroBanner/
│   ├── index.tsx
│   └── style.ts
├── ImageCard/
│   ├── index.tsx
│   └── style.ts
├── ImageTitle/
│   ├── index.tsx
│   └── style.ts
├── InPageNavigation/
│   ├── index.tsx
│   └── style.ts
├── IntroSectionTitle/
│   ├── index.tsx
│   └── style.ts
├── ItemCard/
│   ├── index.tsx
│   └── style.ts
├── MainMenu/
│   ├── index.tsx
│   └── style.ts
├── MenuCard/
│   ├── index.tsx
│   └── style.ts
├── NoticeItem/
│   ├── index.tsx
│   └── style.ts
├── Pagination/
│   ├── index.tsx
│   └── style.ts
├── ProblemItem/
│   ├── index.tsx
│   └── style.ts
├── Search/
│   ├── index.tsx
│   └── style.ts
├── ServiceCard/
│   ├── index.tsx
│   └── style.ts
├── SimilarServiceCard/
│   ├── index.tsx
│   └── style.ts
├── SolutionCard/
│   ├── index.tsx
│   └── style.ts
└── StatCard/
    ├── index.tsx
    └── style.ts
```

---

## 컴포넌트 목록

| 번호 | 컴포넌트명 | 사용 페이지 | 설명 |
|------|-----------|------------|------|
| 0 | MainMenu | Introduction (Header) | 메인 네비게이션 메뉴 |
| 1 | HeroBanner | Introduction, Product | 히어로 섹션 배너 |
| 2 | MenuCard | Introduction | 메뉴 카드 (개발자 카드) |
| 3 | IntroSectionTitle | Introduction, Product, Notice | 섹션 제목 컴포넌트 |
| 4 | StatCard | Introduction | 통계 카드 |
| 5 | ImageCard | (현재 미사용) | 이미지 카드 |
| 6 | ItemCard | Introduction | 아이템 카드 |
| 7 | ImageTitle | Product, ProductDetail | 아이콘과 제목을 함께 표시 |
| 8 | ServiceCard | Product | 서비스 카드 |
| 9 | DeveloperCard | ProductDetail | 개발자 카드 (크루 카드) |
| 10 | Filter (Checkbox) | Product | 체크박스 필터 |
| 11 | ProblemItem | ProductDetail | 문제점 아이템 (제거 고려 중) |
| 12 | SolutionCard | ProductDetail | 해결책 카드 |
| 13 | SimilarServiceCard | ProductDetail | 유사 서비스 카드 |
| 14 | Breadcrumb | Product, ProductDetail, Notice, NoticeDetail, FAQ | 브레드크럼 네비게이션 |
| 15 | Filter (Tag) | Notice | 태그 필터 |
| 16 | Pagination | Notice, FAQ | 페이지네이션 |
| 17 | NoticeItem | Notice | 공지사항 아이템 |
| 18 | InPageNavigation | NoticeDetail | 페이지 내 네비게이션 |
| 19 | Accordion | FAQ | 아코디언 컴포넌트 |
| 20 | Search | Product, Notice, FAQ | 검색 컴포넌트 |

---

## 컴포넌트 상세 정보

### 0. MainMenu

**위치**: `src/components/molecules/MainMenu/`

**사용 페이지**: Introduction (Header에서 사용)

**설명**: 메인 네비게이션 메뉴 컴포넌트

**Props**:
```typescript
interface MainMenuProps {
  items: Array<{
    label: string;
    href: string;
  }>;
}
```

**사용 예시**:
```tsx
<MainMenu
  items={[
    { label: '제품 소개', href: '/product' },
    { label: '공지사항', href: '/notice' },
    { label: 'FAQ', href: '/FAQ' },
  ]}
/>
```

---

### 1. HeroBanner

**위치**: `src/components/molecules/HeroBanner/`

**사용 페이지**: Introduction, Product

**설명**: 배경 이미지 위에 텍스트를 오버레이로 표시하는 히어로 섹션 컴포넌트

**Props**:
```typescript
interface HeroBannerProps {
  backgroundSrc: string;                    // 배경 이미지 경로
  title: string | ReactNode;                 // 배너 제목
  description?: string | ReactNode;          // 배너 설명 (선택)
  textPosition?: 'left-top' | 'left-center' | 'left-bottom' | 
                 'center' | 'right-top' | 'right-center' | 'right-bottom';
  textColor?: string;                       // 텍스트 색상
  overlayOpacity?: number;                   // 오버레이 투명도 (0-1)
  height?: string;                          // 배너 높이
}
```

**사용 예시**:
```tsx
<HeroBanner
  backgroundSrc="/intro/intro_heroBanner.png"
  title={
    <>
      아주인의 꿈을 펼칠
      <br />
      파란하늘 속 작은구름
    </>
  }
  textPosition="left-top"
  textColor="#ffffff"
  overlayOpacity={0.4}
/>
```

---

### 2. MenuCard

**위치**: `src/components/molecules/MenuCard/`

**사용 페이지**: Introduction

**설명**: 제목과 액션 링크를 포함한 카드 형태의 메뉴 아이템 (개발자 카드)

**Props**:
```typescript
interface MenuCardProps {
  title: string | ReactNode;    // 카드 제목
  href: string;                 // 링크 경로
  actionLabel: string;          // 링크 버튼 텍스트
}
```

**사용 예시**:
```tsx
<MenuCard
  title={
    <>
      아올다,
      <br />
      처음이신가요?
    </>
  }
  actionLabel="사용 가이드"
  href="/useinfo"
/>
```

---

### 3. IntroSectionTitle

**위치**: `src/components/molecules/IntroSectionTitle/`

**사용 페이지**: Introduction, Product, Notice

**설명**: 페이지의 각 섹션에 사용되는 제목 컴포넌트. 배경 이미지가 있으면 이미지 위에 오버레이로 표시

**Props**:
```typescript
interface IntroSectionTitleProps {
  title?: string | ReactNode;        // 섹션 제목
  description?: string | ReactNode;  // 섹션 설명
  align?: 'left' | 'center';        // 텍스트 정렬 방향
  backgroundSrc?: string;             // 배경 이미지 경로
  titleColor?: string;                // 제목 텍스트 색상
  showTopBar?: boolean;               // 상단 bar 표시 여부
}
```

**사용 예시**:
```tsx
<IntroSectionTitle
  title={
    <>
      자유롭게 꿈을 펼치기 위해
      <br />
      아올다가 없앤{' '}
      <span style={{ color: 'rgb(61, 144, 212)' }}>불편함 3가지</span>
    </>
  }
  description={
    <>
      아주인 모두가 자유롭게 꿈을 펼칠 수 있도록
      <br />
      아래 3가지를 없앴어요
    </>
  }
  align="center"
  showTopBar={true}
  titleColor="rgb(3, 3, 3)"
/>
```

---

### 4. StatCard

**위치**: `src/components/molecules/StatCard/`

**사용 페이지**: Introduction

**설명**: 통계 정보를 표시하는 카드 컴포넌트

**Props**:
```typescript
interface StatCardProps {
  title: string;    // 통계 제목
  value: string;   // 통계 값
}
```

**사용 예시**:
```tsx
<StatCard title="누적 사용자" value="12,345 명" />
<StatCard title="누적 프로젝트 수" value="1,234개" />
```

---

### 5. ImageCard

**위치**: `src/components/molecules/ImageCard/`

**사용 페이지**: (현재 미사용)

**설명**: 이미지와 텍스트를 함께 표시하는 카드 컴포넌트

**Props**:
```typescript
interface ImageCardProps {
  image: string;              // 이미지 경로
  alt?: string;               // 이미지 대체 텍스트
  title?: string;             // 카드 제목
  description?: string;       // 카드 설명
  period?: string;           // 기간 정보
  isBackground?: boolean;     // 배경 이미지 모드
}
```

**사용 예시**:
```tsx
<ImageCard
  image="/intro/intro_used.png"
  alt="아주대학교 총학생회"
  title="아주대학교 총학생회"
  description="총학생회 공식홈페이지 운영"
  period="2024-1 ~ 2025-1"
/>
```

---

### 6. ItemCard

**위치**: `src/components/molecules/ItemCard/`

**사용 페이지**: Introduction

**설명**: 아이콘, 제목, 설명을 포함한 아이템 카드

**Props**:
```typescript
interface ItemCardProps {
  title: string;        // 아이템 제목
  description: string; // 아이템 설명
  icon: string;        // 아이콘 이미지 경로
}
```

**사용 예시**:
```tsx
<ItemCard
  title="유료과금 없음"
  description="서비스 내 결제가 필요한 부가서비스가 없어요"
  icon="/intro/intro_inconv1.png"
/>
```

---

### 7. ImageTitle

**위치**: `src/components/molecules/ImageTitle/`

**사용 페이지**: Product, ProductDetail

**설명**: 아이콘과 함께 제목을 표시하는 컴포넌트

**Props**:
```typescript
interface ImageTitleProps {
  icon: string;              // 아이콘 이미지 경로
  title: string | ReactNode; // 제목 텍스트
  alt?: string;             // 아이콘 대체 텍스트
}
```

**사용 예시**:
```tsx
<ImageTitle
  icon="/product/main_title_icon.png"
  title="즐겨찾기"
  alt="즐겨찾기 아이콘"
/>
```

---

### 8. ServiceCard

**위치**: `src/components/molecules/ServiceCard/`

**사용 페이지**: Product

**설명**: 제품/서비스를 표시하는 카드. 아이콘, 제목, 설명을 포함

**Props**:
```typescript
interface ServiceCardProps {
  icon?: string;      // 서비스 아이콘 이미지 경로
  title: string;      // 서비스 제목
  description?: string; // 서비스 설명
  href?: string;      // 링크 경로
}
```

**특징**: 
- AMDB 제목의 경우 자동으로 하트 아이콘과 데이터베이스 아이콘이 표시됨

**사용 예시**:
```tsx
<ServiceCard
  icon="/product/product_serviceCard.png"
  title="AMDB"
  description="VM 대신 관리형 DB 서비스를 제공해서, 한정된 서버 자원을 더 효율적으로 사용하는 클라우드 DB 프로젝트입니다."
  href="/service/amdb"
/>
```

---

### 9. DeveloperCard

**위치**: `src/components/molecules/DeveloperCard/`

**사용 페이지**: ProductDetail

**설명**: 크루 정보를 표시하는 카드 형태의 컴포넌트 (크루 카드)

**Props**:
```typescript
interface DeveloperCardProps {
  name: string;        // 크루 이름
  department: string;  // 학과/전공
  year: string;        // 학번/연도
  icon?: string;       // 캐릭터 이미지 경로
  href?: string;       // 링크 경로
}
```

**사용 예시**:
```tsx
<DeveloperCard
  name="정우재"
  department="소프트웨어"
  year="22"
  icon="/product/product_detail/product_detail_developerCard.png"
  href="/crew/jeongwoojae"
/>
```

---

### 10. Filter (Checkbox Mode)

**위치**: `src/components/molecules/Filter/`

**사용 페이지**: Product

**설명**: 체크박스 형태의 다중 선택 필터

**Props**:
```typescript
interface FilterProps {
  mode: 'checkbox';              // 필터 모드
  items: Array<{
    id: string;
    label: string;
  }>;
  selectedIds?: string[];        // 선택된 필터 ID 목록
  onChange?: (selectedIds: string[]) => void;
}
```

**사용 예시**:
```tsx
<Filter
  mode="checkbox"
  items={[
    { id: 'favorites', label: '즐겨찾기' },
    { id: 'server', label: '서버' },
    { id: 'database', label: '데이터베이스' },
  ]}
  selectedIds={['favorites']}
  onChange={handleFilterChange}
/>
```

---

### 11. ProblemItem

**위치**: `src/components/molecules/ProblemItem/`

**사용 페이지**: ProductDetail

**설명**: 문제점을 표시하는 아이템 컴포넌트 (제거 고려 중)

**Props**:
```typescript
interface ProblemItemProps {
  title: string;           // 문제점 제목
  descriptions: string[];  // 문제점 설명 목록
}
```

**사용 예시**:
```tsx
<ProblemItem
  title="1. 학생 프로젝트의 특징들"
  descriptions={[
    'DAU 저조: 대부분의 학생 프로젝트는 일일 활성 사용자(DAU)가 낮음.',
    '비효율적 할당: 아올다 방식(검수 후 24시간 VM 할당) 역시 낮은 사용률로 자원 낭비 지속됨.',
  ]}
/>
```

---

### 12. SolutionCard

**위치**: `src/components/molecules/SolutionCard/`

**사용 페이지**: ProductDetail

**설명**: 해결책을 표시하는 카드 컴포넌트

**Props**:
```typescript
interface SolutionCardProps {
  title: string;        // 해결책 제목
  description: string;  // 해결책 설명
}
```

**사용 예시**:
```tsx
<SolutionCard
  title="접근성"
  description="검수 과정 없이 즉시 사용 가능"
/>
```

---

### 13. SimilarServiceCard

**위치**: `src/components/molecules/SimilarServiceCard/`

**사용 페이지**: ProductDetail

**설명**: 유사한 외부 서비스를 표시하는 카드. 자동으로 favicon을 가져옴

**Props**:
```typescript
interface SimilarServiceCardProps {
  title: string;        // 서비스 제목
  description: string; // 서비스 설명
  href: string;        // 외부 링크
  provider: string;    // 서비스 제공자
  logo?: string;       // 로고 이미지 (선택, 없으면 자동으로 favicon 가져옴)
}
```

**사용 예시**:
```tsx
<SimilarServiceCard
  title="GitHub - openstack/trove"
  description="OpenStack Database As A Service (Trove). Mirror of code maintained at openstack.org."
  href="https://github.com/openstack/trove"
  provider="openstack/trove"
/>
```

---

### 14. Breadcrumb

**위치**: `src/components/molecules/Breadcrumb/`

**사용 페이지**: Product, ProductDetail, Notice, NoticeDetail, FAQ

**설명**: 브레드크럼 네비게이션 컴포넌트

**Props**:
```typescript
interface BreadcrumbProps {
  items: Array<{
    label: string;
    href: string;
  }>;
}
```

**사용 예시**:
```tsx
<Breadcrumb
  items={[
    { label: '홈', href: '/' },
    { label: '제품소개', href: '/product' },
    { label: 'AMDB', href: '/product/amdb'},
  ]}
/>
```

---

### 15. Filter (Tag Mode)

**위치**: `src/components/molecules/Filter/`

**사용 페이지**: Notice

**설명**: 태그 형태의 단일 선택 필터

**Props**:
```typescript
interface FilterProps {
  mode: 'tag';              // 필터 모드
  items: Array<{
    id: string;
    label: string;
  }>;
  selectedIds?: string;     // 선택된 필터 ID
  onChange?: (selectedId: string) => void;
  tagPrefix?: string;       // 태그 prefix (기본값: '#')
}
```

**사용 예시**:
```tsx
<Filter
  mode="tag"
  items={[
    { id: 'all', label: '전체' },
    { id: 'notice', label: '공지' },
    { id: 'request', label: '문의요청' },
    { id: 'operation', label: '운영' },
  ]}
  selectedIds="all"
  onChange={(id) => console.log('선택:', id)}
/>
```

---

### 16. Pagination

**위치**: `src/components/molecules/Pagination/`

**사용 페이지**: Notice, FAQ

**설명**: 페이지네이션 컴포넌트

**Props**:
```typescript
interface PaginationProps {
  currentPage: number;              // 현재 페이지
  totalPages: number;                // 전체 페이지 수
  onPageChange: (page: number) => void; // 페이지 변경 핸들러
}
```

**사용 예시**:
```tsx
<Pagination
  currentPage={1}
  totalPages={7}
  onPageChange={(page) => setCurrentPage(page)}
/>
```

---

### 17. NoticeItem

**위치**: `src/components/molecules/NoticeItem/`

**사용 페이지**: Notice

**설명**: 공지사항 아이템 컴포넌트

**Props**:
```typescript
interface NoticeItemProps {
  number: number;      // 공지사항 번호
  category: string;    // 카테고리
  title: string;       // 제목
  date: string;        // 날짜
  href: string;        // 링크 경로
}
```

**사용 예시**:
```tsx
<NoticeItem
  number={1}
  category="공지"
  title="새로운 기능이 추가되었습니다"
  date="9999.99.99"
  href="/notice/1"
/>
```

---

### 18. InPageNavigation

**위치**: `src/components/molecules/InPageNavigation/`

**사용 페이지**: NoticeDetail

**설명**: 페이지 내 이전/다음 항목 네비게이션

**Props**:
```typescript
interface InPageNavigationProps {
  prevTitle?: string;  // 이전 항목 제목
  prevHref?: string;   // 이전 항목 링크
  nextTitle?: string; // 다음 항목 제목
  nextHref?: string;  // 다음 항목 링크
}
```

**사용 예시**:
```tsx
<InPageNavigation
  prevTitle="이전 항목 제목"
  prevHref="/prev"
  nextTitle="다음 항목 제목"
  nextHref="/next"
/>
```

---

### 19. Accordion

**위치**: `src/components/molecules/Accordion/`

**사용 페이지**: FAQ

**설명**: 아코디언 컴포넌트. 확장/축소 가능한 콘텐츠 표시

**Props**:
```typescript
interface AccordionProps {
  title: string;              // 아코디언 제목
  content: string;            // 아코디언 내용 (HTML 지원)
  defaultExpanded?: boolean;  // 초기 확장 상태
  icon?: string;              // 아이콘 이미지 경로
}
```

**사용 예시**:
```tsx
<Accordion
  title="FAQ Question"
  content="<p>FAQ Question.</p>"
  defaultExpanded={false}
  icon="/FAQ/FAQ_accordion_icon.png"
/>
```

---

### 20. Search

**위치**: `src/components/molecules/Search/`

**사용 페이지**: Product, Notice, FAQ

**설명**: 검색 입력 컴포넌트. 검색 아이콘이 입력 필드 내부 오른쪽에 위치

**Props**:
```typescript
interface SearchProps {
  placeholder?: string;              // placeholder 텍스트
  value: string;                     // 검색어 값
  onChange: (value: string) => void; // 값 변경 핸들러
  onSearch: (value: string) => void; // 검색 실행 핸들러
}
```

**사용 예시**:
```tsx
<Search
  placeholder="제품/서비스를 검색해 보세요"
  value={searchValue}
  onChange={setSearchValue}
  onSearch={handleSearch}
/>
```

---

## 스타일링

모든 컴포넌트는 `styled-components`를 사용하여 스타일링됩니다. 각 컴포넌트 디렉토리 내에 `style.ts` 파일이 있으며, 해당 파일에서 컴포넌트의 스타일을 정의합니다.

## 공통 패턴

1. **Props 인터페이스**: 모든 컴포넌트는 TypeScript 인터페이스로 props를 정의합니다.
2. **JSDoc 주석**: 각 컴포넌트와 props에는 JSDoc 주석이 포함되어 있습니다.
3. **선택적 링크**: 많은 카드 컴포넌트는 `href` prop을 통해 선택적으로 링크 기능을 제공합니다.
4. **ReactNode 지원**: 제목이나 설명이 있는 컴포넌트는 `string | ReactNode`를 지원하여 유연한 렌더링이 가능합니다.

---

## 참고사항

- 이 프로젝트는 **Atomic Design** 패턴을 따릅니다.
- Molecules 컴포넌트는 Atoms보다 복잡하지만, 독립적으로 사용 가능한 UI 컴포넌트입니다.
- 모든 컴포넌트는 `src/components/molecules/` 디렉토리 내에 있습니다.
- 컴포넌트 번호는 메인 페이지(`app/page.tsx`)에서의 표시 순서를 나타냅니다.

---

**최종 업데이트**: 2024년

