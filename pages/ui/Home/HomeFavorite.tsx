import {useState} from "react";
import styles from '@/pages/ui/HomeFeature.module.css';
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
        <div className={`${styles.flexContainerRow}`}>
            <div className={`${styles.stretchItem}`}><p>필터링할 관심분야 선택</p></div>
            <div className={styles.flexContainer}>
                <p>(사람아이콘)</p>
                <p>계정 만들기</p>
            </div>
        </div>
        <div className={`${styles.flexContainerRow}`}>
            {headerButtons.map((buttonName) => {
                let prop: HeaderButtonProps = {
                    buttonName: buttonName, isSelected: selectedButtons.includes(buttonName),
                    bubbleSelectEvent: bubbleSelectEvent
                };
                return HeaderButton(prop);
            })}
        </div>
        <div className={styles.flexContainerRow}>
            {favoriteProps.map((prop) => FavoriteCard(prop))}
        </div>
    </>
}

function HeaderButton({buttonName, isSelected, bubbleSelectEvent}: HeaderButtonProps) {
    return <button key={buttonName} onClick={() => bubbleSelectEvent(buttonName)}>
        <div className={`${styles.headerButton} background-color: ${isSelected ? 'darkgray' : 'lightgray'}`}>
            {buttonName}
        </div>
    </button>
}

function FavoriteCard({buttonName, description}: FavoriteCardProps) {
    return <div key={buttonName} className={`${styles.favoriteCard}`}>
        <Link href={`/favorite/${buttonName}`}>{buttonName}</Link>
        <div>{description}</div>
    </div>
}
