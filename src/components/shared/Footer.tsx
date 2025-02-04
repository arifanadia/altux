import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-accent  py-16 px-6">
      <div className="container mx-auto ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 ">
          <div>
            {/* Logo */}
            <Image
              src="/logo.png"
              alt="Altux Studio Logo"
              width={200}
              height={200}
              className="w-[150px] lg:w-[200px] mb-4"
              priority={true}
            />

            {/* Description */}
            <p className="text-gray-400 text-sm lg:text-base max-w-md">
              Empowering businesses with innovative web solutions, seamless user
              experiences, and modern design.
            </p>
            <div className="flex items-center gap-4 mt-8">
              <Link href={'/'} className="bg-white rounded-full p-3">
                <Image
                  src={"/instagram.png"}
                  alt="social"
                  width={70}
                  height={70}
                  className="size-6"
                />
              </Link>
              <Link href={'/'} className="bg-white rounded-full p-3">
                <Image
                  src={"/facebook.png"}
                  alt="social"
                  width={70}
                  height={70}
                  className="size-6"
                />
              </Link>
              <Link href={'/'} className="bg-white rounded-full p-3">
                <Image
                  src={"/linkedin.png"}
                  alt="social"
                  width={70}
                  height={70}
                  className="size-6"
                />
              </Link>
            </div>
          </div>

          {/* Footer Links */}
          <div className="md:ml-24">
            <h5 className="font-semibold text-lg">Quick links</h5>
            <ul className="text-gray-400 mt-6 space-y-3">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold text-lg">Get in touch</h5>
            <ul className="text-gray-400 mt-6 space-y-3">
              <li>8502 Preston Rd. Inglewood, Maine 98380</li>
              <li>
                <a href="tel:+880 1893-802049">+880 1893-802049</a>
              </li>
              <li>
                <a href="mailto:altuxstudio@gmail.com">altuxstudio@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright */}
        <div>
          <div className=" border-b border-white mt-24" />
          <div className="text-gray-400 flex flex-col md:flex-row justify-between gap-4 md:items-center mt-8">
            <Link href="">Privacy Policies</Link>
            <Link href="">Term & conditions</Link>
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
