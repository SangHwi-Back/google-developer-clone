import styles from '@/pages/ui/MainHeader.module.css';
import Link from "next/link";
import {useState} from "react";

export default function MainHeader() {
    const [isMenuOpened, setOpenMenu] = useState(false);
    const [isModalOpened, setOpenModal] = useState(false);
    return <>
        <header className={styles.mainHeader}>
            {/* MARK: MAIN_HEADER_LEFT */}
            <div className={styles.mainHeaderLeft}>
                <button onClick={() => setOpenMenu(!isMenuOpened)}>햄버거</button>
                <Link href={'/'}>CI</Link>
                <Link href={'/product'}>제품</Link>
                <Link href={'/solution'}>솔루션</Link>
                <Link href={'/event'}>이벤트</Link>
                <Link href={'/education'}>학습</Link>
                <Link href={'/devCommunity'}>커뮤</Link>
                <Link href={'/program'}>프로그램</Link>
                <Link href={'/blog'}>블로그</Link>
            </div>

            {/* MARK: MAIN_HEADER_MID */}
            <div className={styles.mainHeaderMiddle}/>

            {/* MARK: MAIN_HEADER_RIGHT */}
            <div className={styles.mainRight}>
                <input type={'text'} placeholder={'검색'}/>
                <Link href={'/setting/language'}>언어</Link>
                <button onClick={() => setOpenModal(!isModalOpened)}>닷</button>
                <Link href={'/setting'}>설정</Link>
            </div>
        </header>
    </>
}