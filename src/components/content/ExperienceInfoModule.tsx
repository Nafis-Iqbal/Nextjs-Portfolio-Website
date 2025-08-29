"use client";

import { useState, ReactNode } from "react";
import { ChevronDown, Calendar } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import BasicButton from "@/components/structural-elements/Buttons";

interface ExperienceInfoProps {
    jobTitle: string;
    companyName: string;
    jobTenure: string;
    jobLocation?: string;
    description: ReactNode;
}

const ExperienceInfoModule = ({jobTitle, companyName, jobTenure, jobLocation, description} : ExperienceInfoProps) => {
    const [isInfoExpanded, setIsInfoExpanded] = useState<boolean>(false);

    const onDropDownClicked = () => {
        setIsInfoExpanded(!isInfoExpanded);
    }
    
    return (
        <div 
            className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-emerald-500/50 
                transition-all duration-300 shadow-lg hover:shadow-emerald-500/10"
            onClick={onDropDownClicked} 
        >
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-emerald-400 mb-2" style={{fontFamily: 'var(--font-fredericka)'}}>
                        {jobTitle}
                    </h3>
                    <h4 className="text-lg font-semibold text-white mb-2">{companyName}</h4>
                    
                    <div className="flex flex-col md:flex-row md:items-center gap-2 text-gray-400 text-sm mb-3">
                        <div className="flex items-center gap-1">
                            <Calendar size={16} />
                            <span>{jobTenure}</span>
                        </div>
                        {jobLocation && (
                            <span>{jobLocation}</span>
                        )}
                    </div>
                </div>

                <BasicButton 
                    onClick={() => {}}
                    buttonColor="bg-emerald-600 hover:bg-emerald-500" 
                    buttonHoverColor="" 
                    extraStyle={`rounded-full p-2 transition-all duration-300 ${
                        isInfoExpanded ? 'ring-2 ring-emerald-500 ring-offset-2 ring-offset-black' : ''
                    }`}
                >
                    <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-300 text-white ${isInfoExpanded ? 'rotate-180' : ''}`}
                    />
                </BasicButton>
            </div>
            
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
                        className="overflow-hidden mt-4"
                    >
                        <div className="border-t border-gray-700 pt-4">
                            <div className="text-gray-300">{description}</div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default ExperienceInfoModule;