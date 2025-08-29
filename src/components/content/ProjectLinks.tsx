"use client";

import DivGap from "@/components/structural-elements/UIUtilities";
import ProjectInfoModule from "./ProjectInfoModule";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll } from "framer-motion";

// Animation configuration
const ANIMATION_DURATION = 0.6; // Control transition speed here
const SPRING_CONFIG = {
    type: "spring" as const,
    damping: 15,
    stiffness: 300,
    mass: 0.8
};

const ProjectLinks = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const { scrollY } = useScroll();

    useEffect(() => {
        let lastScrollY = scrollY.get();
        
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrollingDown(latest > lastScrollY);
            lastScrollY = latest;
        });

        return () => unsubscribe();
    }, [scrollY]);
    return (
        <div 
            ref={containerRef} 
            id="projects" 
            className="flex flex-col w-full bg-gray-900 py-16 px-4 md:px-8 overflow-x-hidden"
        >
            {/* Section Header */}
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={isScrollingDown ? { 
                    opacity: 1, 
                    y: 0 
                } : {
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0 }
                }}
                transition={SPRING_CONFIG}
                viewport={{ margin: "-50px" }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily: 'var(--font-fredericka)'}}>
                    Projects & Works
                </h2>
                <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
            </motion.div>

            {/* Projects Grid */}
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                    <motion.div
                        className="h-full"
                        initial={{ 
                            opacity: 0, 
                            x: -100 
                        }}
                        whileInView={isScrollingDown ? { 
                            opacity: 1, 
                            x: 0 
                        } : {
                            opacity: 1, 
                            x: 0,
                            transition: { duration: 0 }
                        }}
                        transition={{ 
                            ...SPRING_CONFIG,
                            delay: 0
                        }}
                        viewport={{ margin: "-50px" }}
                    >
                        <ProjectInfoModule
                            projectTitle="Interactive Task Manager"
                            projectCategory="Task Management Website"
                            techStacksUsed="React, Laravel, MySQL. (Full Stack)"
                            projectLink="https://taskmanagerdemo.vercel.app/"
                            projectStatus="Occasionally Updated. User Ready."
                            briefDescription="The ultimate productivity powerhouse! 🚀 Create tasks that actually get done, organize projects like a boss, and throw in notes, pictures, and todo lists that keep you on track. It's like having a personal assistant, but cooler."
                            detailDescriptionLink=""
                        />
                    </motion.div>

                    <motion.div
                        className="h-full"
                        initial={{ 
                            opacity: 0, 
                            x: 100 
                        }}
                        whileInView={isScrollingDown ? { 
                            opacity: 1, 
                            x: 0 
                        } : {
                            opacity: 1, 
                            x: 0,
                            transition: { duration: 0 }
                        }}
                        transition={{ 
                            ...SPRING_CONFIG,
                            delay: 0.15
                        }}
                        viewport={{ margin: "-50px" }}
                    >
                        <ProjectInfoModule
                            projectTitle="Stuff Trading Marketplace"
                            projectCategory="Hybrid E-Commerce Website"
                            techStacksUsed="React, Express, NodeJS, MySQL. (Full Stack)"
                            projectLink="https://react-stuff-trading-site.vercel.app/"
                            projectStatus="Occasionally Updated. User Ready."
                            briefDescription="Your stuff deserves a second life! ✨ This marketplace lets you trade treasures, auction items, and discover hidden gems. Create killer sell posts, place strategic bids, seal the deal with trades, and build your reputation with ratings. It's eBay's trendy younger sibling!"
                            detailDescriptionLink=""
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default ProjectLinks;