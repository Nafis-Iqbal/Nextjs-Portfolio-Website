import ExperienceInfoModule from "./ExperienceInfoModule";
import DivGap from "@/components/UIUtilities";

const Experience = () => {
    return (
        <div id="experience" className="flex flex-col md:flex-row w-full min-h-[500px] bg-gray-200">
            <div className="flex w-full md:w-[40%] items-center justify-center">
                <p className="w-[80%] text-3xl md:text-4xl" style={{fontFamily: 'var(--font-fredericka)'}}>Professional Experience</p>
            </div>

            {/* Experiences */}
            <div className="flex flex-col w-full md:w-[60%] bg-red-100">
                <DivGap/>

                <ExperienceInfoModule
                    jobTitle="Software Engineer"
                    companyName="Enosis Solutions"
                    jobTenure="April 2022 - July 2023"
                    description="Had a great time!"
                />

                <DivGap/>

                <ExperienceInfoModule
                    jobTitle="Lead, Unity Game Developer"
                    companyName="Dream Big Games"
                    jobTenure="September 2023 - January 2025"
                    description="Had a great time!"
                />

                <DivGap/>
            </div>
        </div>
    );
}

export default Experience;

