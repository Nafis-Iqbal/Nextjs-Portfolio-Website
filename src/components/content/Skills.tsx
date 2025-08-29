"use client";

import DivGap from "@/components/structural-elements/UIUtilities";
import SkillInfoModule from "./SkillInfoModule";
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

const skillData = [
    {
        skillTitle: "React",
        skillCategory: "Frontend Website Development",
        relevantTechsLearned: "React-Router-Dom, React-Redux, React-Query, Lucide-React, Framer-Motion",
        briefDescription: "React is my frontend playground! 🚀 Building interactive UIs that users actually love to click around. From smooth state management to buttery animations, I craft digital experiences that make browsers sing."
    },
    {
        skillTitle: "ExpressJS",
        skillCategory: "Backend Website Development",
        relevantTechsLearned: "Sequelize, Prisma, Zod, Helmet, express-validator, jwtToken",
        currentlyLearning: "TypeORM, Knex",
        briefDescription: "The backbone of my server-side wizardry! ⚡ Express helps me build APIs so clean they could win a design award. Security, validation, database magic - it's all here, baby!"
    },
    {
        skillTitle: "NextJS",
        skillCategory: "Fullstack Website Development with SEO friendly features.",
        relevantTechsLearned: "Sequelize, Prisma, Zod",
        currentlyLearning: "TypeORM, Knex",
        briefDescription: "Next.js is like React's cooler older sibling! 😎 Full-stack development with server-side rendering that makes Google's crawlers happy and users even happier. Performance that hits different!"
    },
    {
        skillTitle: "Laravel",
        skillCategory: "Backend Website Development",
        relevantTechsLearned: "EloquentORM",
        currentlyLearning: "None",
        briefDescription: "PHP done right! 🎯 Laravel's elegant syntax and powerful features make backend development feel like writing poetry. Eloquent ORM makes database relationships smoother than my pickup lines."
    },
    {
        skillTitle: "Unity3D",
        skillCategory: "Video Games Development",
        relevantTechsLearned: "Animator blending, Physics simulation, Shader Graphs, Level Design, VFX Graphs, UI, Multiplayer with Photon PUN",
        currentlyLearning: "Multiplayer with Bolt, IK manipulation with scripts",
        briefDescription: "Where dreams become playable reality! 🎮 Unity is my digital canvas for creating worlds that players get lost in. Physics, shaders, multiplayer chaos - I speak fluent game dev!"
    },
    {
        skillTitle: "Spine",
        skillCategory: "2D Animation",
        relevantTechsLearned: "Animatied complex characters and motions like humanoids, winged dragons, etc.",
        currentlyLearning: "None",
        briefDescription: "Bringing 2D characters to life with style! ✨ From humanoid warriors to majestic dragons, I animate them all with fluid motions that would make Disney jealous. Pure art in motion!"
    }
];

const Skills = () => {
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
        <div ref={containerRef} id="skills" className="flex flex-col w-full min-h-screen bg-black py-16 px-4 md:px-8">
            {/* Section Header */}
            <motion.div 
                className="text-center mb-16"
                initial={{ opacity: 0, y: 50 }}
                whileInView={isScrollingDown ? { opacity: 1, y: 0 } : { opacity: 1, y: 0, transition: { duration: 0 } }}
                transition={SPRING_CONFIG}
                viewport={{ margin: "-50px" }}
            >
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily: 'var(--font-fredericka)'}}>
                    Skills
                </h2>
                <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
            </motion.div>

            {/* Skills Grid */}
            <div className="max-w-6xl mx-auto w-full">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                    {skillData.map((props, idx) => (
                        <motion.div
                            key={props.skillTitle}
                            className="h-full"
                            initial={{ 
                                opacity: 0, 
                                x: idx % 2 === 0 ? -100 : 100 
                            }}
                            whileInView={isScrollingDown ? { 
                                opacity: 1, 
                                x: 0 
                            } : {
                                opacity:1, 
                                x:0,
                                transition: { duration: 0 } 
                            }}
                            transition={{ 
                                ...SPRING_CONFIG,
                                delay: idx * 0.15
                            }}
                            viewport={{ margin: "-50px" }}
                        >
                            <SkillInfoModule {...props} />
                        </motion.div>
                    ))}
                </div>
            </div>

            <DivGap customHeightGap="50px" />
        </div>
    );
}

export default Skills;

