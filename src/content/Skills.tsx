"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import BasicButton from "@/components/Buttons";
import DivGap from "@/components/UIUtilities";

const Skills = () => {
    return (
        <div id="skills" className="flex flex-col md:flex-row w-full min-h-[500px] bg-gray-200">
            <div className="flex w-full md:w-[40%] md:mt-40 justify-center">
                <p className="w-[80%] text-3xl md:text-4xl font-ubuntu">Skills</p>
            </div>

            {/* Bragging */}
            <div className="flex flex-col w-full md:w-[60%] bg-red-100">
                <DivGap/>

                <SkillInfoModule
                    skillTitle="React"
                    skillCategory="Frontend Website Development"
                    relevantTechsLearned="React-Router-Dom, React-Redux, React-Query, Lucide-React, Framer-Motion"
                    briefDescription="Later."
                />

                <DivGap/>

                <SkillInfoModule
                    skillTitle="ExpressJS"
                    skillCategory="Backend Website Development"
                    relevantTechsLearned="Sequelize, Prisma, Zod, Helmet, express-validator, jwtToken"
                    currentlyLearning="TypeORM, Knex"
                    briefDescription="Later."
                />

                <DivGap/>

                <SkillInfoModule
                    skillTitle="NextJS"
                    skillCategory="Fullstack Website Development with SEO friendly features."
                    relevantTechsLearned="Sequelize, Prisma, Zod"
                    currentlyLearning="TypeORM, Knex"
                    briefDescription="Later."
                />

                <DivGap/>

                <SkillInfoModule
                    skillTitle="Laravel"
                    skillCategory="Backend Website Development"
                    relevantTechsLearned="EloquentORM"
                    currentlyLearning="None"
                    briefDescription="Later."
                />

                <DivGap/>

                <SkillInfoModule
                    skillTitle="Unity3D"
                    skillCategory="Video Games Development"
                    relevantTechsLearned="Animator blending, Physics simulation, Shader Graphs, Level Design, VFX Graphs, UI, Multiplayer with Photon PUN"
                    currentlyLearning="Multiplayer with Bolt, IK manipulation with scripts"
                    briefDescription="Later."
                />

                <DivGap/>

                <SkillInfoModule
                    skillTitle="Spine"
                    skillCategory="2D Animation"
                    relevantTechsLearned="Animatied complex characters and motions like humanoids, winged dragons, etc."
                    currentlyLearning="None"
                    briefDescription="Later."
                />

                <DivGap/>
            </div>
        </div>
    );
}

export default Skills;

interface skillInfoProp {
    skillTitle: string;
    skillCategory: string;
    relevantTechsLearned: string;
    currentlyLearning?: string;
    briefDescription: string;
}

const SkillInfoModule = ({skillTitle, skillCategory, relevantTechsLearned, currentlyLearning, briefDescription} : skillInfoProp) => {
    const [isInfoExpanded, setIsInfoExpanded] = useState<boolean>(false);

    const onDropDownClicked = () => {
        setIsInfoExpanded(!isInfoExpanded);
    }

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
                <div className="flex flex-col bg-red-200">
                    <p className="text-2xl">{skillTitle}</p>
                    <p className="text-xl">{skillCategory}</p>
                    <p className="text-xl">{relevantTechsLearned}</p>
                    <p className="text-lg">{currentlyLearning ?? ""}</p>
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