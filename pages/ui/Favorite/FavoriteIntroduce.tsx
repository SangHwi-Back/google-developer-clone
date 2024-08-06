import styles from "@/pages/favorite/[id]/favorite.module.css";
import Image from "next/image";

export default function FavoriteIntroduce() {
  return <div className={styles.flexContainer}>
    <div>
      <p>Google Cloud 시작하기</p>
      <p>먼저 Google Cloud 계정을 만듭니다. 또한 $300의 무료 크레딧과 가입 시 워크로드를 실행, 테스트, 배포할 수 있는 20여 개 제품에 대한 무료 사용량이
        제공됩니다.</p>
      <div className={styles.flexContainer}>
        <button>계정 만들기</button>
        <button>Google Cloud 개요</button>
      </div>
    </div>
    <Image src={'/vercel.svg'} alt={'vercel'} width={100} height={100}/>
  </div>;
}