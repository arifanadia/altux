import type { Metadata } from "next";
import { Instrument_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import MetaPixel from "@/components/shared/MetaPixel";

const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Altux Studio",
  description:
    "Crafting modern web experiences with cutting-edge development, UI/UX design, and innovative coding solutions.",
  icons: {
    icon: "/images/altux.jpg", // Fallback favicon
    shortcut: "/images/altux.jpg", // Shortcut icon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className=" scrollbar-thin h-4 scrollbar-thumb-primary scrollbar-track-gray-700 scroll-smooth"
    >
      <head>
        <link
          rel="icon"
          type="image/jpg"
          href="/images/altux.jpg"
          sizes="32x32"
          className="object-cover w-full"
        />
      </head>
      <body
        className={`${instrumentSans.variable} antialiased bg-black text-white`}
      >
        <MetaPixel />
        <CustomCursor />
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
