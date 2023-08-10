import { useState } from "react";
import Header from "./components/heroSection/Header";
import "./App.css";
import AboutSection from "./components/about/AboutSection";
import ServiceSection from "./components/services/ServiceSection";
import ProjectSection from "./components/projects/ProjectSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="">
      <Header />
      <AboutSection/>
      <ServiceSection/>
      <ProjectSection/>
      <Footer/>
    </div>
  )
}

export default App;
