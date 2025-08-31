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
        skillTitle: "NextJS",
        skillCategory: "Fullstack Website Development with SEO friendly features.",
        level: "Advanced" as const,
        relevantTechsLearned: "Sequelize, Prisma, Zod, NextAuth",
        currentlyLearning: "TypeORM, Knex",
        briefDescription: <>
            <p>My Go To framework of choice. Rapid fast prototyping and development with minimum friction and a focus on enhancing site SEO capabilities. And
                because NextJs works like a full stack framework with lots of features that a dedicated backend can offer, this is my preferred choice for most web
                projects where time is of the essence, & developers are short in number.</p>
                <br></br>
            <p>With a well built E-Commerce site under my belt, lots of coding hours with react, and a thorough understanding of NextJS basics and principles,
                this is the framework where I feel at home working with.</p>
        </>,
        backGroundImage: "/FrameworkLogos/NextJSLogo.webp"
    },
    {
        skillTitle: "React",
        skillCategory: "Frontend Website Development",
        level: "Advanced" as const,
        relevantTechsLearned: "React-Router-Dom, React-Redux, React-Query, Lucide-React, Framer-Motion",
        briefDescription: <> 
            <p>Hailed as one of the best frontend libraries, React empowers me to create dynamic and responsive user interfaces with ease. Its component-based 
                architecture allows for reusable code, making development faster and more efficient.</p>
                <br/>
            <p>Along with a rich ecosystem of libraries and tools like react-icons, framer-motion, React has become my go-to choice for building modern web applications.</p>
        </>,
        backGroundImage: "/FrameworkLogos/ReactLogo.jpg"
    },
    {
        skillTitle: "ExpressJS",
        skillCategory: "Backend Website Development",
        level: "Advanced" as const,
        relevantTechsLearned: "Sequelize, Prisma, Zod, Helmet, express-validator, jwtToken",
        currentlyLearning: "TypeORM, Knex, PassportJS",
        briefDescription: <>
            <p>Due to it&apos;s unopinionated nature, ExpressJS gives me the flexibility to structure my applications as I see fit. Whether it&apos;s a 
                simple API or a complex web app, Express has the tools I need to get the job done.</p>
                <br/>
            <p>On top of possesing development speed and flexibility, expressJS uses javascript/typescript as it&apos;s language, which is a huge plus for me as a full stack developer.</p>
        </>,
        backGroundImage: "/FrameworkLogos/ExpressJSLogo.png"
    },
    {
        skillTitle: "Laravel",
        skillCategory: "Backend Website Development",
        level: "Intermediate" as const,
        relevantTechsLearned: "EloquentORM",
        currentlyLearning: "Laravel Breeze, Laravel Passport, Laravel Mail",
        briefDescription: <p>I like Laravel for its elegant syntax and powerful features that make backend development a breeze. It&apos;s batteries included approach to 
            development, with a rich set of built-in tools and libraries, allows me to focus on building great applications without getting bogged down in boilerplate code.
            <br/>
            While I prefer using expressJS for backend development, I do enjoy working with Laravel for certain projects, specially when some feature is better suited for it.
        </p>,
        backGroundImage: "/FrameworkLogos/LaravelLogo.webp"
    },
    {
        skillTitle: "Unity3D",
        skillCategory: "Video Games Development",
        level: "Advanced" as const,
        relevantTechsLearned: "Animator blending, Physics simulation, Shader Graphs, Level Design, VFX Graphs, UI, Multiplayer with Photon PUN",
        currentlyLearning: "Multiplayer with Bolt, IK manipulation with scripts",
        briefDescription:<> 
                <p>I&apos;ve been developing games in Unity since 2018, on and off, and have spent countless hours developing, tweaking and implementing my gameplay visions
                    in it. While not so popular among AAA game studios like Unreal, Unity dominates Indie gaming scene as well as AA games market, and is very suitable for 
                    developing games for mobiles and low end PCs.</p>
                <b/> 
                <p>It has a very easy learning curve in comparision, which encouraged me to learn it, and for a developer who knows what he&apos;s doing, high performance
                    games with beautiful visuals can also be made inside Unity.</p>
            </>,
        backGroundImage: "/FrameworkLogos/UnityLogo.jpg"
    },
    {
        skillTitle: "Spine",
        skillCategory: "2D Animation",
        level: "Intermediate" as const,
        relevantTechsLearned: "Animatied complex characters and motions like humanoids, winged dragons",
        currentlyLearning: "None",
        briefDescription: <>
            <p>Bringing 2D characters to life with style! ✨ From humanoid warriors to majestic dragons, I can animate them all with fluid motions.</p>
        </>,
        backGroundImage: "/FrameworkLogos/SpineLogo.png"
    },
    {
        skillTitle: "AI Coding Assistant Tools",
        skillCategory: "AI Tools",
        level: "Intermediate" as const,
        relevantTechsLearned: "Github Copilot, Prompting",
        currentlyLearning: "Gemini CLI, Github Coding Agent",
        briefDescription: <>
            <p>Since AI boom of 2022 and the introduction of ChatGPT, AI coding assistants have become an essential tool for developers, streamlining workflows and enhancing 
                productivity. Anyone who doesn&apos;t utilize these tools is at a huge disadvantage in today&apos;s competitive development landscape. Which is why I always try to 
                keep myself updated with the latest advancements in AI tools for development.
            </p>
            <br/>
            <p>I&apos;m fairly rehearsed in using GitHub Copilot for both my frontend and backend coding tasks, and often use ChatGPT for brainstorming and problem-solving.</p>
        </>,
        backGroundImage: "/FrameworkLogos/AIToolsLogo.jpeg"
    },
    {
        skillTitle: "Dev Ops Tools",
        skillCategory: "Dev Ops",
        level: "Beginner" as const,
        relevantTechsLearned: "Git, Heroku Deployments, Vercel",
        currentlyLearning: "Github Actions, Docker, Grafana, AWS",
        briefDescription: <>
            <p>In current era of modern software development, DevOps practices are essential for delivering high-quality applications quickly and efficiently. I&apos;m fairly
                new to these tools, but I&apos;m a fast learner, and I&apos;ve figured out deployment challenges by myself in the past without issues.
            </p>
        </>,
        backGroundImage: "/FrameworkLogos/DevopsLogo.png"
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
        <div 
            ref={containerRef} 
            id="skills" 
            className="flex flex-col w-full min-h-screen bg-black py-16 px-4 md:px-8 overflow-x-hidden"
        >
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

