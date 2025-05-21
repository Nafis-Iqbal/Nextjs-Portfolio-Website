"use client";

import SocialLinks from "./SocialIcons";
import { Github, Linkedin } from "lucide-react";

import DivGap, {HorizontalDivider, VerticalDivider} from "./UIUtilities";

const Footer: React.FC = () => {
    return (
        <div className="flex flex-col bg-blue-500 opacity-70">
            <DivGap/>

            <div className="flex flex-col md:flex-row p-1">
                <div className="flex flex-col w-full md:w-[50%] mr-10 items-center md:items-end justify-center space-y-6 border-right">
                    <a
                        href="https://github.com/Nafis-Iqbal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition duration-300"
                    >
                        <Github size={28} />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/nafis-iqbal-79b645213/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-gray-300 transition duration-300"
                    >
                        <Linkedin size={28} />
                    </a>

                    <a className="text-white text-lg" href="mailto:nafis@example.com">Contact Me</a>
                </div>

                <VerticalDivider className="hidden md:block" height="h-[180px]"/>

                <HorizontalDivider className="md:hidden w-[80%] mx-auto"/>

                <div className="flex flex-col w-full md:w-[50%] text-center md:text-start text-lg text-white">
                    <a className="md:ml-10 p-2 scroll-smooth" href="#experience">Experience</a>
                    <a className="md:ml-10 p-2 scroll-smooth" href="#projectLinks">Project Links</a>
                    <a className="md:ml-10 p-2 scroll-smooth" href="#skills">Skills</a>
                    <a className="md:ml-10 p-2 scroll-smooth" href="#interests">Interests & Plans</a> 
                </div>
            </div>

            <DivGap/>
        </div>
    );
}

export default Footer;