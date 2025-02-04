import { servicesData } from "@/constants";
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section id="services" className="w-full container mx-auto py-24 px-6 ">
      <h2 className="section-heading">Services We offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mt-16">
        {servicesData.map((service) => (
          <div key={service.id} className="space-y-4 w-full p-4 md:w-96 flex flex-col justify-center md:justify-start">
            <Image src={service.thumbnail} alt="services" width={80} height={80} className="w-16" />
            <h4 className="card-title">{service.title}</h4>
            <p className="lg:text-lg">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
