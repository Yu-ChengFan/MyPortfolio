import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./Header";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Portfolio from "./Portfolio";
import Contact from "./Contact";


function Home() {
    return (
        <>
            <Header />
            <AboutMe />
            <Footer />
            <Portfolio />
            <Contact />
        </>
    );
}

export default Home;