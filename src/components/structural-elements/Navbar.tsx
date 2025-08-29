"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import BasicButton from "./Buttons";

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const onMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    const onMenuNavigate = (navigateTo: string) => {
        setIsMenuOpen(false);
    }

    return (
        <div className="fixed top-0 left-0 right-0 z-50 flex items-center px-4 w-full h-[80px] bg-gray-900/95 backdrop-blur-sm border-b border-gray-800" style={{fontFamily: 'var(--font-fredericka)'}}>
            <div className="flex justify-between items-center w-full max-w-6xl mx-auto">
                <div className="text-2xl font-bold text-emerald-400">
                    Nafis Iqbal
                </div>
                
                <BasicButton 
                    buttonColor="bg-emerald-600 hover:bg-emerald-500" 
                    buttonTextColor="text-white" 
                    onClick={() => onMenuToggle()} 
                    extraStyle="md:hidden border border-emerald-500 rounded-lg p-2"
                >
                    {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </BasicButton>

                {isMenuOpen && (
                    <div className="absolute top-full right-4 flex flex-col md:hidden bg-gray-800 border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                        <a className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700" href="#hero" onClick={() => onMenuNavigate("#hero")}>Home</a>
                        <a className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700" href="#experience" onClick={() => onMenuNavigate("#experience")}>Experience</a>
                        <a className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700" href="#projects" onClick={() => onMenuNavigate("#projects")}>Projects</a>
                        <a className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors border-b border-gray-700" href="#skills" onClick={() => onMenuNavigate("#skills")}>Skills</a>
                        <a className="px-4 py-3 text-white hover:bg-emerald-600 transition-colors" href="#interests" onClick={() => onMenuNavigate("#interests")}>Future Plans</a> 
                    </div>         
                )}

                <div className="hidden md:flex space-x-8 items-center text-lg text-white">
                    <a className="hover:text-emerald-400 transition-colors duration-300" href="#hero">Home</a>
                    <a className="hover:text-emerald-400 transition-colors duration-300" href="#experience">Experience</a>
                    <a className="hover:text-emerald-400 transition-colors duration-300" href="#projects">Projects</a>
                    <a className="hover:text-emerald-400 transition-colors duration-300" href="#skills">Skills</a>
                    <a className="hover:text-emerald-400 transition-colors duration-300" href="#interests">Future Plans</a> 
                </div>
            </div>
        </div>
    );
}

export default Navbar;