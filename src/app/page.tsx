import Nav from "@/components/sections/Nav";
import Hero from "@/components/sections/Hero";
import Intro from "@/components/sections/Intro";
import Pillars from "@/components/sections/Pillars";
import WorkGrid from "@/components/sections/WorkGrid";
import Process from "@/components/sections/Process";
import WhyFusionPoint from "@/components/sections/WhyFusionPoint";
import Team from "@/components/sections/Team";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Intro />
        <Pillars />
        <WorkGrid />
        <Process />
        <WhyFusionPoint />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
