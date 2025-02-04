import React from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import SendBtn from "./ui/sendBtn";

const ModalCall = ({
  bookCall,
  setBookCall,
}: {
  bookCall: boolean;
  setBookCall: (value: boolean) => void;
}) => {
  if (!bookCall) return null;

  // Text animation for each letter
  const textVariants = {
    initial: { opacity: 1, y: 0 },
    hover: { y: -5, transition: { type: "spring", stiffness: 300 } },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-accent bg-opacity-50 backdrop-blur-sm">
      <div className="p-6 rounded-xl w-full md:w-3/4 xl:w-[50%] bg-black h-[600px] ">
        {/* Close Button */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setBookCall(false)}
            className="ml-2 text-gray-500 flex justify-end"
          >
            <X className="text-primary text-lg" />
          </button>
        </div>

        {/* Title */}
        <div className="text-center">
          <h2 className="text-xl md:text-3xl">Don't be shy, let's <span className="text-primary">connect</span>!</h2>
        </div>

        {/* Form Inputs */}
        <div className="flex flex-col justify-center space-y-8 mt-8">
          <input
            placeholder="Your Name"
            className="border-0 border-b border-white focus:outline-none bg-transparent w-full md:w-1/2 mx-auto p-2 focus:border focus:rounded-md"
          />
          <input
            placeholder="Your Email"
            className="border-0 border-b border-white focus:outline-none bg-transparent w-full md:w-1/2 mx-auto p-2 focus:border focus:rounded-md"
          />

          {/* Animated Button */}
          <div>
            <SendBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCall;
