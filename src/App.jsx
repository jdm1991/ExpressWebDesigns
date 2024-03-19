import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactPage from "./components/ContactPage";
import ServicePage from "./components/ServicePage";
import PricePage from "./components/PricePage";
import AboutUs from "./components/AboutUs";
import { Routes, Route } from "react-router-dom";
import ProjectPage from "./components/ProjectPage";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/contact"
          element={
            <>
              <Header />
              <ContactPage />
              <Footer />
            </>
          }
        />
        <Route
          path="/about"
          element={
            <>
              <Header />
              <AboutUs />
              <Footer />
            </>
          }
        />
        <Route 
        path="/service"
        element={
          <>
            <Header />
            <ServicePage />
            <Footer />
          </>
        }
        />

        <Route 
        path="/prices"
        element={
          <>
            <Header />
            <PricePage />
            <Footer />
          </>
        }
          />
          <Route
          path="/project"
          element={
            <>
              <Header />
              <ProjectPage />
              <Footer />
            </>
          }

          />
      </Routes>
    </>
  );
}
