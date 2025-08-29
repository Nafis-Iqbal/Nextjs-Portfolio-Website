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
                        description="Had a great time crafting clean, scalable solutions that made clients say 'wow!' 🔥 Turned complex requirements into elegant code while learning from some seriously talented developers."
                    />

                    <ExperienceInfoModule
                        jobTitle="Lead, Unity Game Developer"
                        companyName="Dream Big Games"
                        jobTenure="September 2023 - January 2025"
                        description="Had a great time leading a squad of creative developers to build games that players couldn't put down! 🎮 From concept to launch, we crafted immersive experiences that hit different."
                    />
                </div>
            </div>
        </div>
    );
}

export default Experience;

