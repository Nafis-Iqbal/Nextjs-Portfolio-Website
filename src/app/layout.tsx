import type { Metadata } from "next";
import { Geist, Fredericka_the_Great, Rubik, Ubuntu_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "@/components/structural-elements/Navbar";
import Footer from "@/components/structural-elements/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fredericka = Fredericka_the_Great({
  variable: "--font-fredericka",
  weight: "400",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const ubuntu = Ubuntu_Mono({
  weight: "400",
  variable: "--font-ubuntu",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nafis Iqbal - Full Stack Developer & Game Developer",
  description: "Professional portfolio of Nafis Iqbal - Full Stack Developer specializing in React, Node.js, Unity 3D game development, and modern web technologies.",
  keywords: "Nafis Iqbal, Full Stack Developer, Game Developer, React, Node.js, Unity 3D, Web Development",
  authors: [{ name: "Nafis Iqbal" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${ubuntu.className} ${fredericka.variable} dark`}>
      <body className="flex flex-col w-full bg-black text-white antialiased">
        <header className="">
         <nav className="">
           <Navbar/> 
         </nav> 
        </header>

          {children}
        
        <footer className="w-full flex flex-wrap items-center justify-center bg-gray-900 border-t border-gray-800">
          <Footer/>
        </footer>
      </body>
    </html>
  );
}
