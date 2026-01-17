import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Portfolio from "@/components/sections/Portfolio";
import Sustainability from "@/components/sections/Sustainability";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Portfolio />
        <Sustainability />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
