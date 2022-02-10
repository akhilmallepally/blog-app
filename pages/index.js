import Head from "next/head"
import Footer from "./footer"
import Header from "./Header"
import About from "./About"
import Project from "./projects"
import Card from "./card"
import Blog from "./blog"

function Home() {
    return(
        <div className="container">
            <Head>
                <title>My blog app</title>
                <meta name="description" content="Blog app using nextJS"/>
                <link rel="icon" href="/performance.png" />
            </Head>
            <Header />
            <Card />
            <Project />
            <Blog />
            <About />
            <Footer />
            
        </div>
        
    )
}
export default Home