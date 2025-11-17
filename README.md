# Aolda Homepage (Lite)

초보자도 쉽게 수정·확장할 수 있도록 단순한 구조로 재구성된 Aolda 랜딩 페이지입니다.  
이 문서는 **비개발자 분들도 내용을 이해하고 텍스트/이미지 변경을 바로 할 수 있도록** 쉽게 설명합니다.

---

## 🎯 이 프로젝트는 무엇인가요?

이 프로젝트는 Aolda 홈페이지를 만드는 코드입니다. 웹 브라우저에서 보이는 화면을 구성하는 모든 요소들이 여기에 들어있습니다.

**개발 지식이 전혀 없어도 괜찮습니다!** 이 가이드를 따라하면 누구나 텍스트를 바꾸고, 이미지를 교체하고, 색상을 변경할 수 있습니다.

---

## 📋 어떻게 보이나요? (한눈에 보는 흐름)

브라우저가 사이트를 열면 `src/pages/Introduction/index.tsx` 파일이 화면을 조립합니다.

화면은 위에서 아래로 다음과 같이 구성됩니다:

1. **상단 헤더** (`Header`) - 로고와 메뉴
2. **인트로 섹션** (`IntroSection`) - 큰 이미지와 퀵 링크 카드
3. **숫자 섹션** (`NumbersSection`) - 통계 카드 3개
4. **서비스 소개 섹션** (`ServiceInfoSection`) - 서비스 한 줄 소개
5. **파트너 섹션** (`PartnersSection`) - 협력 단체 목록
6. **가치 섹션** (`ValuesSection`) - 불편함 3가지 / 약속 3가지
7. **만나기 섹션** (`MeetSection`) - 콘솔 이동 및 팀 합류 버튼
8. **하단 푸터** (`Footer`) - 로고, 주소, 링크

> 💡 **팁**: 각 섹션은 독립적으로 작동합니다. 하나를 수정해도 다른 섹션에는 영향을 주지 않아요.

---

## 🚀 처음 시작하기 (단계별 가이드)

### 1단계: 필요한 프로그램 설치하기

컴퓨터에 다음 프로그램들이 설치되어 있어야 합니다:

#### Node.js 설치
1. [Node.js 공식 웹사이트](https://nodejs.org/)에 접속
2. "LTS" 버전 다운로드 (18 이상 권장)
3. 다운로드한 파일 실행하여 설치
4. 설치 확인: 명령 프롬프트(CMD) 또는 PowerShell을 열고 다음 명령어 입력
   ```bash
   node --version
   ```
   버전 번호가 나오면 성공!

#### pnpm 설치
1. 명령 프롬프트(CMD) 또는 PowerShell을 열고 다음 명령어 입력
   ```bash
   npm install -g pnpm
   ```
2. 설치 확인
   ```bash
   pnpm --version
   ```
   버전 번호가 나오면 성공!

### 2단계: 프로젝트 다운로드하기

#### GitHub에서 클론하기
1. 이 저장소를 클론하거나 ZIP 파일로 다운로드
2. 압축을 풀고 폴더로 이동

#### 또는 Git 사용하기 (선택사항)
명령 프롬프트에서 다음 명령어 실행:
```bash
git clone https://github.com/alex50027319/clone-coding-project.git
cd clone-coding-project
```

### 3단계: 프로젝트 설정하기

프로젝트 폴더로 이동한 후, 다음 명령어를 실행하세요:

```bash
pnpm install
```

이 명령어는 프로젝트에 필요한 모든 라이브러리를 다운로드합니다. 처음 실행 시 몇 분 정도 걸릴 수 있습니다.

**성공 메시지가 보이면 준비 완료!**

### 4단계: 개발 서버 실행하기

다음 명령어를 실행하세요:

```bash
pnpm dev
```

잠시 후 다음과 같은 메시지가 보입니다:
```
  VITE v7.2.2  ready in 500 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

이제 웹 브라우저를 열고 **http://localhost:5173** 주소로 접속하세요!

**화면이 보이나요?** 🎉 성공입니다!

> 💡 **팁**: 개발 서버를 중지하려면 터미널에서 `Ctrl + C`를 누르세요.

### 5단계: 배포용 파일 만들기 (선택사항)

실제 서버에 올릴 파일을 만들고 싶다면:

```bash
pnpm build
```

이 명령어를 실행하면 `dist` 폴더에 최적화된 파일들이 생성됩니다.

---

## 📁 프로젝트 구조 이해하기

프로젝트 폴더 구조는 다음과 같습니다:

```
aolda-homepage-v3/
├── public/                    # 이미지 파일들이 들어있는 폴더
│   ├── day1.png              # 인트로 섹션 이미지
│   └── Logo_white.svg        # 푸터 로고
│
├── src/                       # 모든 코드가 들어있는 폴더
│   ├── pages/                 # 페이지 파일들
│   │   └── Introduction/
│   │       ├── index.tsx     # ⭐ 메인 페이지 (여기서 섹션들을 조립)
│   │       └── style.ts      # 페이지 스타일
│   │
│   └── components/           # 재사용 가능한 컴포넌트들
│       ├── organisms/        # 큰 덩어리 (섹션 단위)
│       │   ├── Header/       # 상단 헤더
│       │   ├── IntroSection/ # 인트로 섹션
│       │   ├── NumbersSection/ # 숫자 섹션
│       │   ├── ServiceInfoSection/ # 서비스 소개
│       │   ├── PartnersSection/ # 파트너 섹션
│       │   ├── ValuesSection/ # 가치 섹션
│       │   ├── MeetSection/  # 만나기 섹션
│       │   └── Footer/       # 하단 푸터
│       │
│       └── molecules/        # 작은 블록 (버튼, 카드 등)
│           ├── BrandLogo/    # 로고 컴포넌트
│           ├── IconButton/   # 파란색 큰 버튼
│           ├── ActionButton/ # 테두리 버튼
│           ├── SectionTitle/ # 섹션 제목
│           ├── StatCard/     # 숫자 카드
│           ├── PromiseCard/  # 약속/가치 카드
│           ├── PartnerLogo/  # 파트너 로고
│           ├── IntroMenu/    # 인트로 메뉴 카드
│           ├── ValueIcon/    # 아이콘
│           └── ValueItems/   # 가치 항목 목록
│
├── package.json              # 프로젝트 설정 파일
└── README.md                 # 이 파일
```

### 📝 파일 이름 규칙

- `index.tsx`: 컴포넌트의 실제 코드
- `style.ts`: 컴포넌트의 디자인(색상, 크기, 위치 등)

---

## ✏️ 텍스트/이미지 바꾸는 법

### 📌 자주 수정하는 항목들

| 수정하고 싶은 것 | 파일 위치 | 어떻게 수정하나요? |
|----------------|----------|-------------------|
| **인트로 이미지 위 텍스트** | `src/components/organisms/IntroSection/index.tsx` | 22-27번 줄의 텍스트 수정 |
| **인트로 오른쪽 카드** | `src/components/organisms/IntroSection/index.tsx` | 5-15번 줄의 `IntroMenuItems` 배열 수정 |
| **숫자 카드** | `src/components/organisms/NumbersSection/index.tsx` | 상단의 `defaultStats` 배열 수정 |
| **파트너 목록** | `src/components/organisms/PartnersSection/index.tsx` | 상단의 `partners` 배열 수정 |
| **불편함 3가지** | `src/components/organisms/ValuesSection/index.tsx` | 4-8번 줄의 `inconveniences` 배열 수정 |
| **약속 3가지** | `src/components/organisms/ValuesSection/index.tsx` | 10-14번 줄의 `promises` 배열 수정 |
| **만나기 섹션 제목** | `src/components/organisms/MeetSection/index.tsx` | 9-13번 줄의 `SectionTitle` 수정 |
| **푸터 로고** | `public/Logo_white.svg` | 파일 교체 (이름은 그대로 유지) |
| **인트로 이미지** | `public/day1.png` | 파일 교체 (이름은 그대로 유지) |

### 🔍 실제 예시: 텍스트 바꾸기

**예시 1: 인트로 섹션 텍스트 바꾸기**

1. `src/components/organisms/IntroSection/index.tsx` 파일을 엽니다
2. 22-27번 줄을 찾습니다:
   ```tsx
   richTitle={
     <>
       아주인의 꿈을 펼칠
       <br />
       파란하늘 속 작은구름
     </>
   }
   ```
3. 원하는 텍스트로 바꿉니다:
   ```tsx
   richTitle={
     <>
       새로운 텍스트 첫 번째 줄
       <br />
       새로운 텍스트 두 번째 줄
     </>
   }
   ```
4. 파일을 저장합니다
5. 브라우저를 새로고침하면 변경사항이 보입니다!

**예시 2: 숫자 카드 바꾸기**

1. `src/components/organisms/NumbersSection/index.tsx` 파일을 엽니다
2. 상단의 `defaultStats` 배열을 찾습니다
3. 숫자와 설명을 원하는 값으로 수정합니다:
   ```tsx
   const defaultStats = [
     { value: '100', label: '새로운 설명 1' },
     { value: '200', label: '새로운 설명 2' },
     { value: '300', label: '새로운 설명 3' },
   ];
   ```
4. 파일을 저장하고 브라우저를 새로고침합니다

### 🖼️ 이미지 바꾸기

**인트로 이미지 교체:**
1. 새 이미지 파일을 준비합니다 (권장: PNG 또는 JPG)
2. `public/day1.png` 파일을 새 이미지로 교체합니다
   - 파일 이름은 반드시 `day1.png`로 유지하세요!
3. 브라우저를 새로고침합니다

**푸터 로고 교체:**
1. 새 로고 파일을 준비합니다 (SVG 형식 권장)
2. `public/Logo_white.svg` 파일을 새 로고로 교체합니다
   - 파일 이름은 반드시 `Logo_white.svg`로 유지하세요!
4. 브라우저를 새로고침합니다

---

## 🧩 각 컴포넌트 상세 설명

### Header (상단 헤더)
- **위치**: `src/components/organisms/Header/index.tsx`
- **역할**: 페이지 최상단에 고정되는 바
- **포함 요소**: 왼쪽 로고, 가운데 메뉴, 오른쪽 "콘솔로 이동" 버튼

### IntroSection (인트로 섹션)
- **위치**: `src/components/organisms/IntroSection/index.tsx`
- **역할**: 첫 화면에 보이는 큰 이미지와 퀵 링크
- **왼쪽**: 히어로 이미지 (`/public/day1.png`)
- **오른쪽**: 2개의 메뉴 카드 (사용 설명서, 테크 블로그)
- **수정 방법**: 
  - 텍스트: `index.tsx` 파일의 `richTitle` 부분
  - 메뉴 카드: `IntroMenuItems` 배열

### NumbersSection (숫자 섹션)
- **위치**: `src/components/organisms/NumbersSection/index.tsx`
- **역할**: 통계를 보여주는 카드 3개
- **수정 방법**: `defaultStats` 배열에서 숫자와 설명 변경

### ServiceInfoSection (서비스 소개)
- **위치**: `src/components/organisms/ServiceInfoSection/index.tsx`
- **역할**: 서비스 한 줄 요약
- **수정 방법**: `SectionTitle` 컴포넌트의 `title` 속성 수정

### PartnersSection (파트너 섹션)
- **위치**: `src/components/organisms/PartnersSection/index.tsx`
- **역할**: 협력 단체 이름 나열
- **수정 방법**: `partners` 배열에 이름 추가/삭제

### ValuesSection (가치 섹션)
- **위치**: `src/components/organisms/ValuesSection/index.tsx`
- **역할**: 불편함 3가지와 약속 3가지 표시
- **위쪽**: 불편함 3가지 (파란색)
- **아래쪽**: 약속 3가지 (빨간색)
- **수정 방법**: 
  - `inconveniences` 배열: 불편함 항목
  - `promises` 배열: 약속 항목
  - 각 항목은 `title`(제목), `description`(설명), `iconType`(아이콘)을 가집니다

### MeetSection (만나기 섹션)
- **위치**: `src/components/organisms/MeetSection/index.tsx`
- **역할**: 콘솔 이동 및 팀 합류 버튼
- **수정 방법**: 제목은 `SectionTitle`, 버튼 링크는 각 버튼의 `href` 속성

### Footer (푸터)
- **위치**: `src/components/organisms/Footer/index.tsx`
- **역할**: 페이지 하단 정보
- **포함 요소**: 로고, 주소, 링크들

---

## 🛠️ 기술 스택 (참고용)

이 프로젝트는 다음 기술로 만들어졌습니다:

- **React**: 화면을 구성하는 라이브러리
- **TypeScript**: 코드의 안정성을 높이는 언어
- **styled-components**: 디자인을 코드로 작성하는 도구
- **Vite**: 빠른 개발 서버와 빌드 도구

> 💡 **비개발자 분들께**: 이 기술들을 몰라도 괜찮습니다! 위의 가이드만 따라하시면 됩니다.

---

## ❓ 자주 하는 질문 (FAQ)

### Q1. 명령어를 입력했는데 "명령을 찾을 수 없습니다" 에러가 나요
**A.** Node.js나 pnpm이 제대로 설치되지 않았을 수 있습니다. 1단계를 다시 확인하세요.

### Q2. `pnpm install`이 너무 오래 걸려요
**A.** 정상입니다. 처음 실행 시 인터넷에서 많은 파일을 다운로드하므로 5-10분 정도 걸릴 수 있습니다.

### Q3. 파일을 수정했는데 화면에 반영이 안 돼요
**A.** 
1. 파일을 저장했는지 확인하세요 (Ctrl + S)
2. 브라우저를 새로고침하세요 (F5 또는 Ctrl + R)
3. 개발 서버가 실행 중인지 확인하세요 (`pnpm dev`)

### Q4. 버튼 색상을 바꾸고 싶어요
**A.** 
- 파란색 큰 버튼: `src/components/molecules/IconButton/style.ts`
- 테두리 버튼: `src/components/molecules/ActionButton/style.ts`
- 파일에서 `background` 또는 `color` 속성을 찾아서 색상 코드를 변경하세요

### Q5. 섹션 순서를 바꾸고 싶어요
**A.** `src/pages/Introduction/index.tsx` 파일의 19-69번 줄 `sections` 배열에서 순서를 바꾸세요.

### Q6. 이미지가 잘려 보여요
**A.** 이미지 비율을 확인하세요. 원본 이미지가 너무 길거나 넓으면 잘릴 수 있습니다.

### Q7. 에러 메시지가 나와요
**A.** 
1. 에러 메시지를 자세히 읽어보세요 (어떤 파일의 몇 번째 줄인지 알려줍니다)
2. 최근에 수정한 부분을 확인하세요
3. 따옴표(`"` 또는 `'`)가 제대로 닫혀있는지 확인하세요
4. 괄호(`()`, `{}`, `[]`)가 제대로 닫혀있는지 확인하세요

---

## 📞 도움이 필요하신가요?

- **이메일**: hello@aolda.in
- **문서**: [https://docs.aoldacloud.com](https://docs.aoldacloud.com)
- **콘솔**: [https://console.aoldacloud.com/](https://console.aoldacloud.com/)

---

## 📝 마지막 팁

1. **백업하기**: 수정하기 전에 원본 파일을 복사해두세요
2. **작은 변경부터**: 한 번에 많이 바꾸지 말고, 하나씩 수정하고 확인하세요
3. **에러는 친구**: 에러 메시지를 읽으면 무엇이 문제인지 알 수 있습니다
4. **검색 활용**: 모르는 것이 있으면 구글에 검색해보세요!

**행운을 빕니다!** 🍀
