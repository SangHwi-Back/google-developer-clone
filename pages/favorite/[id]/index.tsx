import Layout from "@/pages/favorite/layouts/navBarLayout";
import Image from "next/image";
import Link from "next/link";

type FordableState = {
    id: string;
    title: string;
    description: string;
    isForded: boolean;
    numberedNames: [{
        name: string,
        targetMenu: string
    }],
    resources: [{
        name: string,
        targetMenu: string
    }]
}

export default function IntroduceFavorite(_: string) {
    const menus: string[] = ['Google Cloud 문서 홈', 'Google Cloud 시작하기', 'Google Cloud 를 위한 Gemini 의 통합 AI 지원', '최근 출시 노트', 'Cloud Customer Care 지원 받기'];
    let states: FordableState[];
    states = [
        {
            id: '1',
            title: 'IT 관리',
            description: 'Google Cloud 환경에서 관리자, 결제 계정, 기타 설정을 지정합니다.',
            isForded: false,
            numberedNames: [{name: 'a', targetMenu: 'a'}],
            resources: [{name: 'aa', targetMenu: 'aa'}]
        },
        {
            id: '2',
            title: 'DevOps 엔지니어링',
            description: 'Google Cloud 도구와 권장사항을 사용하여 인프라를 자동화하고 팀원들과 안전한 공동작업을 시작합니다.',
            isForded: false,
            numberedNames: [{name: 'a', targetMenu: 'a'}],
            resources: [{name: 'aa', targetMenu: 'aa'}]
        },
        {
            id: '3',
            title: '애플리케이션 개발',
            description: '기본 API 액세스를 가져오고 Google Cloud 서비스와 상호작용할 수 있는 개발 환경을 설정합니다.',
            isForded: false,
            numberedNames: [{name: 'a', targetMenu: 'a'}],
            resources: [{name: 'aa', targetMenu: 'aa'}]
        }
    ];

    return <Layout menus={menus}>
        <div>
            <div className={'display: flex; flex-direction: column'}>
                <div>
                    <p>Google Cloud 시작하기</p>
                    <p>먼저 Google Cloud 계정을 만듭니다. 또한 $300의 무료 크레딧과 가입 시 워크로드를 실행, 테스트, 배포할 수 있는 20여 개 제품에 대한 무료 사용량이
                        제공됩니다.</p>
                    <div className={'display: flex; flex-direction: column; column-gap: 10px;'}>
                        <button>계정 만들기</button>
                        <button>Google Cloud 개요</button>
                    </div>
                </div>
                <Image src={'/vercel.svg'} alt={'vercel'} width={100} height={100}/>
            </div>
            <div>
                <p>플랫폼 설정 시작하기</p>
                <p>직무로 필터링:</p>
                <div className={'display: flex; flex-direction: column; column-gap: 10px;'}>
                    <button>IT 관리</button>
                    <button>DevOps 엔지니어링</button>
                    <button>애플리케이션 개발</button>
                </div>
                {states.map((
                    {
                        id,
                        title,
                        description,
                        isForded,
                        numberedNames,
                        resources
                    }, _, __) => {
                    return (
                        <div key={id} id={'fordableContainer'}>
                            <div>
                                <p className={'width: 90%;'}>{title}</p>
                                <button>{isForded ? '접힘' : '열림'}</button>
                            </div>
                            <div>
                                <p>{description}</p>
                            </div>
                            <div>
                                {numberedNames.map(({name, targetMenu}, index) => {
                                    return <div key={name}
                                                className={'display: flex; flex-direction: column; column-gap: 10px;'}>
                                        <p>{index}</p>
                                        <Link href={`/favorite/${targetMenu}`}>{name}</Link>
                                    </div>
                                })}
                            </div>
                            <div>
                                <p>나중에 사용할 리소스:</p>
                                <ul>
                                    {resources.map(({name, targetMenu}) => {
                                        return <li key={name}><Link href={`/favorite/${targetMenu}`}>{targetMenu}</Link>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div>
                <p>빌드 시작</p>
                <div className={'display: grid; gap: 10px;'}>
                    <div className={'maxWidth: 200px; height: 100px; minHeight: 100px;'}>
                        <p>점프 스타트 솔루션 가이드</p>
                        <p>사전 빌드된 솔루션 템플릿 학습 및 실험</p>
                    </div>
                    <div className={'maxWidth: 200px; height: 100px; minHeight: 100px;'}>
                        <p>Cloud SDK, 언어, 프레임워크, 도구</p>
                        <p>코드를 사용하여 Google Cloud 와 상호작용할 수 있는 도구, 리소스, 제품을 탐색합니다.</p>
                    </div>
                    <div className={'maxWidth: 200px; height: 100px; minHeight: 100px;'}>
                        <p>Google Cloud 아키텍처 프레임워크</p>
                        <p>추천과 권장사항에 따라 잘 설계된 클라우드 토폴로지를 설계하고 운영합니다.</p>
                    </div>
                </div>
            </div>
            <div>
                <p>제품 탐색</p>
                <div className={'display: grid; gap: 10px;'}>
                    <div className={'maxWidth: 200px; height: 100px; minHeight: 100px;'}>
                        <p>Google Cloud 개발자 요약본</p>
                        <p>4개 이하의 단어로 요약된 Google Cloud 제품, 기능, 서비스입니다.</p>
                    </div>
                    <div className={'maxWidth: 200px; height: 100px; minHeight: 100px;'}>
                        <p>AWS 및 Azure 사용자용 Google Cloud</p>
                        <p>AWS 와 Azure 서비스를 Google Cloud 와 비교합니다.</p>
                    </div>
                </div>
            </div>
            <div>
                <p>기술 향상</p>
                <div className={'display: grid; gap: 10px;'}>
                    <div className={'maxWidth: 200px; height: 100px; minHeight: 100px;'}>
                        <p>교육 및 인증</p>
                        <p>Google Cloud 교육과정을 살펴보고 기술을 향상합니다.</p>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
}
