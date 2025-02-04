import { motion } from "framer-motion";

const SendBtn = () => {
  return (
    <motion.button
      className="relative flex items-center justify-center gap-2 px-6 py-3 w-1/2 mx-auto text-lg font-semibold text-black bg-white border border-black rounded-2xl cursor-pointer overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Icon Animation */}
      <motion.div
        className="flex items-center justify-center text-black"
        initial={{ opacity: 1 }}
        whileHover={{ opacity: 1, y: 0, rotate: 45 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-send"
        >
          <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
          <path d="m21.854 2.147-10.94 10.939" />
        </svg>
      </motion.div>

      {/* Animated Text */}
      <motion.div className="flex">
        {[..."Send"].map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 1, y: 0 }}
            whileHover={{
              y: -3,
              transition: { type: "spring", stiffness: 200 },
            }}
            className="mx-[1px]"
          >
            {letter}
          </motion.span>
        ))}
      </motion.div>
    </motion.button>
  );
};

export default SendBtn;
