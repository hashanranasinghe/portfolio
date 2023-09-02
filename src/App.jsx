import Header from "./components/heroSection/Header";
import "./App.css";
import ServiceSection from "./components/services/ServiceSection";
import ProjectSection from "./components/projects/ProjectSection";
import Footer from "./components/footer/Footer";
import Layout from "./pages/Layout";
import GridGallery from "./components/gallery/GridGallery";

function App() {
  return (
  
      <Layout>
        <Header />
        <ServiceSection />
        <ProjectSection />
      <GridGallery/>
        <Footer />
      </Layout>
    
  );
}

export default App;
