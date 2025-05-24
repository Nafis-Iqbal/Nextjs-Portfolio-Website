"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import BasicButton from "@/components/Buttons";

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
        <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
                <div className="flex flex-col bg-red-200">
                    <p className="text-2xl" style={{fontFamily: 'var(--font-fredericka)'}}>{interestTitle}</p>
                    <p className="text-xl">{interestCategory}</p>
                </div>

                <BasicButton onClick={() => onDropDownClicked()} buttonColor="bg-gray-200" buttonHoverColor="hover:bg-gray-300" extraStyle="rounded-md">
                    <ChevronDown className={`trasnsition-transform duration-300 ${isInfoExpanded ? 'rotate-180' : ''}`}/>
                </BasicButton>
            </div>

            <div className={`overflow-hidden transition-all duration-500 ${isInfoExpanded ? 'max-h-40 mt-4' : 'max-h-0'}`}>
                {briefDescription}
            </div>
        </div>
    );
}

export default PlansInfoModule;