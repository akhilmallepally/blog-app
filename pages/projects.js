import Link from "next/link"
import styles from "../styles/projects.module.css"
function Project(){
    return (
        <div className={styles.projectclass}>
            <h1 className={styles.projhead}>
            Projects
            </h1>
            
            <h5 className={styles.projnam}><Link href="https://bearcatevents.herokuapp.com/"><a>A web application for list of events in university</a></Link></h5>
            <p>- Master’s Project: A web application that consists list of events using Array Data Structure in JavaScript with Python as Backend. Hands on experience with the software development process in practice by implementing the Design Document, interacting with clients, and deployed the project on Heroku.</p>
            
            <h5 className={styles.projnam}><Link href="https://github.com/akhilmallepally/pm-s03-g02-project"><a>Understanding project requirements</a></Link></h5>
            <p>- This project is about implementing the entire process in development of a Request for Proposal of any project from initiation to closing of a project for developing a web application named, Campus Management System. This helped me understand the basic requirements while developing a product and the technicalities that involve in any project before it goes on board. </p>
            
            <h5 className={styles.projnam}><Link href="https://github.com/akhilmallepally/Data-Analytics-using-Python/blob/main/huberman.ipynb"><a>Analysing Haberman dataset</a></Link></h5>
            <p>- In this project, I performed the univariate and bivariate analysis by explaining the objectives. </p>
            
            
            <h5 className={styles.projnam}><Link href="https://github.com/akhilmallepally/scraping-from-nytimes">Scraping data from NYtimes</Link></h5>
            <p>- Scraping the article from NYtimes which states the lies said by Donald Trump publicly. This includes the lie, date of lie, previous statement, the link for the previous statement and stored in a CSV file. I used BeautifulSoup for scraping and pandas for converting the scraped data into a CSV file. </p>            
            
        </div>
        
    )
}

export default Project