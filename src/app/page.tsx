import HeroSection from "@/content/HeroSection";
import ProjectLinks from "@/content/ProjectLinks";
import Skills from "@/content/Skills";
import Experience from "@/content/Experience";
import InterestPlans from "@/content/InterestsPlans";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full space-y-6 items-center sm:items-start">
      <HeroSection/>

      <Experience/>

      <ProjectLinks/>

      <Skills/>

      <InterestPlans/>
    </main>
  ); 
}
