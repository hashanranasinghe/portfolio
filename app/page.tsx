import HeroSection from "../containers/home-page/HeroSection";
import ProjectsSection from "@/containers/home-page/ProjectsSection";
import SkillsSection from "@/containers/home-page/SkillsSection";
import AboutMe from "@/containers/home-page/AboutMe";
import WorkSection from "@/containers/home-page/WorkSection";
import BlogSection from "@/containers/home-page/BlogSection";
import ContactMe from "@/containers/home-page/ContactMe";
import Footer from "@/containers/home-page/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <AboutMe />
      <WorkSection />
      <BlogSection />
      <ContactMe />
      <Footer />
    </main>
  );
}
