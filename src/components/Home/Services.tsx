"use client"
import { servicesData } from "@/constants";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section id="services" className="w-full container mx-auto py-24 px-6 ">
      {/* Section Heading Animation */}
      <motion.h2
        className="section-heading"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Services We Offer
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
        {/* Service Cards Animation */}
        {servicesData.map((service, index) => (
          <motion.div
            key={service.id}
            className="space-y-4 w-full p-4 md:w-96 flex flex-col justify-center md:justify-start"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={service.thumbnail}
              alt="services"
              width={80}
              height={80}
              className="w-16"
            />
            <h4 className="card-title">{service.title}</h4>
            <p className="lg:text-lg">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
