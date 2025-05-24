import DivGap from "@/components/UIUtilities";
import PlansInfoModule from "./PlansInfoModule";

const InterestPlans = () => {
    return (
        <div id="experience" className="flex flex-col md:flex-row w-full min-h-[500px] bg-gray-200">
            <div className="flex w-full md:w-[40%] items-center justify-center">
                <p className="w-[80%] text-3xl md:text-4xl" style={{fontFamily: 'var(--font-fredericka)'}}>Interests & Plans</p>
            </div>

            {/* Plans */}
            <div className="flex flex-col w-full md:w-[60%] bg-red-100">
                <DivGap/>

                <PlansInfoModule
                    interestTitle="Deep Learning, LLMs(Large Language Models)"
                    interestCategory="Machine Learning, Artificial Intelligence."
                    briefDescription="Machine Learning is the future. Or the recent future atleast. After Chatgpt hit the market and started disrupting job markets
                    at large, there is no telling if the software industry is disrupted even more than it already has. With most business turning towards AI, and
                    massive hiring in the AI sector, AI may become a common, must have skill for all tech enthusiasts in the years to come."
                    detailDescriptionLink="Had a great time!"
                />

                <DivGap/>

                <PlansInfoModule
                    interestTitle="A multiplayer FPS shooter MVP project to raise funding."
                    interestCategory="Video Game Industry."
                    briefDescription="Video games has always piqued an interest in my mind, and I've a knack for playing multiplayer FPS games. I always dreamt of
                    having a Game Studio of my own. A multiplayer FPS game, made with love and passion, which would be well recieved by FPS gamers."
                    detailDescriptionLink="Had a great time!"
                />

                <DivGap/>
            </div>
        </div>
    );
}

export default InterestPlans;

