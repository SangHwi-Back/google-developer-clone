import styles from '@/pages/ui/Home/HomeHead.module.css';
import Image from "next/image";

export default function HomeHead() {
    return <>
        <div className={styles.homeHeadLeading}>
            <p>더 스마트하게 빌드하고 더 빠르게 출시</p>
            <p>개방형 통합 솔루션으로 창의성을 발휘하고 워크플로를 간소화하세요.</p>
        </div>
        <div className={styles.homeHeadTrailing}>
            <div className={'border-radius: 5px; background: #bfbfbf; padding: 10px;'}>
                <span><Image width={100} height={100} src={'/next.svg'} alt={'next'}/></span>
                <span><p>이것은 Next.js 클론입니다.</p></span>
            </div>
        </div>
    </>
}