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
        projectTitle: "Suit Up! E-Commerce",
        projectCategory: "Multi Vendor, E-Commerce Website",
        techStacksUsed: "NextJS, Prisma, MongoDB, Typescript, Tailwindcss, Framer-motion, zod, Full Stack",
        projectLink: "https://nextjs-e-commerce-site-nine.vercel.app/",
        projectStatus: "Production Ready.",
        briefDescription: <>
                <p>A multi vendor e-commerce platform for seamless shopping experiences. Clear and separate user roles for buyers and sellers, with 
                        feature rich admin dashboards.
                </p>
        </>,
        projectImageList: []
    },
    {
        projectTitle: "Stuff Trading Marketplace",
        projectCategory: "Hybrid E-Commerce Website",
        techStacksUsed: "React, Express, NodeJS, Sequelize, MySQL, Typescript, Tailwindcss, Framer-motion, express-validators, Full Stack",
        projectLink: "https://react-stuff-trading-site.vercel.app/",
        projectStatus: "User Ready.",
        briefDescription: <>
                <p>A marketplace that lets you trade treasures, auction items, and discover hidden gems. Create sell posts, place strategic bids, seal trades, 
                        and build your reputation with ratings.
                </p>
        </>,
        projectImageList: []
    },
    {
        projectTitle: "Interactive Task Manager",
        projectCategory: "Task Management Website",
        techStacksUsed: "React, Laravel, Eloquent ORM, MySQL, Typescript, Tailwindcss, Framer-motion, Full Stack",
        projectLink: "https://taskmanagerdemo.vercel.app/",
        projectStatus: "User Ready.",
        briefDescription: <>
                <p>A very basic task manager app to test out and demonstrate the power of react and laravel. Create tasks, organize projects, and throw in notes, 
                        pictures, and todo lists that keep you on track.</p>
        </>,
        projectImageList: []
    },
    {
        projectTitle: "Fables of Time",
        projectCategory: "2d Platformer Action-Adventure RPG Video Game",
        techStacksUsed: "Unity Engine, C#, Spine2D",
        projectVideoLink: "https://ai-chat-demo.vercel.app/",
        projectStatus: "In Development. Beta Ready.",
        briefDescription: <>
                <p>A 2D platformer game with unique, time manipulation mechanics, souls-like combat, and smaller scale metroidvania elements. Big in scope and scale</p>
        </>,
        projectImageList: []
    },
    {
        projectTitle: "Mini Titanfall 2D",
        projectCategory: "2d Platformer Multiplayer Shooter Video Game",
        techStacksUsed: "Unity Engine, C#, Adobe Illustrator, Spine2D",
        projectVideoLink: "https://ai-chat-demo.vercel.app/",
        projectStatus: "In Development. Beta Ready.",
        briefDescription: <>
                <p>A 2D platformer, multiplayer shooter game, similar in mechanics to Mini Militia, but with some unique gameplay elements inspired by Titanfall series. 
                            In addition to controlling a jetpack equipped soldier, players are able to call in and control mechs on the battlefield, and gain an upper hand.</p>
        </>,
        projectImageList: []
    },
    {
        projectTitle: "Portfolio Website",
        projectCategory: "Personal Portfolio",
        techStacksUsed: "Next.js, TypeScript, Tailwind CSS, Framer Motion, Frontend",
        projectLink: "#",
        projectStatus: "Live. Continuously Updated.",
        briefDescription: <>
                <p>You are looking at it! 🎨 A modern, animated portfolio showcasing my work with smooth animations, responsive design, and interactive features. 
                        Built with the latest web technologies for optimal performance and user experience.</p>
        </>,
        projectImageList: []
    },
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
                                                    projectVideoLink={project.projectVideoLink}
                                                    projectStatus={project.projectStatus}
                                                    briefDescription={project.briefDescription}
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
                                                            projectLink={project.projectLink}
                                                            briefDescription={project.briefDescription}
                                                            projectImageList={projectsData[expandedProjectIndex]?.projectImageList ?? []}
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
                                            projectLink={projectsData[expandedProjectIndex].projectLink}
                                            briefDescription={projectsData[expandedProjectIndex].briefDescription}
                                            projectImageList={projectsData[expandedProjectIndex]?.projectImageList ?? []}
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