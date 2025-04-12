import Image from "next/image";
import Keeper from "./Pages/Keeper";
import Jobs from "./Pages/Jobs";
import AboutSection from "./Pages/AboutSection";
import Testemonial from "./Pages/Testemonial";

export default function Home() {
  return (
    <div className="">
      <Keeper />
      {/* <Extradetails /> */}
      {/* <Jobs /> */}
      <Jobs />
      {/* <About /> */}
      <AboutSection />
      {/* <Testemonial /> */}
      <Testemonial />
      {/* <Contact /> */}
    </div>
  );
}
