import ProjectLinks from "@/components/content/ProjectLinks";
import Skills from "@/components/content/Skills";
import Experience from "@/components/content/Experience";
import InterestPlans from "@/components/content/InterestsPlans";
import { ContactUsModule } from "@/components/modules/ContactUsModule";
import { HeroSection } from "@/components/modules/HeroSection";

const imageList = [
  {
    imageURL: "/CoverPhotos/IMG1.jpeg",
    imageAlt: "Nafis with a jacket",
    imageText: "Nafis with a jacket - suited up and ready to code the future! 💼✨",
  },
  {
    imageURL: "/CoverPhotos/IMG2.jpg",
    imageAlt: "Nafis laughing",
    imageText: "Nafis laughing out loud - because debugging finally worked! 😂🚀",
  },
  {
    imageURL: "/CoverPhotos/IMG3.jpg",
    imageAlt: "Coding at night",
    imageText: "Late night coding session - fueled by coffee and ambition ☕🌙",
  },
  {
    imageURL: "/CoverPhotos/IMG4.jpg",
    imageAlt: "Team brainstorming",
    imageText: "Team brainstorming - ideas flowing and creativity unleashed! 💡🤝",
  },
];

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center w-full">
      <HeroSection
        className="h-[60vh] mt-20"
        imageList={imageList}
      />
      <Experience/>
      <ProjectLinks/>
      <Skills/>
      <InterestPlans/>
      <ContactUsModule/>
    </main>
  ); 
}
