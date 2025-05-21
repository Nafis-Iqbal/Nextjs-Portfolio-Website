"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import BasicButton from "@/components/Buttons";
import DivGap from "@/components/UIUtilities";


const Experience = () => {
    return (
        <div id="experience" className="flex flex-col md:flex-row w-full min-h-[500px] bg-gray-200">
            <div className="flex w-full md:w-[40%] items-center justify-center">
                <p className="w-[80%] text-3xl md:text-4xl font-ubuntu">Professional Experience</p>
            </div>

            {/* Experiences */}
            <div className="flex flex-col w-full md:w-[60%] bg-red-100">
                <DivGap/>

                <ExperienceInfoModule
                    jobTitle="Software Engineer"
                    companyName="Enosis Solutions"
                    jobTenure="April 2022 - July 2023"
                    description="Had a great time!"
                />

                <DivGap/>

                <ExperienceInfoModule
                    jobTitle="Lead, Unity Game Developer"
                    companyName="Dream Big Games"
                    jobTenure="September 2023 - January 2025"
                    description="Had a great time!"
                />

                <DivGap/>
            </div>
        </div>
    );
}

export default Experience;

const ExperienceInfoModule = ({jobTitle, companyName, jobTenure, jobLocation, description} : {jobTitle: string, companyName: string, jobTenure: string, jobLocation?: string, description: string}) => {
    const [isInfoExpanded, setIsInfoExpanded] = useState<boolean>(false);

    const onDropDownClicked = () => {
        setIsInfoExpanded(!isInfoExpanded);
    }
    
    return (
        <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
                <div className="flex flex-col bg-red-200">
                    <p className="text-2xl">{jobTitle}</p>
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