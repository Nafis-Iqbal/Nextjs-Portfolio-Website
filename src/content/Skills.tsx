import DivGap from "@/components/UIUtilities";
import SkillInfoModule from "./SkillInfoModule";

const Skills = () => {
    return (
        <div id="skills" className="flex flex-col md:flex-row w-full min-h-[500px] bg-gray-200">
            <div className="flex w-full md:w-[40%] md:mt-40 justify-center">
                <p className="w-[80%] text-3xl md:text-4xl" style={{fontFamily: 'var(--font-fredericka)'}}>Skills</p>
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

