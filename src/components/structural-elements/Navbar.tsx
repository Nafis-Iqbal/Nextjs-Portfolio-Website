"use client";

import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import BasicButton from "./Buttons";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaHome, FaLaptopCode, FaRegLightbulb, FaTools } from "react-icons/fa";
import { SiUpwork } from "react-icons/si";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const onMenuNavigate = (navigateTo: string) => {
        setIsMenuOpen(false);
        smoothScrollToSection(navigateTo);
    }

    const smoothScrollToSection = (sectionId: string) => {
        const element = document.querySelector(sectionId);
        if (element) {
            const navbarHeight = 80; // Height of the fixed navbar
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - navbarHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div 
            className="fixed top-0 left-0 z-50 flex items-center px-4 w-full h-[80px] bg-gray-900/95 
                backdrop-blur-sm border-b border-gray-800" 
            style={{fontFamily: 'var(--font-fredericka)'}}
        >
            <div className="relative flex justify-between items-center w-full max-w-7xl mx-auto">
                <div className="flex space-x-10 items-center">
                    <a
                        href="https://github.com/Nafis-Iqbal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                        aria-label="GitHub Profile"
                    >
                        <Github size={24} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nafis-iqbal-79b645213/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                        aria-label="LinkedIn Profile"
                    >
                        <Linkedin size={24} />
                    </a>

                    <a
                        href="https://www.upwork.com/freelancers/~011e44814053248964"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:block p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                        aria-label="Upwork Profile"
                    >
                        <SiUpwork size={24} />
                    </a>

                    <div className="text-2xl md:text-3xl font-bold text-emerald-400">
                        Nafis Iqbal
                    </div>
                </div>
                
                
                <BasicButton 
                    buttonColor="bg-emerald-600 hover:bg-emerald-500" 
                    buttonTextColor="text-white" 
                    onClick={() => onMenuToggle()} 
                    extraStyle="md:hidden border border-emerald-500 rounded-lg p-2"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </BasicButton>

                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div 
                            className="absolute top-full right-0 flex flex-col md:hidden bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden"
                            initial={{ opacity: 0, y: "-100%", x: "10%" }}
                            animate={{ opacity: 1, y: "5%", x: "10%" }}
                            exit={{ opacity: 0, y: "-100%", x: "10%" }}
                        >
                            <div className="flex space-x-2 text-white hover:bg-emerald-600 transition-colors border-b">
                                <a
                                    href="https://github.com/Nafis-Iqbal"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                                    aria-label="GitHub Profile"
                                >
                                    <Github size={24} />
                                </a>

                                <a
                                    href="https://www.linkedin.com/in/nafis-iqbal-79b645213/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                                    aria-label="LinkedIn Profile"
                                >
                                    <Linkedin size={24} />
                                </a>

                                <a
                                    href="https://www.upwork.com/freelancers/~011e44814053248964"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                                    aria-label="Upwork Profile"
                                >
                                    <SiUpwork size={24} />
                                </a>
                            </div>
                            <button 
                                className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700 text-left w-full" 
                                onClick={() => onMenuNavigate("#hero")}
                            >
                                Home
                            </button>
                            <button 
                                className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700 text-left w-full" 
                                onClick={() => onMenuNavigate("#experience")}
                            >
                                Experience
                            </button>
                            <button 
                                className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700 text-left w-full" 
                                onClick={() => onMenuNavigate("#projects")}
                            >
                                Projects
                            </button>
                            <button 
                                className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700 text-left w-full" 
                                onClick={() => onMenuNavigate("#skills")}
                            >
                                Skills
                            </button>
                            <button 
                                className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors text-left w-full" 
                                onClick={() => onMenuNavigate("#interests")}
                            >
                                Future Plans
                            </button> 
                        </motion.div>         
                    )}
                </AnimatePresence>

                <div className="hidden md:flex space-x-15 items-center text-2xl text-white">
                    <button 
                        className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer" 
                        onClick={() => smoothScrollToSection("#hero")}
                    >
                        <FaHome/>
                    </button>
                    <button 
                        className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer" 
                        onClick={() => smoothScrollToSection("#experience")}
                    >
                        <FaBriefcase/>
                    </button>
                    <button 
                        className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer" 
                        onClick={() => smoothScrollToSection("#projects")}
                    >
                        <FaLaptopCode/>
                    </button>
                    <button 
                        className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer" 
                        onClick={() => smoothScrollToSection("#skills")}
                    >
                        <FaTools/>
                    </button>
                    <button 
                        className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer" 
                        onClick={() => smoothScrollToSection("#interests")}
                    >
                        <FaRegLightbulb/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;