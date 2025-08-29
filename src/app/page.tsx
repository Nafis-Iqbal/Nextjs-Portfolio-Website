import HeroSection from "@/components/content/HeroSection";
import ProjectLinks from "@/components/content/ProjectLinks";
import Skills from "@/components/content/Skills";
import Experience from "@/components/content/Experience";
import InterestPlans from "@/components/content/InterestsPlans";
import { ContactUsModule } from "@/components/modules/ContactUsModule";

export default function HomePage() {
  return (
    <main className="flex flex-col justify-center w-full">
      <HeroSection/>
      <Experience/>
      <ProjectLinks/>
      <Skills/>
      <InterestPlans/>
      <ContactUsModule/>
    </main>
  ); 
}
