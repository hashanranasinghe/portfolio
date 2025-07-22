import EducationSection from "@/containers/home-page/EducationSection";
import HeroSection from "../containers/home-page/HeroSection";
import GridGallery from "@/containers/home-page/GridGallery";
import { SocialMediaBar } from "@/components/cards/SocialMediaBar";
import AboutMe from "@/containers/home-page/AboutMe";
import TextLineAnimation from "@/components/animation/TextLineAnimation";
import ContactMe from "@/containers/home-page/ContactMe";
import AchievementsSection from "@/containers/home-page/AchievementSection";
import WorkSection from "@/containers/home-page/WorkSection";
import BlogSection from "@/containers/home-page/BlogSection";
import Footer from "@/containers/home-page/Footer";
import ProjectsSection from "@/containers/home-page/ProjectsSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-realWhite scroll-smooth">
      <HeroSection />
      <ProjectsSection />
      <AboutMe />
      <EducationSection />
      <TextLineAnimation />
      <AchievementsSection />
      <GridGallery />
      <WorkSection />
      <SocialMediaBar />
      <BlogSection />
      <ContactMe />
      <Footer />
    </main>
  );
}
