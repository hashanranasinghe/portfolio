import Header from "./components/heroSection/Header";
import "./App.css";
import AboutSection from "./components/aboutSection/AboutSection";
import ProjectSection from "./components/projectsSection/ProjectSection";
import Footer from "./components/footer/Footer";
import Layout from "./pages/Layout";
import GridGallery from "./components/gallery/GridGallery";

function App() {
  return (
    <>
      <Layout>
        <Header />
        <ProjectSection />
        <AboutSection />
        <GridGallery />
        <Footer />
      </Layout>
    </>
  );
}

export default App;
