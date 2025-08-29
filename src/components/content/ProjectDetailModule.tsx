interface ProjectDetailProps {
    projectTitle: string;
    projectCategory: string;
    techStacksUsed: string;
    projectLink: string;
    projectStatus: string;
    briefDescription: string;
    detailDescriptionLink: string;
    onClose: () => void;
}

const ProjectDetailModule = ({ 
    projectTitle, 
    projectCategory, 
    techStacksUsed, 
    projectLink, 
    projectStatus, 
    briefDescription, 
    detailDescriptionLink, 
    onClose 
}: ProjectDetailProps) => {
    return (
        <div className="bg-gray-900 rounded-lg p-6 border border-gray-700 shadow-xl">
            <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold text-white" style={{fontFamily: 'var(--font-fredericka)'}}>
                    {projectTitle} - Detailed View
                </h3>
                <button 
                    onClick={onClose}
                    className="p-2 bg-gray-800 hover:bg-red-600 text-white rounded-full transition-all duration-300 hover:scale-110"
                >
                    ✕
                </button>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Technical Details</h4>
                    <div className="bg-gray-800 rounded-lg p-4 mb-4">
                        <p className="text-gray-300">{techStacksUsed}</p>
                    </div>
                    
                    <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Project Status</h4>
                    <div className="bg-gray-800 rounded-lg p-4">
                        <p className="text-gray-300">{projectStatus}</p>
                    </div>
                </div>
                
                <div>
                    <h4 className="text-emerald-400 font-semibold mb-3 text-lg">Full Description</h4>
                    <div className="bg-gray-800 rounded-lg p-4 mb-6">
                        <p className="text-gray-300 leading-relaxed">{briefDescription}</p>
                    </div>
                    
                    <div className="flex flex-wrap gap-4">
                        {projectLink && projectLink !== "#" && (
                            <a 
                                href={projectLink}
                                className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                🚀 View Live Project
                            </a>
                        )}
                        {detailDescriptionLink && (
                            <a 
                                href={detailDescriptionLink}
                                className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-all duration-300 hover:scale-105 font-medium"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                📚 Documentation
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetailModule;
