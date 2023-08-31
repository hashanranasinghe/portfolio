import Header from "./components/heroSection/Header";
import "./App.css";
import ServiceSection from "./components/services/ServiceSection";
import ProjectSection from "./components/projects/ProjectSection";
import Footer from "./components/footer/Footer";
import Layout from "./pages/Layout";
function App() {
  return (
  
      <Layout>
        <Header />
        <ServiceSection />
        <ProjectSection />
        <Footer />
      </Layout>
    
  );
}

export default App;
