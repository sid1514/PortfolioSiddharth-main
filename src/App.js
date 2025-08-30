import { useRef } from "react";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import ContactMe from "./components/ContactMe";
import Certificate from "./components/Certificate";

function App() {
  const projectRef = useRef(null);
  const ExperienceRef = useRef(null);
  const SkillsRef = useRef(null);
  const CertificateRef = useRef(null);
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <Home
        projectRef={projectRef}
        scrollToSection={scrollToSection}
        ExperienceRef={ExperienceRef}
        SkillsRef={SkillsRef}
        CertificateRef={CertificateRef}
      />
      <div className="bg-gradient-to-b from-neutral-950 from-via-neutral-800 to-neutral-700 text-white h-full space-y-16">
        <div className="w-full h-screen overflow-hidden">
          <Projects projectRef={projectRef} className="bg-neutral-900" />
        </div>
        <div className="w-full h-screen overflow-hidden">
          <Experience ExperienceRef={ExperienceRef} />
        </div>
        <div className="w-full h-screen overflow-hidden">
          <Skills SkillsRef={SkillsRef} />
        </div>
        <div className="w-full h-screen overflow-hidden">
          <Certificate CertificateRef={CertificateRef} />
        </div>
        <div className="w-full h-screen overflow-hidden">
          <ContactMe />
        </div>
      </div>
    </>
  );
}

export default App;
