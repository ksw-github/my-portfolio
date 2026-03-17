import { COLORS } from "@/constants/colors";
import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "2025 APEC 경비안전 관제 시스템",
    desc: "2025 APEC 정상회의를 위한 GIS 기반 통합 관제 웹 애플리케이션으로 Cesium 3D GIS 지도에서 CCTV/로봇 장비의 실시간 모니터링, HLS 영상 스트리밍, AI 분석 타입 설정 등 관제 운용에 필요한 기능과 UI/UX를 담당했습니다.",
    stack: [
      "React",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "WebSocket",
      "Cesium",
      "SCSS",
      "HLS.js",
    ],
    color: COLORS.coral,
    images: ["/apec.png"],
    company: "에이치디에스",
    github: "#",
    demo: "#",
    period: "2025.02 ~ 2025.09",
    members: 5,
    memberRole: "웹 프론트엔드",
    contribution: 20,
    tags: ["3D GIS", "실시간 스트리밍", "AI 이벤트 감지"],
    features: [
      {
        title: "화면 UI/UX 퍼플리싱",
        items: ["프로젝트 전체 UI를 전담하여 html, scss 하드코딩"],
      },
      {
        title: "실시간 영상 스트리밍 시스템",
        items: [
          "하단 영상 스트리밍 패널 전체 UI/UX 구축",
          "HLS.js기반 컴포넌트를 구현하여 외부 CCTV 스트리밍 서버와 실시간 영상 연동, Safari 네이티브 HLS 폴백 처리 포함",
          "영상 종료 시 사용자 오조작 방지를 위한 더블체크 팝업 구현",
          "VIP 전용 팝업 및 영상/장비 목록 UI/UX 구현",
        ],
      },
      {
        title: "AI 타입 설정 시스템",
        items: [
          "장비 노드 우클릭으로 AI 분석 타입(얼굴인식, 침입감지 등)을 설정하는 UX 구현",
          "14개 파일에 걸쳐 기존 컴포넌트와 통합 리팩토링",
          "우클릭 메뉴를 커스텀 훅으로 리팩토링하여 3개 컴포넌트에 산재된 우클릭 로직을 1개 훅으로 통합",
          "Zustand기반 장비 상태관리 스토어 구축, 기존 팝업 스토어에 AI 타입 관련 액션 확장",
        ],
      },
      {
        title: "공통 컴포넌트 및 커스텀 훅 개발",
        items: [
          "공통 팝업 컴포넌트로 기존 파일을 통합하여 중복 SCSS 코드 대폭 삭제, 로그아웃 팝업 컴포넌트 코드 대폭 축소",
          "마우스스크롤 커스텀 훅 개발, 장비목록/영상목록 2개 패널에서 마우스 드래그스크롤기능 재사용, 리사이즈 대응 포함",
          "장비관리와 하단 영상스트리밍 모듈의 SCSS 코드 구조 정리(리팩토링)",
        ],
      },
      {
        title: "GIS 맵 UI/UX 개선",
        items: [
          "시야각 렌더링 로직 개선, CesiumJS 기반 CCTV 시야각 시각화 고도화",
          "CCTV/로봇 아이콘에 CSS 애니메이션 이펙트 적용, 장비상태 변경 시 시각적 피드백 제공",
          "GIS 맵 노드 팝업 및 툴팁 UI 개선",
        ],
      },
      {
        title: "성과",
        items: [
          "순수 css 퍼플리싱으로 프로젝트 전체 작업기간 대폭 축소",
          "팝업 컴포넌트 구현으로 팝업 관련 중복 SCSS 코드 대폭 축소, 로그아웃 팝업 코드량 66% 축소",
          "우클릭 메뉴 훅 추출로 우클릭 메뉴 로직의 유지보수 포인트 3곳 → 1곳 통합",
          "AI 타입 설정 기능을 설계부터 리팩토링까지 전 주기 수행, 기획 변경 4회에 유연하게 대응",
        ],
      },
    ],
  },
  {
    title: "2025 APEC 백오피스 시스템",
    desc: "2025 APEC 정상회의 운영을 위해 사용자/장비/권한 등 핵심 운영 데이터를 통합 관리하는 웹 애플리케이션으로 사용자 관리 시스템 전반과 장비 관리 시스템을 담당하였습니다.",
    stack: [
      "React",
      "TypeScript",
      "Zustand",
      "TanStack Query",
      "Cesium",
      "Ant Design",
    ],
    color: COLORS.orange,
    images: ["/apec_bk.png"],
    company: "에이치디에스",
    github: "#",
    demo: "#",
    period: "2025.02 ~ 2025.09",
    members: 5,
    memberRole: "웹 프론트엔드",
    contribution: 20,
    tags: ["관리 시스템", "운영 효율화"],
    features: [
      {
        title:
          "사용자 관리: 사용자/임시사용자/권한/그룹/소속 5개 도메인의 CRUD 개발",
        items: [
          "사용자, 임시 사용자, 소속 관리 페이지 및 모달 구축",
          "사용자 권한별 생성/수정/상세 모달 UI 및 폼 검증 로직 구현",
          "API 호출 로직 모듈화 및 공통 유틸 함수 추출로 중복 코드 약 45% 감소",
        ],
      },
      {
        title:
          "장비 관리: CCTV, 센서, AI 등 장비 타입별 탭 기반 통합 관리 시스템 개발",
        items: [
          "장비 타입별 탭 구조 설계 및 CRUD, 동적 컬럼 구성 구현",
          "Cesium/Resium 기반 3D 지도 위 장비 위치/위경도 설정 기능 구현",
          "장비 등록 모달을 다단계 스텝 구조로 리팩토링하여 코드 복잡도 약 35% 감소",
        ],
      },
      {
        title: "타입 시스템 설계",
        items: [
          "7개 도메인의 DB 타입 및 모달 타입 정의",
          "타입 파일 네이밍 컨벤션 통일 리팩토링",
        ],
      },
      {
        title: "성과",
        items: [
          "사용자 관리 5개 도메인 CRUD 및 API 연동 100% 완료",
          "API 레이어 중복 코드 약 45% 제거, 장비 모달 복잡도 약 35% 감소",
          "7개 도메인 TypeScript 타입 체계 구축으로 팀 개발 생산성 약 20% 향상 기여",
        ],
      },
    ],
  },
  {
    title: "위치기반 백오피스 시스템",
    desc: "위치기반 사업자의 계정/권한/위치정보를 관리하는 내부 백오피스 웹 애플리케이션으로 관리자/사용자/임시사용자 계정관리 시스템을 담당하였습니다.",
    stack: ["React", "TypeScript", "TanStack Query", "Zustand", "Ant Design"],
    color: COLORS.sky,
    images: ["/lbs.png"],
    company: "에이치디에스",
    github: "#",
    demo: "#",
    period: "2024.03 ~ 2024.08",
    members: 4,
    memberRole: "웹 프론트엔드",
    contribution: 20,
    tags: ["GPS 추적", "위치 데이터", "이동 이력", "실시간 모니터링"],
    features: [
      {
        title: "계정관리 시스템",
        items: [
          "관리자/사용자/임시사용자 계정관리 CRUD 개발",
          "폼 유효성 검증 체계 구축",
          "중복 모달 컴포넌트 통합으로 관련 코드 약 40% 감소",
          "역할별 권한 관리 UI 구현",
        ],
      },
      {
        title: "성과",
        items: [
          "계정관리 3개 모듈(관리자/사용자/임시사용자) 전체 CRUD를 구현하여 계정관리 기능 100% 완성",
          "리팩토링을 통해 중복코드 40%감소 및 에러핸들링 구체화로 운영이슈 추적시간 약 50% 단축",
          "공통 컴포넌트 재사용 패턴 적용으로 페이지 신규개발 시 평균 개발시간 약 30% 단축",
          "폼 유효성 검증(ID/Email중복검사, 비밀번호조건, 필수값체크)을 웹 프론트단에서 100% 처리하여 불필요한 서버요청 방지",
        ],
      },
    ],
  },
  {
    title: "한국인삼공사 무인출입/안전관리 시스템",
    desc: "공사 작업자, 업체, 관리자가 모바일 웹/PC 웹에서 공사허가 및 출입 신청, 완료보고, 공사중지, 안전교육, 안전사항 등을 확인하고 본인서명을 전자문서화하여 관리하는 시스템으로 작업자/업체용 화면(모바일 웹)과 관리자용 화면(PC 웹)을 담당하였습니다.",
    stack: ["jQuery", "JavaScript", "mongoDB", "Bootstrap", "Figma"],
    color: COLORS.mint,
    images: ["/kgc.png", "/kgc_beck.png"],
    company: "디지탈센스",
    github: "#",
    demo: "#",
    period: "2023.12 ~ 2024.03",
    members: 1,
    memberRole: "웹 퍼블리셔",
    contribution: 50,
    tags: ["실시간 안전관리"],
    features: [
      {
        title: "공사 관리 시스템(모바일 웹)",
        items: [
          "화면 전체 Bootstrap기반 반응형 레이아웃 구성 전담",
          "jQuery 활용 실시간 알림 및 모달 인터랙션 구현",
          "mongoDB기반 회원가입, 로그인 구현",
          "공사 신청~종료까지 9단계 단일 플로우 화면 구현",
          "jQuery 활용 실시간 알림 및 모달 인터랙션 구현",
        ],
      },
      {
        title: "관리자용 공사 관리 시스템(PC 웹)",
        items: [
          "화면 전체 Bootstrap기반 반응형 레이아웃 구성 전담",
          "jQuery 활용 실시간 알림 및 모달 인터랙션 구현",
          "공사 신청->검토->최종 승인과 작업 중지->재개신청->승인/퇴장 3단계 승인 체계 구현",
          "작업 현황, 공사 목록, 업체 목록, 사용자 목록, 관리자 목록, 공지사항 CRUD 구현",
        ],
      },
      {
        title: "안전관리 평가 시스템",
        items: [
          "공사 완료 후 5개 항목(안전작업 준수, 작업자 교육, 안전장치 유지, 정리정돈, 보호구 착용)에 대한 점수 입력 UI와 평균 점수 자동 계산 기능을 구현",
        ],
      },
      {
        title: "성과",
        items: [
          "작업자용 모바일 웹과 관리자용 PC 웹을 분리 설계하여 각 사용자 환경에 최적화된 UX 제공",
          "공사 등록부터 작업 신청, 교육 확인, 작업 중지/재개, 당일 종료, 공사 종료까지 전체 공사 라이프사이클을 디지털화",
          "기존 종이 기반의 안전교육 확인·작업허가서를 전자문서로 전환하여 현장 행정 효율화",
        ],
      },
    ],
  },
  {
    title: "UI/UX 디자인 & 퍼블리싱",
    desc: "모바일 방문증 앱 디자인, 울산광역시 청사안내 키오스크 디자인 등 다수의 UI/UX 디자인 및 퍼블리싱을 전담하였습니다.",
    stack: ["HTML", "CSS", "Figma", "Photoshop", "Illustrator"],
    color: COLORS.purple,
    images: [
      "/app_design.png",
      "/kiosk_design.png",
      "/kgc_figma.png",
      "/posco.png",
    ],
    company: "디지탈센스",
    github: "#",
    demo: "#",
    period: "2023.10 ~ 2024.12",
    members: 1,
    memberRole: "웹 디자이너",
    contribution: 100,
    tags: ["UI/UX 디자인", "모바일 웹/앱", "키오스크"],
    features: [
      {
        title: "UI/UX 디자인 & 퍼블리싱",
        items: [
          "한국인삼공사 무인 출입/안전관리 UI/UX",
          "포스코 물품 반출입 시스템 UI/UX",
          "사내 모바일 방문증 앱 UI/UX",
          "울산광역시 청사안내 키오스크 터치 인터페이스 UI/UX",
        ],
      },
      {
        title: "성과",
        items: [
          "사내 산출물, 인쇄물, 편집 디자인 및 공홈 유지보수",
          "HTML/CSS 기반 반응형 웹 퍼블리싱 다수 납품",
        ],
      },
    ],
  },
];
