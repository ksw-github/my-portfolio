# 김서우 | Frontend Developer Portfolio

사용자 경험을 중심으로 생각하는 프론트엔드 개발자 김서우의 개인 포트폴리오 웹사이트입니다.

## 기술 스택

| 분류 | 기술 |
|------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v3.4 |
| Email | Resend |
| Package Manager | pnpm |
| Deploy | Vercel |

## 주요 기능

- **스크롤 감지 네비게이션** — `IntersectionObserver`로 현재 섹션을 자동 감지하여 활성 상태 표시
- **프로젝트 라이트박스** — `ProjectCard`에서 이미지 슬라이드 뷰어 지원
- **이메일 전송** — Resend API를 활용한 문의 이메일 전송 (`ContactSection`, `Footer` 두 곳에서 재사용)
- **이력서 다운로드** — Hero 섹션에서 PDF 직접 다운로드
- **모바일 반응형** — 전 섹션 sm 브레이크포인트 기준 반응형 레이아웃 적용
- **부드러운 스크롤** — 네비게이션 클릭 시 섹션 오프셋(−60px) 적용
- **Decorative Blobs** — 배경 반투명 blob으로 시각적 깊이 연출

## 섹션 구성

```
Home → About → Experience → Projects → Education → Contact
```

| 섹션 | ID | 설명 |
|------|----|------|
| Hero | `home` | 글자별 색상 웨이브 애니메이션 + 이력서 다운로드 |
| About | `about` | 자기소개 및 스킬 바 |
| Experience | `experience` | 경력 타임라인 |
| Projects | `projects` | 프로젝트 카드 + 이미지 슬라이드 |
| Education | `education` | 학력 및 자격증 |
| Contact | `contact` | 명함형 연락처 + 이메일 전송 |

## 프로젝트 구조

```
src/
├── app/
│   ├── api/send-email/route.ts   # 이메일 전송 API Route (Resend)
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Portfolio.tsx             # 루트 클라이언트 컴포넌트, 섹션 조합
│   ├── Navbar.tsx
│   ├── Footer.tsx                # GitHub / Email 아이콘, EmailModal 연결
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── EducationSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
│       ├── ProjectCard.tsx       # 카드 + 모달 + 라이트박스 슬라이드
│       ├── EmailModal.tsx        # Resend 연동 이메일 전송 모달
│       ├── ScrollTopButton.tsx
│       ├── SectionTitle.tsx
│       ├── Blob.tsx
│       ├── SkillBar.tsx
│       └── StatCard.tsx
├── data/
│   ├── projects.ts
│   ├── experiences.ts
│   ├── educations.ts
│   ├── skills.ts
│   └── githubStats.ts
├── types/index.ts
├── hooks/useScrollAnimation.ts
└── constants/colors.ts
```

## 시작하기

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속합니다.

```bash
# 빌드
pnpm build
pnpm start

# 린트
pnpm lint
```

## 환경 변수

Vercel 배포 시 아래 환경변수 설정이 필요합니다.

```
RESEND_API_KEY=your_resend_api_key
```

> 무료 플랜 기준 발신 주소: `onboarding@resend.dev` (도메인 인증 시 변경 가능)

## 색상 팔레트

| 이름 | 코드 |
|------|------|
| coral | `#FF6B6B` |
| yellow | `#FFD93D` |
| mint | `#6BCB77` |
| sky | `#4D96FF` |
| purple | `#C77DFF` |
| orange | `#FF9F1C` |
