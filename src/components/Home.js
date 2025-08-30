import React, { useState } from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Button, Icon } from "semantic-ui-react";
import { motion } from "framer-motion";
import Qualification from "./Qualification";
import AboutMe from "./AboutMe";

const Home = ({
  projectRef,
  scrollToSection,
  ExperienceRef,
  SkillsRef,
  CertificateRef,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);
  const [showParagraphs, setShowParagraphs] = useState([false, false, false]);

  const email = "sid15shinde@gmail.com";
  const subject = "Subject";
  const body = "type";
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;

  const [text] = useTypewriter({
    words: [
      "hii,",
      "I am Siddharth Shinde",
      "I'm a Full Stack Developer",
      "with a knack for the MERN stack.",
      "From crafting sleek front-ends to robust back-ends,",
      "I turn ideas into interactive web experiences.",
      "Dive in to see my creations in action",
    ],
    loop: true, 
  });

  const handleClickMore = () => {
    setShowMore(!showMore); // Corrected logic
    setRotation((prev) => prev + 45);

    if (!showMore) {
      setShowParagraphs([false, false, false]);
      setTimeout(() => setShowParagraphs([true, false, false]), 500);
      setTimeout(() => setShowParagraphs([true, true, false]), 600);
      setTimeout(() => setShowParagraphs([true, true, true]), 700);
    } else {
      setShowParagraphs([false, false, false]);
    }
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <section className="font-mono bg-img p-10 bg-neutral-950 w-full text-white bg-gradient-to-r from-neutral-950 to-neutral-500 h-8/12">
      <div
        className=" h-24 flex flex-col md:flex-row md:space-x-10"
        id="nav-component"
      >
        <div className="absolute ListNav" onClick={toggleMenu}>
          <Icon name="list" size="big" />
        </div>

        <div
          className={`${
            openMenu ? "flex flex-col md:flex-row w-1/5 " : "hidden md:flex md:block"
          }`}
        >
          <span className="flex flex-row md:mt-2 mt-10">
            <a
              href={mailtoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white"
            >
              <Icon
                name="mail"
                size="big"
                color="white"
                className="hover:underline underline-offset-8"
              />
            </a>
          </span>
          <span className="flex flex-row mt-2">
            <a
              href="https://www.linkedin.com/in/siddharth-shinde-17a758222"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="linkedin"
                size="big"
                color="blue"
                className="hover:underline underline-offset-8"
              />
            </a>
          </span>
          <span className="flex flex-row mt-2">
            <a
              href="https://github.com/sid1514"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon
                name="github"
                size="big"
                color="purple"
                className="hover:underline underline-offset-8"
              />
            </a>
          </span>
          <span className="resumeBt z-50 flex bg-transparent rounded-full w-1/4 md:h-10 ml-4 mt-10 md:mt-0">
            <Button
              inverted
              color="white"
              href="https://drive.google.com/file/d/16G508DXI0TwdikyYPfxhFKw8pfDtDS_8/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              size="small"
            >
              Resume
            </Button>
          </span>
        </div>

        <div
          className={`${
            openMenu
              ? "EPSbt w-1/3 space-x-4 mt-10 ml-10 md:flex md:ml-0 md:mt-0"
              : "hidden md:flex md:w-1/2 md:space-x-24"
          } mt-0 text-center`}
        >
          <p
            className="text-neutral-200 md:text-2xl hover:underline underline-offset-4 cursor-pointer"
            style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
            onClick={() => scrollToSection(ExperienceRef)}
          >
            Experiences
          </p>
          <p
            className="text-neutral-200 md:text-2xl hover:underline underline-offset-4 cursor-pointer"
            style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
            onClick={() => scrollToSection(projectRef)}
          >
            Projects
          </p>
          <p
            className="text-neutral-200 md:text-2xl hover:underline underline-offset-4 cursor-pointer"
            style={{ textShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)" }}
            onClick={() => scrollToSection(SkillsRef)}
          >
            Skills
          </p>
        </div>

        <div className="fixed right-10 md:w-1/3 text-right justify-center">
          <div onClick={handleClickMore}>
            <Icon
              name="add"
              size="big"
              color="white"
              style={{ transform: `rotate(${rotation}deg)` }}
              className="transform transition-transform duration-500 pr-4"
            />
          </div>
          {showMore && (
            <div className="text-right p-4 flex flex-col cursor-pointer">
              <div
                className={`font-bold font-mono transition-opacity duration-500 ${
                  showParagraphs[0] ? "opacity-100" : "opacity-0"
                }`}
              >
                <AboutMe />
              </div>
              <div
                className={`font-bold font-mono transition-opacity duration-1000 ${
                  showParagraphs[1] ? "opacity-100" : "opacity-0"
                }`}
              >
                <Qualification />
              </div>
              <p
                className={`tracking-wide text-xl font-bold font-mono transition-opacity duration-1500 ${
                  showParagraphs[2] ? "opacity-100" : "opacity-0"
                }`}
                onClick={() => scrollToSection(CertificateRef)}
              >
                Certificates
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="relative justify-center md:w-full text-center flex-col md:flex align-center pt-16 ">
        <div
          className="overflow-hidden bg-gradient-to-r from-neutral-900/25 from-10% md:via-neutral-500 via-neutral-700 via-30% to-neutral-400/25 to-90% rounded-full flex justify-between place-center"
          style={{
            boxShadow: "1px 1px 4px rgba(0, 0, 0, 0.7)",
            alignItems: "center",
          }}
        >
          <motion.img
            src="me.png"
            alt="Sliding"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className="md:mt-0 mt-6 object-cover w-2/3 md:w-1/3"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 2 }}
            className="md:absolute right-[20%] md:top-[44%] bgText bg-neutral-800/25 p-1 md:p-8 rounded-2xl text-3xl h-min"
          >
            <p
              className="bgText bg-neutral-800/25 p-1 md:p-8 rounded-2xl text-2xl flex"
              style={{ textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)" }}
            >
              {text}
              <Cursor />
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
