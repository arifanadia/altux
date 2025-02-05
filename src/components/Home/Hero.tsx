"use client"
import React, { useState } from "react";
import CustomBtn from "../ui/CustomBtn";
import Typewriter from "typewriter-effect";
import ModalCall from "../ModalCall";

const Hero = () => {
  const [bookCall, setBookCall] = useState(false);


  return (
    <section className=" py-28 px-6">
      <div>
        <h1 className="text-3xl md:text-6xl lg:text-7xl xl:text-8xl font-bold md:leading-tight  lg:leading-tight xl:leading-snug">
          A Dedicated Team for <br />{" "}
          <span className="text-primary">
            <Typewriter
              options={{
                strings: ["Design, Build & Grow"],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </span>
        </h1>
        <p className="text-lg md:w-3/4 xl:w-[55%] 2xl:w-1/2 my-6">
          We craft high-performance, stunning websites that drive results.
          Passionate about design, technology and user experience, we bring
          brands to life in the digital world.
        </p>
        <div>
            <CustomBtn title="Get Started" onClick={() => setBookCall(true)}/>
        
          {/* Modal */}
        <ModalCall bookCall={bookCall} setBookCall={setBookCall} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
