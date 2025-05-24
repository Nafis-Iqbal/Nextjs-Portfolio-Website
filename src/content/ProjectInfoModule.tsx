"use client";

import { Eye } from "lucide-react";

import BasicButton from "@/components/Buttons";

interface projectInfoProp {
    projectTitle: string;
    projectCategory: string;
    techStacksUsed: string;
    projectLink?: string;
    projectStatus: string; 
    briefDescription: string;
    detailDescriptionLink: string;
}

const ProjectInfoModule = ({projectTitle, projectCategory, techStacksUsed, projectLink, projectStatus, briefDescription, detailDescriptionLink} : projectInfoProp) => {
    const onDetailDescriptionClicked = () => {

    }

    return (
        <div className="flex flex-col space-y-2">
            <div className="flex justify-between items-center">
                <div className="flex flex-col bg-red-200">
                    <p className="text-2xl" style={{fontFamily: 'var(--font-fredericka)'}}>{projectTitle}</p>
                    <p className="text-xl">{briefDescription}</p>
                    <p className="text-xl">{projectCategory}</p>
                    <p className="text-lg">{techStacksUsed}</p>

                    <a className="text-lg" href={projectLink} target="_blank" rel="noopener noreferrer">{projectLink}</a>

                    <p className="text-lg">{projectStatus}</p>
                </div>

                <BasicButton onClick={() => onDetailDescriptionClicked()} buttonColor="bg-gray-200" buttonHoverColor="hover:bg-gray-300" extraStyle="rounded-md">
                    <Eye/>
                </BasicButton>
            </div>
        </div>
    );
}

export default ProjectInfoModule;