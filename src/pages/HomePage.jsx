import { ContactSection } from "../components";
import { NavList } from "../components/Common/Navbar";
import { Hero } from "../components/DescriptionSection/welcome/hero";
import FeatureSection from "../components/DescriptionSection/welcome/homePage/components/FeatureSection";

export const Home = () => {
  return (
    <div>
      <NavList />
      <Hero />
      <FeatureSection />
      <ContactSection />
    </div>
  );
};
