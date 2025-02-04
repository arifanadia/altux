"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { testimonialData } from "@/constants";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";

const Testimonial = () => {
  return (
    <section className="w-full mx-auto mt-20  xl:p-16 container px-6 ">
      <h2 className="section-heading text-center">Hear From our Customers</h2>
      <div className="relative w-full overflow-hidden mt-24 px-4 sm:px-6 lg:px-8">
        <Swiper
          modules={[ Pagination, Autoplay]}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active",
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="testimonial-slider"
        >
          {testimonialData.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <div className="p-4 sm:p-6 border border-accent rounded-2xl xl:h-80 h-96 mx-auto w-full bg-black">
                <div className="flex flex-col">
                  <Image
                    src={"/images/qutation.png"}
                    alt="quote"
                    width={40}
                    height={40}
                    className="size-8 "
                  />
                  <p className="mt-4">{testimonial.feedback}</p>
                  <div className="flex gap-3 items-center mt-12">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={80}
                      height={80}
                      className="object-cover size-16 rounded-full"
                    />
                    <div>
                      <h1 className="text-white font-semibold mt-4 uppercase text-sm">
                        {testimonial.name}
                      </h1>
                      <span className="text-xs text-gray-400">
                        {testimonial.designation}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
