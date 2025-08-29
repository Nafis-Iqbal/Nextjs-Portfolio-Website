"use client";

import { useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import BasicButton from "./Buttons";
import { motion, AnimatePresence } from "framer-motion";
import { FaBriefcase, FaHome, FaLaptopCode, FaRegLightbulb, FaTools } from "react-icons/fa";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const onMenuNavigate = (navigateTo: string) => {
        setIsMenuOpen(false);
    }

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
                            <a 
                                className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700" 
                                href="#hero" 
                                onClick={() => onMenuNavigate("#hero")}
                            >
                                Home
                            </a>
                            <a 
                                className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700" 
                                href="#experience" 
                                onClick={() => onMenuNavigate("#experience")}
                            >
                                Experience
                            </a>
                            <a 
                                className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700" 
                                href="#projects" 
                                onClick={() => onMenuNavigate("#projects")}
                            >
                                Projects
                            </a>
                            <a 
                                className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700" 
                                href="#skills" 
                                onClick={() => onMenuNavigate("#skills")}
                            >
                                Skills
                            </a>
                            <a 
                                className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors" 
                                href="#interests" 
                                onClick={() => onMenuNavigate("#interests")}
                            >
                                Future Plans
                            </a> 
                        </motion.div>         
                    )}
                </AnimatePresence>

                <div className="hidden md:flex space-x-15 items-center text-2xl text-white">
                    <a 
                        className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110" 
                        href="#hero"
                    >
                        <FaHome/>
                    </a>
                    <a 
                        className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110" 
                        href="#experience"
                    >
                        <FaBriefcase/>
                    </a>
                    <a className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110" 
                        href="#projects"
                    >
                        <FaLaptopCode/>
                    </a>
                    <a className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110" 
                        href="#skills"
                    >
                        <FaTools/>
                    </a>
                    <a className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110" 
                        href="#interests"
                    >
                        <FaRegLightbulb/>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;