import {useState} from "react";
import Link from "next/link";

enum CardTypes {
    PRODUCT = "PRODUCT",
    MARKETING = "MARKETING"
}

type FavoriteCardProps = {
    buttonName: string;
    type: CardTypes;
    description: string;
    keywords: string[];
};

type HeaderButtonProps = {
    buttonName: string,
    isSelected: boolean,
    bubbleSelectEvent: (name: string) => void
}

export default function HomeFavorite() {
    const [selectedButtons, setSelectedButtons] = useState(new Array<string>());
    const headerButtons: string[] = [
        '검색', '결제', '디자인', '모바일', '사물 인터넷(IoT)', '스마트 홈 생태계',
        '오픈소스', '웹', '위치/지도', '클라우드', 'Ads', 'AI 및 머신러닝', 'Android',
        'AR/VR', 'C', 'C#', 'ChromeOS', 'Firebase', 'Flutter', 'Google 어시스턴트',
        'Google Play', 'iOS', 'Terraform'
    ];
    const favoriteProps: FavoriteCardProps[] = [
        {
            buttonName: "Product 1",
            type: CardTypes.PRODUCT,
            description: "This is a product description.",
            keywords: ["keyword1", "keyword2"]
        },
        {
            buttonName: "Marketing 1",
            type: CardTypes.MARKETING,
            description: "This is a marketing description.",
            keywords: ["keyword3", "keyword4"]
        }
    ];

    function bubbleSelectEvent(name: string) {
        setSelectedButtons((prevState: string[]) => {
            let prev = prevState;
            const index = prev.indexOf(name);
            if (index == -1) {
                prev.push(name);
            } else {
                prev.splice(index, 1);
            }
            return prev
        });
    }

    return <>
        <div className={'display: flex; flex-direction: row;'}>
            <p>필터링할 관심분야 선택</p>
            <div className={'flex-grow:1;'}/>
            <div>
                <p>(사람아이콘)</p>
                <p>계정 만들기</p>
            </div>
        </div>
        <div className={'display: flex; margin-bottom: 20px;'}>
            {headerButtons.map((buttonName) => {
                let prop: HeaderButtonProps = {
                    buttonName: buttonName, isSelected: selectedButtons.includes(buttonName),
                    bubbleSelectEvent: bubbleSelectEvent
                };
                return HeaderButton(prop);
            })}
        </div>
        <div className={'display: flex;'}>
            {favoriteProps.map((prop) => FavoriteCard(prop))}
        </div>
    </>
}

function HeaderButton({buttonName, isSelected, bubbleSelectEvent}: HeaderButtonProps) {
    return <button key={buttonName} onClick={() => bubbleSelectEvent(buttonName)}>
        <div className={`border-radius: 3px; border-color: gray; background-color: ${isSelected ? 'darkgray' : 'lightgray'}`}>
            {buttonName}
        </div>
    </button>
}

function FavoriteCard({buttonName, type, description, keywords}: FavoriteCardProps) {
    return <div key={buttonName} className={'border-radius: 5px;'}>
        <span className={'font-weight: bold;'}>{type}</span>
        <Link href={`/favorite/${buttonName}`}></Link>
        <span>{description}</span>
        <span className={'display: flex;'}>
            {keywords.map((keyword) => {
                return <p key={keyword} className={'background-color: gray; border-radius: 2px; font-weight: bold;'}>keyword</p>
            })}
        </span>
    </div>
}