import { ContactSection } from "../components";
import { NavList } from "../components/Common/Navbar";
import { Hero } from "../components/DescriptionSection/welcome/hero";
import FeatureSection from "../components/DescriptionSection/welcome/homePage/components/FeatureSection";

export const Home = () => {
  return (
    <div /*style={{ background: "linear-gradient(to right, #ff7e5f, #feb47b, #33C1FF)" }}*/>
    
      <NavList />
      <Hero />
      <FeatureSection />
      <ContactSection />
    </div>
  );
};
