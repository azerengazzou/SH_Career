import Faq from "../components/HomeUI/Faq";
import Features from "../components/HomeUI/Features";
import Footer from "../components/HomeUI/Footer";
import Hero from "../components/HomeUI/Hero";
import Navigation from "../components/HomeUI/Navigation";
import News from "../components/HomeUI/News";
import Pricing from "../components/HomeUI/Pricing";
import Builder from "./Builder";
import "./../pages/default.css"

function Home() {
  return (
    <div>
        <Navigation/>
        <Hero/>
        <Features/>
        <Builder/>
        <Faq/>
        <Footer/>
    </div>
  );
}

export default Home;
