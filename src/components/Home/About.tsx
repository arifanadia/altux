import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <section id="about" className="container mx-auto w-full py-16 lg:py-24 px-6">
      {/* Section Header */}

      <div className="text-center flex flex-col justify-center">
        <h2 className="section-heading ">
          Who We Are <span className="text-primary">?</span>
        </h2>
        <p className="mt-6 text-lg text-gray-400 lg:w-3/4 xl:w-1/2 mx-auto">
          At <span className="text-primary font-bold">Altux Studio</span>, we
          specialize in crafting dynamic, high-performance websites and
          applications tailored to your business needs. Our team combines
          creativity and cutting-edge technology to deliver exceptional user
          experiences.
        </p>
      </div>

      {/* Main Content */}
      <div className="my-8 text-center ">
        <Image src={'/images/qutation.png'} alt="quote" width={91} height={68} className="w-12 lg:w-[92px]"/>
        <h3 className="text-2xl lg:text-[40px] lg:leading-[48.8px] mt-6 italic ">
          We don’t just build website- we create digital ecosystems where brands
          thrive. With every project, we prioritize innovation, ensuring that
          our solutions are scalable, fast, and future-proof. From sleek UI/UX
          design to powerful backend development. We make sure your brand’s
          online journey is smooth and impactful.
        </h3>
      </div>
    </section>
  );
};

export default About;
