# 김서우 | Frontend Developer Portfolio

사용자 경험을 중심으로 생각하는 프론트엔드 개발자 김서우의 개인 포트폴리오 웹사이트입니다.

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 16.1.6 (App Router, Turbopack) |
| Language | TypeScript 5 (strict) |
| UI | React 18, Inline Styles |
| Font | Geist (local) |
| Package Manager | pnpm |
| Linter | ESLint 9 (flat config) |

> Tailwind CSS는 devDependency에 포함되어 있으나 사용하지 않으며, 모든 스타일은 inline style로 작성되어 있습니다.

## 주요 기능

- **다크 / 라이트 모드** — `ThemeContext`로 전역 관리, 토글 버튼으로 즉시 전환
- **스크롤 감지 네비게이션** — `IntersectionObserver`로 현재 섹션을 자동 감지하여 활성 상태 표시
- **부드러운 스크롤** — 네비게이션 클릭 시 해당 섹션으로 smooth scroll
- **Decorative Blobs** — 배경에 반투명 blob 요소로 시각적 깊이 연출
- **반응형 레이아웃** — 섹션별 유연한 grid / flex 구성

## 섹션 구성

```
Home → About → Experience → Projects → Education → Github → Contact
```

| 섹션 | 설명 |
|------|------|
| Home | 인트로 히어로 섹션, CTA 버튼 |
| About | 자기소개, 스킬 바 |
| Experience | 경력 타임라인 (에이치디에스 / 디지탈센스 / 스마트몰) |
| Projects | 주요 프로젝트 카드 |
| Education | 학력(좌) + 자격증(우) 2컬럼 레이아웃 |
| Github | Github 활동 통계 카드 |
| Contact | 연락처 |

## 프로젝트 구조

```
src/
├── app/
│   ├── page.tsx          # Portfolio 컴포넌트 렌더링
│   ├── layout.tsx        # ThemeProvider 래핑, 메타데이터
│   └── globals.css
├── components/
│   ├── Portfolio.tsx     # 메인 레이아웃, activeSection 상태, IntersectionObserver
│   ├── Navbar.tsx        # 고정 네비게이션 바
│   ├── Footer.tsx
│   ├── sections/         # 각 섹션 컴포넌트
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── GithubSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/               # 재사용 UI 컴포넌트
│       ├── Blob.tsx
│       ├── SkillBar.tsx
│       ├── ProjectCard.tsx
│       ├── StatCard.tsx
│       └── SectionTitle.tsx
├── context/
│   └── ThemeContext.tsx   # 다크모드 및 색상 토큰 제공
├── constants/
│   └── colors.ts          # 팔레트 상수 (coral, yellow, mint, sky, purple, orange)
├── data/                  # 정적 데이터
│   ├── skills.ts
│   ├── projects.ts
│   ├── experiences.ts
│   ├── educations.ts
│   └── githubStats.ts
└── types/
    └── index.ts           # Skill, Project, Experience, Education, Certification 타입
```

## 시작하기

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속합니다.

### 빌드

```bash
pnpm build
pnpm start
```

### 린트

```bash
pnpm lint
```

## 색상 팔레트

| 이름 | 색상 | 코드 |
|------|------|------|
| coral | ![#FF6B6B](https://placehold.co/12x12/FF6B6B/FF6B6B.png) | `#FF6B6B` |
| yellow | ![#FFD93D](https://placehold.co/12x12/FFD93D/FFD93D.png) | `#FFD93D` |
| mint | ![#6BCB77](https://placehold.co/12x12/6BCB77/6BCB77.png) | `#6BCB77` |
| sky | ![#4D96FF](https://placehold.co/12x12/4D96FF/4D96FF.png) | `#4D96FF` |
| purple | ![#C77DFF](https://placehold.co/12x12/C77DFF/C77DFF.png) | `#C77DFF` |
| orange | ![#FF9F1C](https://placehold.co/12x12/FF9F1C/FF9F1C.png) | `#FF9F1C` |
