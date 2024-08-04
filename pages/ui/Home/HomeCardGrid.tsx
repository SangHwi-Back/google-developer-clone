import styles from '@/pages/ui/Home/HomeCardGrid.module.css';
import Image from "next/image";
import {useEffect, useRef} from "react";

type CardModel = {
  imageName: string,
  name: string,
  description: string
};

const cards: CardModel[] = [
  {
    imageName: 'android-logo.png',
    name: 'Android',
    description: '모든 Android 기기에서 사용자가 선호하는 환경을 구축하는 데 도움이 되는 최신 도구입니다.'
  }, {
    imageName: 'google_cloud_64dp.png',
    name: 'Google Cloud',
    description: '신규 고객에게는 동적 웹사이트 배포, VM 실행, 3계층 웹 앱 빌드 등에 사용할 수 있는 $300의 무료 크레딧이 제공됩니다.'
  }, {
    imageName: 'ai-studio-icon.png',
    name: 'Google AI Studio',
    description: 'Google AI 스튜디오의 Gemini로 생성형 AI 애플리케이션을 빠르게 빌드하세요.'
  }, {
    imageName: 'chromeos-logo.svg',
    name: 'Chrome',
    description: '고품질 웹 환경을 빌드하는 데 도움이 되는 최신 도구 및 기능입니다.'
  }, {
    imageName: 'play_prism_64dp.png',
    name: 'Google Play',
    description: '비즈니스를 성장시키고, 앱 품질을 개선하며, 잠재고객의 참여를 유도하고, 수익을 창출하세요.'
  }, {
    imageName: 'firebase_icon.svg',
    name: 'Firebase',
    description: '사용자가 선호하는 앱과 게임을 빌드하고 성장시키는 데 도움이 되는 앱 개발 플랫폼입니다.'
  }, {
    imageName: 'keras.png',
    name: 'Keras',
    description: 'TensorFlow, JAX, PyTorch에서 원활한 딥 러닝을 지원합니다.'
  }, {
    imageName: 'tensorflow-logo-196.png',
    name: 'TensorFlow',
    description: '모든 환경에서 ML 모델을 쉽게 빌드하고 배포할 수 있는 엔드 투 엔드 플랫폼입니다.'
  }, {
    imageName: 'flutter_64dp.png',
    name: 'Flutter',
    description: '하나의 코드베이스로 멋진 웹, 모바일, 데스크톱, 삽입된 앱을 빌드, 테스트, 배포하세요.'
  }, {
    imageName: 'google-ads.svg',
    name: 'Google Ads',
    description: 'Google Ads로 웹사이트, 제품, 앱을 적절한 사용자에게 홍보하세요.'
  }, {
    imageName: 'kaggle.svg',
    name: 'Kaggle',
    description: '머신러닝 데이터 세트를 공유하고, 모델을 탐색 및 빌드하고, 대회에서 경쟁할 수 있는 플랫폼입니다.'
  }, {
    imageName: 'angular_gradient.png',
    name: 'Angular',
    description: '미래 구축을 위한 웹 개발 프레임워크입니다.'
  }
]

export default function HomeCardGrid() {
  return <div>
    <p className={styles.fullWidthTitle}>지금 빌드 시작하기</p>

    <div className={styles.cardGrid}>
      {cards.map((card: CardModel) => <HomeCard key={card.name} card={card}/> )}
    </div>
  </div>
}

function HomeCard({card}: { card: CardModel }) {
  return <div className={styles.cardBackground}>
    <div className={styles.cardContent}>
      <Image width={64} height={64} className={styles.cardThumbnail} src={`/${card.imageName}`} alt={card.imageName}/>
      <SingleLineText text={card.name} />
      <p className={`${styles.cardParagraph} ${styles.singleLine}`}>{card.description}</p>
    </div>
  </div>
}

function SingleLineText({ text }: { text: string }) {
  const pRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const pElement = pRef.current;
    if (pElement) {
      let fontSize = parseFloat(window.getComputedStyle(pElement).fontSize);
      while (pElement.scrollWidth > pElement.clientWidth && fontSize > 0) {
        fontSize -= 0.5; // Reduce font size in smaller increments
        pElement.style.fontSize = `${fontSize}px`;
      }
    }
  }, [text]);

  return <p ref={pRef} className={`font-weight: bold; ${styles.singleLine}`}>{text}</p>;
}