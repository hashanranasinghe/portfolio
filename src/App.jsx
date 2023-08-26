import Header from "./components/heroSection/Header";
import "./App.css";
import ServiceSection from "./components/services/ServiceSection";
import ProjectSection from "./components/projects/ProjectSection";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Header />

      <ServiceSection/>
      <ProjectSection/>
      <Footer/>
    </div>
  )
}

export default App;
