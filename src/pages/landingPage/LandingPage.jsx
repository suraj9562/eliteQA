import Contact from "../../components/contact/Contact";
import FAQ from "../../components/faq/FAQ";
import Feature from "../../components/feature/Feature";
import Footer from "../../components/footer/Footer";
import FooterFeature from "../../components/FooterFeature/FooterFeature";
import Header from "../../components/header/Header";
import Intro from "../../components/intro/Intro";
import Testimonial from "../../components/Testimonial/Testimonial";

function LandingPage() {
  return (
    <div>
      <Header />
      <Intro />
      <Feature />
      <FAQ />
      <Testimonial />
      <FooterFeature />
      <Contact />
      <Footer />
    </div>
  );
}

export default LandingPage;
