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
        interestTitle: "Deep Learning, LLMs, RAGs",
        interestCategory: "Machine Learning, Artificial Intelligence.",
        description: <>
            <p className="mb-4">
                I am focused on developing expertise in creating <span className="text-emerald-400 font-medium">custom AI solutions</span> that address specific business 
                challenges through targeted model development and optimization.
            </p>
            <p className="mb-4">
                My primary interest lies in <span className="text-blue-400 font-medium">fine-tuning large language models</span> and implementing 
                <span className="text-purple-400 font-medium">Retrieval-Augmented Generation (RAG)</span> systems to create domain-specific AI applications that deliver 
                measurable business value.
            </p>
            <p className="mb-4">
                The goal is to bridge the gap between general-purpose AI capabilities and specialized business requirements by developing <span className="text-yellow-400 font-medium">
                intelligent systems</span> that can understand context, process domain-specific data, and provide actionable insights for decision-making processes.
            </p>
            <p>
                This approach involves working with vector databases, embedding techniques, and advanced prompt engineering to create AI solutions that are both technically 
                robust and commercially viable for solving real-world operational challenges.
            </p>
        </>,
    },
    {
        interestTitle: "A 3d multiplayer FPS shooter MVP.",
        interestCategory: "Video Game Industry.",
        description: <>
            <p className="mb-4">
                I have been playing first person shooter games for a long time, and am a big fan of military shooter franchises like Call of Duty, Battlefield etc. I also love
                sci fi genre in movies, books, and games. One game that managed to combine both these elements and left a lasting impression on me is Titanfall 2. The fast paced
                 movement mechanics, the fluid gunplay, & the futuristic yet grounded settings really inspired me to create something similar.
            </p>
            <p className="mb-4">
                I&apos;ve already worked on a 2d multiplayer shooter game that used Photon PUN for multiplayer and Unity. But Photon PUN isn&apos;t best suited for making realtime
                multiplayer games that require server authoritative control and fast responses. Which is why, developing a 3d multiplayer shooter prototype will require me to learn
                a lot of new things like server authoritative multiplayer architecture, client side prediction, lag compensation etc. I&apos;m planning to use Photon Bolt for this 
                project, as it&apos;s best suited for making realtime multiplayer games.
            </p>
            <p className="mb-4">
                I also plan on using and integrating various AI tools in the development pipeline to speed up the process. For example, using AI art generators like Midjourney to create 
                concept art, using MeshyAI to create 3d models, using AI code assistants like GitHub Copilot to speed up coding. I&apos;m definitely not going to do all the tasks myself,
                cause that would be impossibly hard. But the dawn of AI tools has made it possible for small teams and solo developers to create high quality content in a short amount 
                of time, for which I am giving it a shot.
            </p>
        </>,
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

