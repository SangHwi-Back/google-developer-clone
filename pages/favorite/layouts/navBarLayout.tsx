import {ReactNode} from "react";
import styles from '@/pages/favorite/layouts/navBarLayout.module.css'

export default function Layout({ children, menus }: { children: ReactNode, menus: string[] }) {
    return <div className={styles.navBarLayout}>
        <div className={styles.navBar}>
            <ul>
                {menus.map((name) => (
                    <li key={name}>{name}</li>
                ))}
            </ul>
        </div>
        <div className={styles.navContents}>{children}</div>
    </div>
}
