import Image from "next/image"
import styles from "../styles/about.module.css"
function About () {
    return (
        <div className={styles.aboutclass}>
    <h1>About Me!</h1>
    <p>I am nothing but my thoughts</p>
    <a href="/Akhil_Mallepally.pdf">Resume</a>
    </div>
    )
}

export default About