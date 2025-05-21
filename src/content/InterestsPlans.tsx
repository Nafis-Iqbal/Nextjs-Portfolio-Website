"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import BasicButton from "@/components/Buttons";
import DivGap from "@/components/UIUtilities";

const InterestPlans = () => {
    return (
        <div id="experience" className="flex flex-col md:flex-row w-full min-h-[500px] bg-gray-200">
            <div className="flex w-full md:w-[40%] items-center justify-center">
                <p className="w-[80%] text-3xl md:text-4xl font-ubuntu">Interests & Plans</p>
            </div>

            {/* Plans */}
            <div className="flex flex-col w-full md:w-[60%] bg-red-100">
                <DivGap/>

                <PlansInfoModule
                    interestTitle="Deep Learning, LLMs(Large Language Models)"
                    interestCategory="Machine Learning, Artificial Intelligence."
                    briefDescription="Machine Learning is the future. Or the recent future atleast. After Chatgpt hit the market and started disrupting job markets
                    at large, there is no telling if the software industry is disrupted even more than it already has. With most business turning towards AI, and
                    massive hiring in the AI sector, AI may become a common, must have skill for all tech enthusiasts in the years to come."
                    detailDescriptionLink="Had a great time!"
                />

                <DivGap/>

                <PlansInfoModule
                    interestTitle="A multiplayer FPS shooter MVP project to raise funding."
                    interestCategory="Video Game Industry."
                    briefDescription="Video games has always piqued an interest in my mind, and I've a knack for playing multiplayer FPS games. I always dreamt of
                    having a Game Studio of my own. A multiplayer FPS game, made with love and passion, which would be well recieved by FPS gamers."
                    detailDescriptionLink="Had a great time!"
                />

                <DivGap/>
            </div>
        </div>
    );
}

export default InterestPlans;

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
                    <p className="text-2xl">{interestTitle}</p>
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