import Link from "next/link";
import styles from "./header.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <Link href={"/"}>유튜버 맛집 지도</Link>
            <nav>
                <ul>
                    <li><Link href={'/readme'}>Readme</Link></li>
                    <li><Link href={'/Contact'}>Contact</Link></li>
                    <li><Link href={'/fetchNote'}>fetchNote</Link></li>
                </ul>
            </nav>
        </header>
    )
}