"use client";

import { useState } from "react";
import { ChevronDown, Code, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

import BasicButton from "@/components/structural-elements/Buttons";

interface skillInfoProp {
    skillTitle: string;
    skillCategory: string;
    relevantTechsLearned: string;
    currentlyLearning?: string;
    briefDescription: string;
    backGroundImage?: string;
}

const SkillInfoModule = ({
    skillTitle, 
    skillCategory, 
    relevantTechsLearned, 
    currentlyLearning, 
    briefDescription,
    backGroundImage
} : skillInfoProp) => {
    const [isInfoExpanded, setIsInfoExpanded] = useState<boolean>(false);

    const onDropDownClicked = () => {
        setIsInfoExpanded(!isInfoExpanded);
    }

    const techArray = relevantTechsLearned.split(', ');
    const learningArray = currentlyLearning && currentlyLearning !== "None" ? currentlyLearning.split(', ') : [];

    return (
        <motion.div 
            className="relative bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-emerald-500/50 
                transition-all duration-300 shadow-lg hover:shadow-emerald-500/10 h-full flex flex-col overflow-hidden"
            onClick={onDropDownClicked}
            whileHover="hover"
            initial="initial"
        >
            {/* Background Image */}
            {backGroundImage && (
                <motion.div 
                    className="absolute inset-0 rounded-lg overflow-hidden"
                    variants={{
                        initial: { scale: 1 },
                        hover: { scale: 1.2 }
                    }}
                    transition={{ 
                        duration: 0.3, 
                        ease: "easeInOut" 
                    }}
                >    
                    <Image
                        src={backGroundImage}
                        alt={`${skillTitle} background`}
                        fill
                        className="object-cover opacity-20"
                        style={{
                            objectPosition: 'center',
                        }}
                        priority={false}
                    />
                </motion.div>
            )}
            
            {/* Content Overlay */}
            <div className="relative z-10 h-full flex flex-col">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-2" style={{fontFamily: 'var(--font-fredericka)'}}>
                            {skillTitle}
                        </h3>
                        <p className="text-gray-300 text-lg font-medium mb-3">{skillCategory}</p>
                    </div>

                    <BasicButton 
                        onClick={() => {}}
                        buttonColor="bg-emerald-600 hover:bg-emerald-500" 
                        buttonHoverColor="" 
                        extraStyle={`rounded-full p-2 transition-all duration-300 flex-shrink-0 ${
                            isInfoExpanded ? 'ring-2 ring-emerald-500 ring-offset-2 ring-offset-black' : ''
                        }`}
                    >
                        <ChevronDown 
                            size={20} 
                            className={`transition-transform duration-300 text-white ${isInfoExpanded ? 'rotate-180' : ''}`}
                        />
                    </BasicButton>
                </div>

                {/* Technologies */}
                <div className="mb-4">
                    <div className="flex items-center gap-2 mb-3">
                        <Code size={16} className="text-emerald-400" />
                        <h5 className="text-emerald-400 font-semibold text-sm">Technologies & Tools:</h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {techArray.map((tech, index) => (
                            <span 
                                key={index} 
                                className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-xs rounded-full border border-emerald-700/50"
                            >
                                {tech.trim()}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Currently Learning */}
                {learningArray.length > 0 && (
                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-3">
                            <BookOpen size={16} className="text-blue-400" />
                            <h5 className="text-blue-400 font-semibold text-sm">Currently Learning:</h5>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {learningArray.map((tech, index) => (
                                <span 
                                    key={index} 
                                    className="px-3 py-1 bg-blue-900/30 text-blue-300 text-xs rounded-full border border-blue-700/50"
                                >
                                    {tech.trim()}
                                </span>
                            ))}
                        </div>
                    </div>
                )}

                {/* Expandable Description */}
                <AnimatePresence>
                    {isInfoExpanded && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ 
                                duration: 0.3, 
                                ease: "easeInOut",
                                opacity: { duration: 0.2 }
                            }}
                            className="overflow-hidden flex-grow"
                        >
                            <div className="border-t border-gray-700 pt-4">
                                <p className="text-gray-300 leading-relaxed">
                                    {briefDescription}
                                </p>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.div>
    );
}

export default SkillInfoModule;