"use client"; // Required for state in Next.js App Router

import { useState } from "react";
import { navItems } from "@/constants";
import Image from "next/image";
import { Menu, X } from "lucide-react"; // Icons for open/close menu
import CustomBtn from "../ui/CustomBtn";
import ModalCall from "../ModalCall";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null); // Active link state
  const [bookCall, setBookCall] = useState(false);

  const handleLinkClick = (id: any) => {
    setActiveLink(id); // Set active link on click
  };

  return (
    <header className="w-full bg-gradient-to-r from-black via-accent to-black fixed  top-0 z-50 h-20">
      <div className="container mx-auto flex items-center justify-between px-6 py-6">
        <div className="flex gap-2 items-center">
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-10"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
          {/* Logo */}
          <Link href={'/'}>
            <Image
              src="/images/altuxstudio.svg"
              alt="logo"
              width={300}
              height={300}
              className="w-[150px] lg:w-[200px]"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={`text-white font-medium relative group ${
                activeLink === item.id ? "text-primary" : "text-white"
              }`}
              onClick={() => handleLinkClick(item.id)}
            >
              {item.label}
              {/* Underline animation */}
              <span
                className={`absolute left-0 right-0 -bottom-2 h-[2px] bg-primary transform scale-x-0 transition-all duration-300 ${
                  activeLink === item.id || "group-hover:scale-x-100"
                }`}
              ></span>
            </Link>
          ))}
        </nav>

        <div>
          <CustomBtn title="Get Started" onClick={() => setBookCall(true)} />

          {/* Modal */}
          <ModalCall bookCall={bookCall} setBookCall={setBookCall} />
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`md:hidden bg-white shadow-md py-4 transition-all duration-300 ${
          isOpen
            ? "transform translate-x-0 opacity-100"
            : "transform translate-x-full opacity-0"
        }`}
        style={{
          transition: "transform 0.3s ease, opacity 0.3s ease",
        }}
      >
        <nav className="flex flex-col space-y-4 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={`text-gray-700 font-medium relative group ${
                activeLink === item.id ? "text-primary" : "text-gray-700"
              }`}
              onClick={() => {
                setIsOpen(false); // Close menu on click
                handleLinkClick(item.id); // Set active link
              }}
            >
              {item.label}
              {/* Underline animation */}
              <span
                className={`absolute left-0 right-0 bottom-2 h-[2px] bg-primary transform scale-x-0 transition-all duration-300 ${
                  activeLink === item.id || "group-hover:scale-x-100"
                }`}
              ></span>
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
