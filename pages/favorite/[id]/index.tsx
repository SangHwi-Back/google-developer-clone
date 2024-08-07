import Layout from "@/pages/favorite/layouts/navBarLayout";
import FavoriteIntroduce from "@/pages/ui/Favorite/FavoriteIntroduce";
import FavoriteFordableSections from "@/pages/ui/Favorite/FavoriteFordableSections";
import FavoriteCardSection from "@/pages/ui/Favorite/FavoriteCardSection";

export type FavoriteFordableSection = {
    id: string;
    title: string;
    description: string;
    isForded: boolean;
    numberedNames: { name: string, path: string }[],
    resources: { name: string, path: string }[]
}

export type FavoriteCardData = {
    title: string;
    cards: { title: string, description: string, path?: string }[]
}

export default function IntroduceFavorite(_: string) {
    const menus: string[] = ['Google Cloud 문서 홈', 'Google Cloud 시작하기', 'Google Cloud 를 위한 Gemini 의 통합 AI 지원', '최근 출시 노트', 'Cloud Customer Care 지원 받기'];
    let sections: FavoriteFordableSection[] = [
        {
            id: '1',
            title: 'IT 관리',
            description: 'Google Cloud 환경에서 관리자, 결제 계정, 기타 설정을 지정합니다.',
            isForded: false,
            numberedNames: [
                {name: '조직, 관리자, 결제 설정', path: 'a'},
                {name: '초기 아키텍처 만들기', path: 'a'},
                {name: '구성 배포 또는 다운로드', path: 'a'}
            ],
            resources: [
                {name: 'Cloud Quotas 개요', path: 'a'},
                {name: 'Google Cloud 배포 원형(아키텍처 센터)', path: 'a'}
            ]
        }, {
            id: '2',
            title: 'DevOps 엔지니어링',
            description: 'Google Cloud 도구와 권장사항을 사용하여 인프라를 자동화하고 팀원들과 안전한 공동작업을 시작합니다.',
            isForded: false,
            numberedNames: [
                {name: 'API 액세스 설정', path: 'a'},
                {name: 'gcloud CLI 설치', path: 'a'},
                {name: 'IAM 을 사용하여 팀원 지원', path: 'a'},
                {name: 'Cloud 클라이언트 라이브러리 선택 및 설치', path: 'a'},
                {name: '인증 및 승인 알아보기', path: 'a'}
            ],
            resources: [
                {name: 'Google Cloud 의 관측 가능성', path: 'a'},
                {name: 'Terraform 및 Infrastructure Manager', path: 'a'},
                {name: '컨테이너화된 앱을 위한 CI/CD 파이프라인(아키텍처 센터)', path: 'a'}
            ]
        }, {
            id: '3',
            title: '애플리케이션 개발',
            description: '기본 API 액세스를 가져오고 Google Cloud 서비스와 상호작용할 수 있는 개발 환경을 설정합니다.',
            isForded: false,
            numberedNames: [
                {name: 'API 액세스 설정', path: 'a'},
                {name: 'gcloud CLI 설치', path: 'a'},
                {name: 'Cloud 클라이언트 라이브러리 선택 및 설치', path: 'a'},
                {name: 'IDE 확장 프로그램 설정', path: 'a'},
                {name: '인증 및 승인 알아보기', path: 'a'}
            ],
            resources: [
                {name: '생성형 AI 애플리케이션 빌드', path: 'a'}
            ]
        }
    ];
    let cardData: FavoriteCardData[] = [
        {
            title: "빌드 시작",
            cards: [
                {
                    title: "점프 스타트 솔루션 가이드",
                    description: "사전 빌드된 솔루션 템플릿 학습 및 실험"
                }, {
                    title: "Cloud SDK, 언어, 프레임워크, 도구",
                    description: "코드를 사용하여 Google Cloud 와 상호작용할 수 있는 도구, 리소스, 제품을 탐색합니다."
                }, {
                    title: "Google Cloud 아키텍처 프레임워크",
                    description: "추천과 권장사항에 따라 잘 설계된 클라우드 토폴로지를 설계하고 운영합니다."
                }
            ]
        }, {
            title: "제품 탐색",
            cards: [
                {
                    title: "Google Cloud 개발자 요약본",
                    description: "4개 이하의 단어로 요약된 Google Cloud 제품, 기능, 서비스입니다."
                }, {
                    title: "AWS 및 Azure 사용자용 Google Cloud",
                    description: "AWS 와 Azure 서비스를 Google Cloud 와 비교합니다."
                }
            ]
        }, {
            title: "기술 향상",
            cards: [
                {
                    title: "교육 및 인증",
                    description: "Google Cloud 교육과정을 살펴보고 기술을 향상합니다."
                }
            ]
        }
    ]

    return <Layout menus={menus}>
        <div>
            <FavoriteIntroduce/>
            <FavoriteFordableSections states={sections}/>
            {cardData.map((card, index) => (
                <FavoriteCardSection key={index} data={card}/>
            ))}
        </div>
    </Layout>
}

