import Link from "next/link"
import styles from "../styles/footer.module.css"

function Footer() {
    return (
        <div className={styles.footer}>
            <a href="https://blog-app-nine-black.vercel.app/about">about</a>&nbsp;&nbsp;
            <a href="https://blog-app-nine-black.vercel.app/projects">projects</a>&nbsp;&nbsp;
            <a href="https://blog-app-nine-black.vercel.app/card">home</a>&nbsp;&nbsp;
        </div>
    )
}
export default Footer