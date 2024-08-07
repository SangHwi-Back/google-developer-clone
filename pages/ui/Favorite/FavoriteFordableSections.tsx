import styles from "@/pages/favorite/[id]/favorite.module.css";
import Link from "next/link";
import {FavoriteFordableSection} from "@/pages/favorite/[id]";
import CommonFont from "@/styles/Common.font";

export default function FavoriteFordableSections({ states }: { states: FavoriteFordableSection[] }) {
  return <div className={styles.fordableSections}>
    <div className={'margin: 10px;'}>
    <p className={`${styles.middleTitle} ${CommonFont.favorite.subTitle}`}>플랫폼 설정 시작하기</p>
    <p className={`${CommonFont.favorite.description2}`}>직무로 필터링:</p>
    <div className={styles.flexContainer}>
      <button className={`${styles.buttonWithCheckmark} ${CommonFont.favorite.buttonBold}`}>IT 관리</button>
      <button className={`${styles.buttonWithCheckmark} ${CommonFont.favorite.buttonBold}`}>DevOps 엔지니어링</button>
      <button className={`${styles.buttonWithCheckmark} ${CommonFont.favorite.buttonBold}`}>애플리케이션 개발</button>
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
          <div className={styles.flexContainer}>
            <p className={`width: 90%; ${CommonFont.favorite.subTitle}`}>{title}</p>
            <button>{isForded ? '접힘' : '열림'}</button>
          </div>
          <div>
            <p className={`${CommonFont.favorite.description}`}>{description}</p>
          </div>
          <div>
            {numberedNames.map(({name, path}, index) => {
              return <div key={name}
                          className={styles.flexContainer}>
                <p>{index}</p>
                <Link href={`/favorite/${path}`}>{name}</Link>
              </div>
            })}
          </div>
          <div>
            <p className={`${CommonFont.favorite.description}`}>나중에 사용할 리소스:</p>
            <ul>
              {resources.map(({name, path}) => {
                return <li key={name}><Link href={`/favorite/${path}`}>{path}</Link>
                </li>
              })}
            </ul>
          </div>
        </div>
      );
    })}
    </div>
  </div>;
}
