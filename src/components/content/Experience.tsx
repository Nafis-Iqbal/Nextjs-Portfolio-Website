import ExperienceInfoModule from "./ExperienceInfoModule";
import DivGap from "@/components/structural-elements/UIUtilities";

const Experience = () => {
    return (
        <div id="experience" className="flex flex-col w-full min-h-screen bg-gray-900 py-16 px-4 md:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{fontFamily: 'var(--font-fredericka)'}}>
                    Professional Experience
                </h2>
                <div className="w-24 h-1 bg-emerald-500 mx-auto"></div>
            </div>

            {/* Experience Timeline */}
            <div className="max-w-4xl mx-auto w-full">
                <div className="space-y-12">
                    <ExperienceInfoModule
                        jobTitle="Software Engineer"
                        companyName="Enosis Solutions"
                        jobTenure="April 2022 - July 2023"
                        description={
                            <>
                                    <p className="mb-4">
                                        Collaborated with a team of talented software engineers to develop and maintain a comprehensive <span className="text-emerald-400 font-semibold">Home Inspection Service platform</span> for a USA-based client, delivering solutions across both mobile and web ecosystems.
                                    </p>
                                <p className="mb-4">
                                    <span className="text-green-400 font-medium">Mobile Development:</span> Built cross-platform mobile applications using 
                                    <span className="text-purple-400 font-medium"> Cordova-Ionic framework</span>, ensuring seamless performance on both 
                                    Android and iOS platforms with full responsive design.
                                </p>
                                <p className="mb-4">
                                    <span className="text-green-400 font-medium">Web Development:</span> Architected modern web applications using 
                                    <span className="text-cyan-400 font-medium"> React.js</span> for dynamic frontend experiences and 
                                    <span className="text-red-400 font-medium"> Laravel</span> for robust backend API development.
                                </p>
                                <p>
                                    <span className="text-green-400 font-medium">Full-Stack Impact:</span> Contributed to the entire development lifecycle, 
                                    from database design and API architecture to user interface implementation and deployment strategies.
                                </p>
                            </>
                        }
                    />

                    <ExperienceInfoModule
                        jobTitle="Lead, Unity Game Developer"
                        companyName="Dream Big Games"
                        jobTenure="September 2023 - January 2025"
                        description={
                            <>
                                <p className="mb-4">
                                    Led the development of <span className="text-emerald-400 font-bold">&ldquo;Fables of Time&rdquo;</span> - an immersive 
                                    2D platformer action-adventure RPG built with <span className="text-purple-400 font-medium">Unity Engine</span>.
                                </p>
                                <p className="mb-4">
                                    <span className="text-green-400 font-medium">Team Leadership:</span> Managed a creative team of two artists, 
                                    coordinating project timelines, art direction, and ensuring cohesive visual storytelling throughout the game.
                                </p>
                                <p className="mb-4">
                                    <span className="text-green-400 font-medium">Technical Responsibilities:</span> Handled comprehensive game development 
                                    including gameplay programming, level design architecture, character animation systems, and technical optimization.
                                </p>
                                <p className="mb-4">
                                    <span className="text-green-400 font-medium">Business Development:</span> Spearheaded funding initiatives and 
                                    strategic planning while providing creative art direction to maintain the game&apos;s visual identity.
                                </p>
                                <p>
                                    <span className="text-green-400 font-medium">Growth & Learning:</span> Evolved leadership and technical skills through 
                                    iterative development, team management challenges, and continuous refinement of game development workflows.
                                </p>
                            </>
                        }
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;

