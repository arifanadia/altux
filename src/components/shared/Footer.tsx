"use client"; // Ensure Framer Motion works in Next.js (if needed)

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent py-16 px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          <div>
            {/* Logo */}
            <Link href={'/'}>
              <Image
                src="/images/altuxstudio.svg"
                alt="Altux Studio Logo"
                width={200}
                height={200}
                className="w-[150px] lg:w-[200px] mb-4"
                priority={true}
              />
            </Link>
            {/* Description */}
            <p className="text-gray-400 text-sm lg:text-base max-w-md">
              Empowering businesses with innovative web solutions, seamless user experiences, and modern design.
            </p>
            <div className="flex items-center gap-4 mt-8">
              {["instagram", "facebook", "linkedin", "twitter"].map((platform, index) => (
                <motion.a
                  key={index}
                  href={`https://www.${platform}.com/altuxstudio/`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="social-icon-bg"
                >
                  <Image
                    src={`/images/${platform}.png`}
                    alt="social"
                    width={70}
                    height={70}
                    className="social-icon"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:ml-24">
            <h5 className="font-semibold text-lg">Quick links</h5>
            <ul className="text-gray-400 mt-6 space-y-3">
              {["Home", "Services", "Projects", "About"].map((item, index) => (
                <motion.li key={index} whileHover={{ x: 5, color: "#FF6347" }} transition={{ type: "spring", stiffness: 200 }}>
                  <Link href={`#${item.toLowerCase()}`} className="footer-link">{item}</Link>
                </motion.li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-semibold text-lg">Get in touch</h5>
            <ul className="text-gray-400 mt-6 space-y-3">
              <li>24 Road No. 12, Gulshan-2 Dhaka 1212</li>
              <motion.li whileHover={{ x: 5, color: "#FF6347" }} transition={{ type: "spring", stiffness: 200 }}>
                <a className="footer-link" href="tel:+8801893802049">+880 1893-802049</a>
              </motion.li>
              <motion.li whileHover={{ x: 5, color: "#FF6347" }} transition={{ type: "spring", stiffness: 200 }}>
                <a className="footer-link" href="mailto:altuxstudio@gmail.com">altuxstudio@gmail.com</a>
              </motion.li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div>
          <div className="border-b border-white mt-24" />
          <div className="text-gray-400 flex flex-col md:flex-row justify-between gap-4 md:items-center mt-8">
            <motion.a whileHover={{ x: 5, color: "#FF6347" }} href="/privacy-policies" className="footer-link">Privacy Policies</motion.a>
            <motion.a whileHover={{ x: 5, color: "#FF6347" }} href="/term-and-conditions" className="footer-link">Term & conditions</motion.a>
            <p className="md:mt-6">
              © {new Date().getFullYear()} Altux Studio. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
