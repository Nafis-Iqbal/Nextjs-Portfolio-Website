"use client";

import { useState } from "react";
import { ChevronDown, Calendar } from "lucide-react";

import BasicButton from "@/components/structural-elements/Buttons";

const ExperienceInfoModule = ({jobTitle, companyName, jobTenure, jobLocation, description} : {jobTitle: string, companyName: string, jobTenure: string, jobLocation?: string, description: string}) => {
    const [isInfoExpanded, setIsInfoExpanded] = useState<boolean>(false);

    const onDropDownClicked = () => {
        setIsInfoExpanded(!isInfoExpanded);
    }
    
    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10">
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
                    onClick={onDropDownClicked} 
                    buttonColor="bg-emerald-600 hover:bg-emerald-500" 
                    buttonHoverColor="" 
                    extraStyle="rounded-full p-2 transition-all duration-300"
                >
                    <ChevronDown 
                        size={20} 
                        className={`transition-transform duration-300 text-white ${isInfoExpanded ? 'rotate-180' : ''}`}
                    />
                </BasicButton>
            </div>
            
            {/* Expandable Description */}
            <div className={`overflow-hidden transition-all duration-500 ${isInfoExpanded ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300">{description}</p>
                </div>
            </div>
        </div>
    );
}

export default ExperienceInfoModule;