import DivGap from "@/components/UIUtilities";
import ProjectInfoModule from "./ProjectInfoModule";

const ProjectLinks = () => {
    return (
        <div id="projectLinks" className="flex flex-col md:flex-row w-full min-h-[500px] bg-gray-200">
            <div className="flex w-full md:w-[40%] items-center justify-center">
                <p className="w-[80%] text-3xl md:text-4xl" style={{fontFamily: 'var(--font-fredericka)'}}>Projects & Works</p>
            </div>

            {/* Links */}
            <div className="flex flex-col w-full md:w-[60%] bg-red-100">
                <DivGap/>

                <ProjectInfoModule
                    projectTitle="Interactive Task Manager"
                    projectCategory="Task Management Website"
                    techStacksUsed="React, Laravel, MySQL. (Full Stack)"
                    projectLink="https://taskmanagerdemo.vercel.app/"
                    projectStatus="Occasionally Updated. User Ready."
                    briefDescription="A site where you can create tasks, organized under projects. Add notes, pictures, todo list, etc."
                    detailDescriptionLink=""
                />

                <DivGap/>

                <ProjectInfoModule
                    projectTitle="Stuff Trading Marketplace"
                    projectCategory="Hybrid E-Commerce Website"
                    techStacksUsed="React, Express, NodeJS, MySQL. (Full Stack)"
                    projectLink="https://react-stuff-trading-site.vercel.app/"
                    projectStatus="Occasionally Updated. User Ready."
                    briefDescription="A site where you can exchange your belongings with others or buy things directly. Create sell posts, bid on other people's
                    stuff, make trades, give ratings to sellers, etc."
                    detailDescriptionLink=""
                />

                <DivGap/>
            </div>
        </div>
    );
}

export default ProjectLinks;