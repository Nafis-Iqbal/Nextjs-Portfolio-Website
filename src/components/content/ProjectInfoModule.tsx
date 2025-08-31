"use client";

import { Eye, ExternalLink } from "lucide-react";

import BasicButton from "@/components/structural-elements/Buttons";
import { ReactNode } from "react";

interface projectInfoProp {
    projectTitle: string;
    projectCategory: string;
    techStacksUsed: string;
    projectImageURLs?: string[];
    projectLink?: string;
    projectVideoLink?: string;
    projectStatus: string; 
    briefDescription: ReactNode;
    onDetailsClick?: () => void;
}

const ProjectInfoModule = ({projectTitle, projectCategory, techStacksUsed, projectLink, projectVideoLink, projectStatus, briefDescription, onDetailsClick} : projectInfoProp) => {
    const onDetailDescriptionClicked = () => {
        if (onDetailsClick) {
            onDetailsClick();
        }
    }

    const getStatusColor = (status: string) => {
        if (status.toLowerCase().includes('production') || status.toLowerCase().includes('user ready')) {
            return 'text-emerald-400 border-emerald-400';
        } else if (status.toLowerCase().includes('development')) {
            return 'text-yellow-400 border-yellow-400';
        } else {
            return 'text-blue-400 border-blue-400';
        }
    };

    const techArray = techStacksUsed.split(', ');

    return (
        <div className="bg-gray-800 border border-gray-700 rounded-lg overflow-hidden hover:border-emerald-500/50 transition-all duration-300 shadow-lg hover:shadow-emerald-500/10 h-full flex flex-col">
            {/* Header */}
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold text-emerald-400" style={{fontFamily: 'var(--font-fredericka)'}}>
                                {projectTitle}
                            </h3>
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full border ${getStatusColor(projectStatus)}`}>
                                {projectStatus}
                            </span>
                        </div>
                        
                        <p className="text-gray-300 text-lg font-medium mb-3">{projectCategory}</p>
                        <p className="text-gray-400 leading-relaxed mb-4">{briefDescription}</p>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-4">
                    <h5 className="text-emerald-400 font-semibold mb-2 text-sm">Tech Stack:</h5>
                    <div className="flex flex-wrap gap-2">
                        {techArray.map((tech, index) => (
                            <span 
                                key={index} 
                                className="px-3 py-1 bg-emerald-900/30 text-emerald-300 text-xs rounded-full border border-emerald-700/50"
                            >
                                {tech.trim()}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">
                    {(projectLink || projectVideoLink) && (
                        <a 
                            href={projectLink || projectVideoLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:scale-105"
                        >
                            <ExternalLink size={16} />
                            {projectLink ? " Live Demo" : " Watch Video"}
                        </a>
                    )}
                    
                    <BasicButton 
                        onClick={onDetailDescriptionClicked} 
                        buttonColor="bg-gray-700 hover:bg-gray-600" 
                        buttonHoverColor="" 
                        extraStyle="flex items-center gap-2 px-4 py-2 text-white text-sm font-medium rounded-lg transition-all duration-300"
                    >
                        <Eye size={16} />
                        View Details
                    </BasicButton>
                </div>
            </div>
        </div>
    );
}

export default ProjectInfoModule;