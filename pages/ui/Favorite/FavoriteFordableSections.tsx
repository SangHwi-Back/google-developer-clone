import styles from "@/pages/favorite/[id]/favorite.module.css";
import Link from "next/link";
import {FavoriteFordableSection} from "@/pages/favorite/[id]";

export default function FavoriteFordableSections(states: FavoriteFordableSection[]) {
  return <div>
    <p>플랫폼 설정 시작하기</p>
    <p>직무로 필터링:</p>
    <div className={styles.flexContainer}>
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
          <div className={styles.flexContainer}>
            <p className={'width: 90%;'}>{title}</p>
            <button>{isForded ? '접힘' : '열림'}</button>
          </div>
          <div>
            <p>{description}</p>
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
            <p>나중에 사용할 리소스:</p>
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
  </div>;
}