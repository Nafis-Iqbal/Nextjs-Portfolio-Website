"use client";

import DivGap from "@/components/structural-elements/UIUtilities";
import PlansInfoModule from "./PlansInfoModule";
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

const plansData = [
    {
        interestTitle: "Deep Learning, LLMs(Large Language Models)",
        interestCategory: "Machine Learning, Artificial Intelligence.",
        briefDescription: "Machine Learning isn't just the future - it's the present that's already reshaping everything! 🤖 Ever since ChatGPT dropped and started flipping job markets like pancakes, there's no denying that AI is the new electricity. Every business is going AI-crazy, and massive hiring in the AI sector proves it's not just hype - it's the real deal. This isn't just a skill anymore; it's the superpower every tech enthusiast needs to level up their game!",
        detailDescriptionLink: "Had a great time!"
    },
    {
        interestTitle: "A multiplayer FPS shooter MVP project to raise funding.",
        interestCategory: "Video Game Industry.",
        briefDescription: "Gaming isn't just my passion - it's my calling! 🎮 I've got this wild dream of building my own Game Studio and creating the FPS experience that gamers have been waiting for. Picture this: a multiplayer FPS shooter crafted with pure love, sweat, and countless hours of 'just one more match' research. It's not just about making a game; it's about creating a world where FPS legends are born!",
        detailDescriptionLink: "Had a great time!"
    }
];

const InterestPlans = () => {
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
            id="interests" 
            className="flex flex-col w-full min-h-screen bg-black py-16 px-4 md:px-8 overflow-x-hidden"
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
                    Interests & Plans
                </h2>
                <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
            </motion.div>

            {/* Interests Grid */}
            <div className="max-w-4xl mx-auto w-full">
                <div className="space-y-8">
                    {plansData.map((planItem, idx) => (
                        <motion.div
                            key={planItem.interestTitle}
                            className="w-full"
                            initial={{ 
                                opacity: 0, 
                                x: idx % 2 === 0 ? -100 : 100 
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
                                delay: idx * 0.15
                            }}
                            viewport={{ margin: "-50px" }}
                        >
                            <PlansInfoModule {...planItem} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default InterestPlans;

