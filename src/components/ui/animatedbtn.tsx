import { motion } from "framer-motion";
import Image from "next/image";

const AnimatedButton = () => {
  return (
    <motion.button
      className="relative min-w-[180px] h-16 px-5 py-3 flex items-center justify-center bg-white text-black text-lg font-semibold rounded-2xl cursor-pointer border border-black overflow-hidden"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Animated Icon (Moves from top on hover) */}
      <motion.div
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-black"
        initial={{ opacity: 0, y: -20 }}
        whileHover={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <Image 
          src="/images/send.png"  // ✅ Ensure this file exists in `public/images`
          alt="send icon" 
          width={24} 
          height={24} 
          unoptimized  // ✅ Use this for local testing
        />
      </motion.div>

      {/* Animated Text */}
      <motion.div className="relative">
        Your Button
      </motion.div>
    </motion.button>
  );
};

export default AnimatedButton;
