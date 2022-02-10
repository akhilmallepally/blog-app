import Link from "next/link"
import styles from "./footer.module.css"

function Footer() {
    return (
        <div className={styles.footer}>
            <a href="http://localhost:3000/about">about</a>&nbsp;&nbsp;
            <a href="http://localhost:3000/projects">projects</a>&nbsp;&nbsp;
            <a href="http://localhost:3000/card">home</a>&nbsp;&nbsp;
        </div>
    )
}
export default Footer