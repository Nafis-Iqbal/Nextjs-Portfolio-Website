"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import BasicButton from "@/components/structural-elements/Buttons";

interface interestsInfoProp {
    interestTitle: string;
    interestCategory: string;
    briefDescription: string;
    detailDescriptionLink: string;
}

const PlansInfoModule = ({interestTitle, interestCategory, briefDescription, detailDescriptionLink} : interestsInfoProp) => {
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
            <div className="flex justify-between items-start mb-6">
                <div className="flex-1">
                    <h3 className="text-2xl md:text-3xl font-bold text-emerald-400 mb-3" style={{fontFamily: 'var(--font-fredericka)'}}>
                        {interestTitle}
                    </h3>
                    <p className="text-lg font-semibold text-white mb-4">{interestCategory}</p>
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

            {/* Description Preview */}
            <p className="text-gray-300 leading-relaxed mb-4">
                {briefDescription.substring(0, 150)}...
            </p>

            {/* Expandable Full Description */}
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
                        className="overflow-hidden"
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
    );
}

export default PlansInfoModule;