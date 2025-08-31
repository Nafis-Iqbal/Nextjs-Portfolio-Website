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
    imageText: <p>Hello there!😄👨‍💻 <br/><br/> I&apos;m Nafis!</p>,
  },
  {
    imageURL: "/CoverPhotos/FoTCover.jpg",
    imageAlt: "Nafis laughing",
    imageText: <p>Fables of Time...<br/><br/> The game I hope to finish before I forget how to code 🎮🕰️🥴</p>,
  },
  {
    imageURL: "/CoverPhotos/WebDevImage.PNG",
    imageAlt: "Coding at night",
    imageText: <p>Late night coding session ...<br/><br/>fueled by coffee and ambition ☕🌙</p>,
  },
  {
    imageURL: "/CoverPhotos/LifePerahin.jpg",
    imageAlt: "Bonding with Nature",
    imageText: <p>Bonding with nature 🌳🦌...<br/><br/>A pause between endless deadlines ⏳💻</p>,
    imageStyle: "object-contain",
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
