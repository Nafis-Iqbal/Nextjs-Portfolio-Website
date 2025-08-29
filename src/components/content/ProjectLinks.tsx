"use client";
 
import ProjectInfoModule from "./ProjectInfoModule";
import ProjectDetailModule from "./ProjectDetailModule";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, AnimatePresence } from "framer-motion";
import React from "react";

// Animation configuration
const ANIMATION_DURATION = 0.6; // Control transition speed here
const SPRING_CONFIG = {
    type: "spring" as const,
    damping: 15,
    stiffness: 300,
    mass: 0.8
};

// Hardcoded project data array
const projectsData = [
    {
        projectTitle: "Interactive Task Manager",
        projectCategory: "Task Management Website",
        techStacksUsed: "React, Laravel, MySQL. (Full Stack)",
        projectLink: "https://taskmanagerdemo.vercel.app/",
        projectStatus: "Occasionally Updated. User Ready.",
        briefDescription: "The ultimate productivity powerhouse! 🚀 Create tasks that actually get done, organize projects like a boss, and throw in notes, pictures, and todo lists that keep you on track. It's like having a personal assistant, but cooler.",
        detailDescriptionLink: ""
    },
    {
        projectTitle: "Stuff Trading Marketplace",
        projectCategory: "Hybrid E-Commerce Website",
        techStacksUsed: "React, Express, NodeJS, MySQL. (Full Stack)",
        projectLink: "https://react-stuff-trading-site.vercel.app/",
        projectStatus: "Occasionally Updated. User Ready.",
        briefDescription: "Your stuff deserves a second life! ✨ This marketplace lets you trade treasures, auction items, and discover hidden gems. Create killer sell posts, place strategic bids, seal the deal with trades, and build your reputation with ratings. It's eBay's trendy younger sibling!",
        detailDescriptionLink: ""
    },
    {
        projectTitle: "AI Chat Assistant",
        projectCategory: "Machine Learning Application",
        techStacksUsed: "Python, FastAPI, OpenAI, React. (Full Stack)",
        projectLink: "https://ai-chat-demo.vercel.app/",
        projectStatus: "In Development. Beta Ready.",
        briefDescription: "Meet your new AI buddy! 🤖 This intelligent chat assistant understands context, learns from conversations, and provides helpful responses. Built with cutting-edge AI technology for seamless human-computer interaction.",
        detailDescriptionLink: ""
    },
    {
        projectTitle: "Portfolio Website",
        projectCategory: "Personal Portfolio",
        techStacksUsed: "Next.js, TypeScript, Tailwind CSS, Framer Motion. (Frontend)",
        projectLink: "#",
        projectStatus: "Live. Continuously Updated.",
        briefDescription: "You're looking at it! 🎨 A modern, animated portfolio showcasing my work with smooth animations, responsive design, and interactive features. Built with the latest web technologies for optimal performance and user experience.",
        detailDescriptionLink: ""
    }
];

const ProjectLinks = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isScrollingDown, setIsScrollingDown] = useState(true);
    const [expandedProjectIndex, setExpandedProjectIndex] = useState<number | null>(null);
    const { scrollY } = useScroll();

    useEffect(() => {
        let lastScrollY = scrollY.get();
        
        const unsubscribe = scrollY.on("change", (latest) => {
            setIsScrollingDown(latest > lastScrollY);
            lastScrollY = latest;
        });

        return () => unsubscribe();
    }, [scrollY]);

    const toggleProjectDetails = (index: number) => {
        setExpandedProjectIndex(expandedProjectIndex === index ? null : index);
    };
    return (
        <div 
            ref={containerRef} 
            id="projects" 
            className="flex flex-col w-full bg-black py-16 px-4 md:px-8 overflow-x-hidden"
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
                <div className="flex flex-col gap-8">
                    {/* Create rows of 2 projects each */}
                    {Array.from({ length: Math.ceil(projectsData.length / 2) }, (_, rowIndex) => (
                        <React.Fragment key={rowIndex}>
                            {/* Row of projects */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
                                {projectsData.slice(rowIndex * 2, rowIndex * 2 + 2).map((project, colIndex) => {
                                    const projectIndex = rowIndex * 2 + colIndex;
                                    return (
                                        <React.Fragment key={projectIndex}>
                                            <motion.div
                                                className="h-full"
                                                initial={{ 
                                                    opacity: 0, 
                                                    x: colIndex === 0 ? -100 : 100 
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
                                                    delay: projectIndex * 0.15
                                                }}
                                                viewport={{ margin: "-50px" }}
                                            >
                                                <ProjectInfoModule
                                                    projectTitle={project.projectTitle}
                                                    projectCategory={project.projectCategory}
                                                    techStacksUsed={project.techStacksUsed}
                                                    projectLink={project.projectLink}
                                                    projectStatus={project.projectStatus}
                                                    briefDescription={project.briefDescription}
                                                    detailDescriptionLink={project.detailDescriptionLink}
                                                    onDetailsClick={() => toggleProjectDetails(projectIndex)}
                                                />
                                            </motion.div>

                                            {/* Mobile: Show details directly below each project */}
                                            <AnimatePresence>
                                                {expandedProjectIndex === projectIndex && (
                                                    <motion.div
                                                        className="lg:hidden col-span-1"
                                                        initial={{ height: 0, opacity: 0 }}
                                                        animate={{ height: "auto", opacity: 1 }}
                                                        exit={{ height: 0, opacity: 0 }}
                                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                                    >
                                                        <ProjectDetailModule
                                                            projectTitle={project.projectTitle}
                                                            projectCategory={project.projectCategory}
                                                            techStacksUsed={project.techStacksUsed}
                                                            projectLink={project.projectLink}
                                                            projectStatus={project.projectStatus}
                                                            briefDescription={project.briefDescription}
                                                            detailDescriptionLink={project.detailDescriptionLink}
                                                            onClose={() => setExpandedProjectIndex(null)}
                                                        />
                                                    </motion.div>
                                                )}
                                            </AnimatePresence>
                                        </React.Fragment>
                                    );
                                })}
                            </div>

                            {/* Desktop: Show details below the entire row */}
                            <AnimatePresence>
                                {expandedProjectIndex !== null && 
                                 Math.floor(expandedProjectIndex / 2) === rowIndex && (
                                    <motion.div
                                        className="hidden lg:block"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                    >
                                        <ProjectDetailModule
                                            projectTitle={projectsData[expandedProjectIndex].projectTitle}
                                            projectCategory={projectsData[expandedProjectIndex].projectCategory}
                                            techStacksUsed={projectsData[expandedProjectIndex].techStacksUsed}
                                            projectLink={projectsData[expandedProjectIndex].projectLink}
                                            projectStatus={projectsData[expandedProjectIndex].projectStatus}
                                            briefDescription={projectsData[expandedProjectIndex].briefDescription}
                                            detailDescriptionLink={projectsData[expandedProjectIndex].detailDescriptionLink}
                                            onClose={() => setExpandedProjectIndex(null)}
                                        />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProjectLinks;