import styles from "@/pages/favorite/[id]/favorite.module.css";
import Image from "next/image";
import CommonFont from "@/styles/Common.font";

export default function FavoriteIntroduce() {
  return <div className={styles.flexContainer}>
    <div>
      <p className={`${CommonFont.favorite.title}`}>Google Cloud 시작하기</p>
      <p className={`${CommonFont.favorite.description}`}>먼저 Google Cloud 계정을 만듭니다. 또한 $300의 무료 크레딧과 가입 시 워크로드를 실행, 테스트, 배포할 수 있는 20여 개 제품에 대한 무료 사용량이
        제공됩니다.</p>
      <div className={styles.flexContainer}>
        <button className={`${CommonFont.favorite.button}`}>계정 만들기</button>
        <button className={`${CommonFont.favorite.button}`}>Google Cloud 개요</button>
      </div>
    </div>
    <Image src={'/vercel.svg'} alt={'vercel'} width={250} height={200}/>
  </div>;
}
