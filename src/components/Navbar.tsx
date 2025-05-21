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
        <div className="relative flex items-center p-1 w-[100%] h-[80px] md:h-[100px] bg-blue-500 bg-opacity-70 font-sans">
            <div className="flex justify-between items-center w-[100%] max-w-5xl mx-auto">
                <div className="text-2xl text-white">
                    Ta Daa!
                </div>
                
                <BasicButton buttonColor="bg-blue-500" buttonTextColor="text-white" onClick={() => onMenuToggle()} extraStyle="md:hidden border border-white">
                    <Menu></Menu>
                </BasicButton>

                {isMenuOpen && (
                    <div className="absolute top-full right-0 flex flex-col md:hidden space-y-1 items-center bg-white opacity-100">
                        <a className="p-2 scroll-smooth border-b-1" href="#experience" onClick={() => onMenuNavigate("#experience")}>Experience</a>
                        <a className="p-2 scroll-smooth border-b-1" href="#projectLinks" onClick={() => onMenuNavigate("#projectLinks")}>Project Links</a>
                        <a className="p-2 scroll-smooth border-b-1" href="#skills" onClick={() => onMenuNavigate("#skills")}>Skills</a>
                        <a className="p-2 scroll-smooth border-b-1" href="#interests" onClick={() => onMenuNavigate("#interests")}>Interests & Plans</a> 
                    </div>         
                )}

                <div className="hidden md:flex space-x-4 items-center text-2xl text-white">
                    <a className="p-2 scroll-smooth" href="#experience">Experience</a>
                    <a className="p-2 scroll-smooth" href="#projectLinks">Project Links</a>
                    <a className="p-2 scroll-smooth" href="#skills">Skills</a>
                    <a className="p-2 scroll-smooth" href="#interests">Interests & Plans</a> 
                </div>
            </div>
        </div>
    );
}

export default Navbar;