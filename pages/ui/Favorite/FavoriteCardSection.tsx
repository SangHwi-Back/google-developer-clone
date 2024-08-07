import styles from "@/pages/favorite/[id]/favorite.module.css";
import {FavoriteCardData} from "@/pages/favorite/[id]";
import CommonFont from "@/styles/Common.font";

export default function FavoriteCardSection({ data }: { data: FavoriteCardData }) {
  const { title, cards } = data;
  return <>
    <div>
      <p>{title}</p>
      <div className={`${styles.gridContainer} ${CommonFont.favorite.subTitle}`}>
        {cards.map(({ title, description }) => (
          <div key={title} className={styles.gridItem}>
            <p className={`${CommonFont.favorite.neatTitle}`}>{title}</p>
            <p className={`${CommonFont.favorite.description2}`}>{description}</p>
          </div>
        ))}
      </div>
    </div>
  </>
}
