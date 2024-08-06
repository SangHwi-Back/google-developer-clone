import styles from "@/pages/favorite/[id]/favorite.module.css";
import {FavoriteCardData} from "@/pages/favorite/[id]";

export default function FavoriteCardSection({ title, cards }: FavoriteCardData) {
  return <>
    <div>
      <p>{title}</p>
      <div className={styles.gridContainer}>
        {cards.map(({ title, description }) => (
          <div key={title} className={styles.gridItem}>
            <p>{title}</p>
            <p>{description}</p>
          </div>
        ))}
      </div>
    </div>
  </>
}