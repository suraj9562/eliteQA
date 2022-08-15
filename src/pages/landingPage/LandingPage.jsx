import FAQ from "../../components/faq/FAQ";
import Feature from "../../components/feature/Feature";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";

function LandingPage() {
  return (
    <div>
      <Header />
      <Intro />
      <Feature />
      <FAQ />
    </div>
  );
}

export default LandingPage;
