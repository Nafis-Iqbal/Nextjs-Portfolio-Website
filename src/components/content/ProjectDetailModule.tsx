import { ReactNode, useEffect, useRef } from "react";
import { ImageViewerModule } from "../modules/ImageViewerModule";

interface ProjectDetailProps {
    projectTitle: string;
    projectLink?: string;
    projectVideoLink?: string;
    briefDescription: ReactNode;
    projectImageList: { imageURL: string; imageAlt?: string; imageStyle?: string }[];
    onClose: () => void;
}

const ProjectDetailModule = ({ 
    projectTitle, 
    projectLink,
    projectVideoLink,
    briefDescription,
    projectImageList,  
    onClose 
}: ProjectDetailProps) => {
    const detailRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Delay scroll to allow Framer Motion animation to complete
        const timer = setTimeout(() => {
            if (detailRef.current) {
                detailRef.current.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'center'
                });
            }
        }, 450); // Slightly longer than the 400ms animation duration

        return () => clearTimeout(timer);
    }, []);

    return (
        <div 
            ref={detailRef}
            className="flex flex-col bg-gray-900 rounded-lg p-4 md:p-6 border border-gray-700 shadow-xl min-h-[600px]"
        >
            <div className="flex items-center mb-6">
                <h3 className="flex-grow ml-10 text-2xl font-bold text-white text-center" style={{fontFamily: 'var(--font-fredericka)'}}>
                    {projectTitle}
                </h3>

                <button 
                    onClick={onClose}
                    className="p-2 bg-gray-800 hover:bg-red-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                    ✕
                </button>
            </div>
            
            <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row md:space-x-5 flex-1">
                <div className="w-full md:w-[50%] h-[400px] md:min-h-[400px] md:h-auto">
                    <ImageViewerModule className="h-full" imageList={projectImageList}/>
                </div>

                <div className="flex flex-col w-full md:w-[50%] gap-4">
                    <div className="bg-gray-800 rounded-lg p-4">
                        <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Description</h4>
                        <p className="text-gray-300 leading-relaxed">{briefDescription}</p>
                    </div>

                    {projectLink && projectLink !== "#" ? (
                        <a 
                            href={projectLink}
                            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🚀 View Live Project
                        </a>
                    ) : (
                        <a 
                            href={projectVideoLink}
                            className="px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            🎥 Watch Video
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModule;
