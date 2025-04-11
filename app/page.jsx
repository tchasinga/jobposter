import Image from "next/image";
import Keeper from "./Pages/Keeper";
import Jobs from "./Pages/Jobs";
import { StickyScrollRevealDemo } from "./Pages/StickyScrollRevealDemo";

export default function Home() {
  return (
    <div className="">
      <Keeper />
      {/* <Extradetails /> */}
      {/* <Jobs /> */}
      <Jobs />
      {/* <About /> */}
      <StickyScrollRevealDemo />
      {/* <Companies /> */}
    </div>
  );
}
