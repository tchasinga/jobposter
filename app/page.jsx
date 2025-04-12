import Image from "next/image";
import Keeper from "./Pages/Keeper";
import Jobs from "./Pages/Jobs";
import AboutSection from "./Pages/AboutSection";
import Testemonial from "./Pages/Testemonial";
import ContactUs from "./Pages/ContactUs";
import JobApplicationForm from "./Pages/JobApplicationForm";

export default function Home() {
  return (
    <div className="">
      <Keeper />
      {/* <Extradetails /> */}
      {/* <Jobs /> */}
      <Jobs />
      {/* <About /> */}
      <div id="about">
      <AboutSection />
      </div>

      {/* <Testemonial /> */}
      <Testemonial />

      <JobApplicationForm />
      {/* <Contact /> */}
      <div id="contact">
        <ContactUs />
      </div>
    </div>
  );
}
