import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import InfiniteMarquee from "@/components/Home/Marquee";
import Projects from "@/components/Home/Projects";
import Services from "@/components/Home/Services";
import Team from "@/components/Home/Team";
import Testimonial from "@/components/Home/Testimonial";
import WhatGet from "@/components/Home/WhatGet";

export default function Home() {
  return (
    <div className="w-full mt-12">
      <div className="bg-gradient-to-r from-black via-accent to-black w-full container mx-auto">
        <Hero />
        <WhatGet />
      </div>

      <div className="bg-gradient-to-r from-black to-accent  ">
        <About />
        <InfiniteMarquee />
        <Services />
        <Projects />
        <Testimonial />
      </div>
    </div>
  );
}
