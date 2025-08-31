"use client";

import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { SiUpwork } from "react-icons/si";

import DivGap, {HorizontalDivider, VerticalDivider} from "./UIUtilities";

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col bg-gray-900 border-t border-gray-800 py-12" style={{fontFamily: 'var(--font-fredericka)'}}>
            <div className="max-w-6xl mx-auto px-4 w-full">
                <div className="flex flex-col md:flex-row gap-12">
                    {/* Contact & Social Section */}
                    <div className="flex flex-col w-full md:w-1/2 justify-center items-center md:items-start space-y-6">
                        <div className="flex space-x-6">
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

                            <a 
                                href="mailto:nafis.iqbal@example.com"
                                className="p-3 bg-gray-800 hover:bg-emerald-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                                aria-label="Send Email"
                            >
                                <Mail size={24} />
                            </a>
                        </div>

                        <div className="text-center md:text-left">
                            <p className="text-gray-400 mb-2">Open for opportunities and collaborations</p>
                            <a 
                                className="text-emerald-400 hover:text-emerald-300 font-semibold text-lg transition-colors" 
                                href="mailto:nafisiqbal10053@gmail.com"
                            >
                                nafisiqbal10053@gmail.com
                            </a>
                        </div>
                    </div>

                    {/* Navigation Section */}
                    <div className="flex flex-col w-full md:w-1/2 items-center md:items-start">
                        <h3 className="text-2xl font-bold text-emerald-400 mb-6">Quick Navigation</h3>
                        
                        <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
                            <a className="text-gray-300 hover:text-emerald-400 transition-colors py-2" href="#hero">Home</a>
                            <a className="text-gray-300 hover:text-emerald-400 transition-colors py-2" href="#experience">Experience</a>
                            <a className="text-gray-300 hover:text-emerald-400 transition-colors py-2" href="#projects">Projects</a>
                            <a className="text-gray-300 hover:text-emerald-400 transition-colors py-2" href="#skills">Skills</a>
                            <a className="text-gray-300 hover:text-emerald-400 transition-colors py-2" href="#interests">Future Plans</a>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-800 mt-12 pt-8 text-center">
                    <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 space-x-0 md:space-x-4 items-center justify-center gap-2 text-gray-400 mb-4">
                        <div className="flex space-x-4 items-center">
                            <span>Made with</span>
                            <Heart size={16} className="text-emerald-400" />
                        </div>
                        
                        <span>using Next.js, TypeScript & Tailwind CSS</span>
                    </div>
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Nafis Iqbal. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;