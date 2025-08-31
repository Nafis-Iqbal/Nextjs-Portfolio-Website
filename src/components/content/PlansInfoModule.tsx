"use client";

import React, { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import BasicButton from "@/components/structural-elements/Buttons";

interface interestsInfoProp {
    interestTitle: string;
    interestCategory: string;
    description: ReactNode;
}

const PlansInfoModule = ({interestTitle, interestCategory, description} : interestsInfoProp) => {
    const [isInfoExpanded, setIsInfoExpanded] = useState<boolean>(false);

    const onDropDownClicked = () => {
        setIsInfoExpanded(!isInfoExpanded);
    }

    // Extract text content from ReactNode for preview
    const getTextContent = (node: ReactNode): string => {
        if (typeof node === 'string') return node;
        if (typeof node === 'number') return node.toString();
        if (React.isValidElement(node)) {
            const element = node as React.ReactElement<{children?: ReactNode}>;
            return React.Children.toArray(element.props.children)
                .map(child => getTextContent(child))
                .join('');
        }
        if (Array.isArray(node)) {
            return node.map(child => getTextContent(child)).join('');
        }
        return '';
    };

    // Create brief preview (first 2 sentences or 150 characters, whichever is shorter)
    const getBriefPreview = (node: ReactNode) => {
        const text = getTextContent(node);
        const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
        if (sentences.length >= 2) {
            return sentences.slice(0, 2).join('. ') + '.';
        }
        return text.length > 150 ? text.substring(0, 150) + '...' : text;
    };

    const briefPreview = getBriefPreview(description);

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

            {/* Description */}
            <div className="text-gray-300 leading-relaxed">
                {isInfoExpanded ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                    >
                        {description}
                    </motion.div>
                ) : (
                    <p>{briefPreview} <span className="text-emerald-500 font-semibold cursor-pointer">Read more...</span></p>
                )}
            </div>
        </div>
    );
}

export default PlansInfoModule;