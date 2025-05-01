import Footer from "@/components/global/Footer";
import Benefits from "@/components/home/Benefits";
import Classes from "@/components/home/Classes";
import Harga from "@/components/home/Harga";
import Navbar from "../components/global/Navbar";
import AboutOLC from "../components/home/AboutOLC";
import Hero from "../components/home/Hero";
import OLConvention from "@/components/home/OLConvention";
import Timeline from "@/components/home/Timeline";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutOLC />
      <Classes />
      <OLConvention />
      <Timeline />
      <Harga />
      <Benefits />
      <Footer />
    </>
  );
}
