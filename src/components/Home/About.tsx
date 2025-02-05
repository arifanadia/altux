"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="container mx-auto w-full py-16 lg:py-24 px-6">
      {/* Section Header */}
      <motion.div
        className="text-center flex flex-col justify-center"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="section-heading">
          Who We Are <span className="text-primary">?</span>
        </h2>
        <p className="mt-6 text-lg text-gray-400 lg:w-3/4 xl:w-1/2 mx-auto">
          At <span className="text-primary font-bold">Altux Studio</span>, we
          specialize in crafting dynamic, high-performance websites and
          applications tailored to your business needs. Our team combines
          creativity and cutting-edge technology to deliver exceptional user
          experiences.
        </p>
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="my-8 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <Image
          src={"/images/qutation.png"}
          alt="quote"
          width={91}
          height={68}
          className="w-12 lg:w-[92px]"
        />
        <h3 className="text-2xl lg:text-[40px] lg:leading-[48.8px] mt-6 italic">
          We don’t just build websites - we create digital ecosystems where
          brands thrive. With every project, we prioritize innovation, ensuring
          that our solutions are scalable, fast, and future-proof. From sleek
          UI/UX design to powerful backend development, we make sure your
          brand’s online journey is smooth and impactful.
        </h3>
      </motion.div>
    </section>
  );
};

export default About;
