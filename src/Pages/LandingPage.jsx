import AboutUs from "../Components/Sections/AboutUs";
import ContactSection from "../Components/Sections/ContactUs";
import FAQSection from "../Components/Sections/FAQ";
import HomeSection from "../Components/Sections/Home";
import ProjectSection from "../Components/Sections/Projects";

export default function LandingPage() {

  return (
    <div className="">

      <HomeSection />
      <ProjectSection />
      <AboutUs />
      <FAQSection />
      <ContactSection />


    </div>
  )
}