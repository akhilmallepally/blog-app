import Link from "next/link"
import styles from "../styles/header.module.css"
function Header() {
    return (
        <div className="m-4">
            <ul className={styles.ul}>
                <li className={styles.li}><a className={styles.anchor} href="https://blog-app-nine-black.vercel.app/">Home</a></li>
                <li className={styles.li}><Link href="/projects"><a className={styles.anchor} >Projects</a></Link></li>
                <li className={styles.li}><Link href="/blog"><a className={styles.anchor}>Blogs</a></Link></li>
                <li className={styles.li}><Link href="/contact"><a className={styles.anchor} >Contact</a></Link></li>
            </ul>
        </div>
    )
}

export default Header