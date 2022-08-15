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
    </div>
  );
}

export default LandingPage;
