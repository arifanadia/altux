"use client";

import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="relative flex overflow-hidden whitespace-nowrap bg-black py-6">
      <motion.div
        className="flex space-x-10 text-white text-5xl md:text-7xl xl:text-9xl font-bold uppercase"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
        whileHover={{ x: 0 }} // Pause on hover
      >
        <h2>Altux studio <span className="text-primary">*</span> </h2>
        <h2>Altux studio <span className="text-primary">*</span></h2>
        <h2>Altux studio <span className="text-primary">*</span></h2>
        <h2>Altux studio <span className="text-primary">*</span></h2>
        <h2>Altux studio <span className="text-primary">*</span></h2>
      </motion.div>
    </div>
  );
};

export default Marquee;
