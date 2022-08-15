import Contact from "../../components/contact/Contact";
import FAQ from "../../components/faq/FAQ";
import Feature from "../../components/feature/Feature";
import FooterFeature from "../../components/FooterFeature/FooterFeature";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";

function LandingPage() {
  return (
    <div>
      <Header />
      <Intro />
      <Feature />
      <FAQ />
      <FooterFeature />
      <Contact />
    </div>
  );
}

export default LandingPage;
