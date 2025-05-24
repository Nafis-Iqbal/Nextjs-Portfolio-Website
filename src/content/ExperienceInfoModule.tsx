"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import BasicButton from "@/components/Buttons";

const ExperienceInfoModule = ({jobTitle, companyName, jobTenure, jobLocation, description} : {jobTitle: string, companyName: string, jobTenure: string, jobLocation?: string, description: string}) => {
    const [isInfoExpanded, setIsInfoExpanded] = useState<boolean>(false);

    const onDropDownClicked = () => {
        setIsInfoExpanded(!isInfoExpanded);
    }
    
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
                <div className="flex flex-col bg-red-200">
                    <p className="text-2xl" style={{fontFamily: 'var(--font-fredericka)'}}>{jobTitle}</p>
                    <p className="text-xl">{companyName}</p>
                    <p className="text-lg">{jobTenure}</p>
                    <p className="text-lg">{jobLocation ?? ""}</p>
                </div>

                <BasicButton onClick={() => onDropDownClicked()} buttonColor="bg-gray-200" buttonHoverColor="hover:bg-gray-300" extraStyle="rounded-md">
                    <ChevronDown className={`trasnsition-transform duration-300 ${isInfoExpanded ? 'rotate-180' : ''}`}/>
                </BasicButton>
            </div>
            
            <div className={`overflow-hidden transition-all duration-500 ${isInfoExpanded ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                {description}
            </div>
        </div>
    );
}

export default ExperienceInfoModule;