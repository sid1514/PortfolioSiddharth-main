import React from "react";
import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Modal,
} from "semantic-ui-react";

const AboutMe = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <div className="bg-transparent">
      <Modal
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        open={open}
        trigger={
          <p className="tracking-wide text-xl font-bold font-mono "> About Me</p>
        }
        size="small"
      >
        <div className="p-10 text-white font-sans bg-gradient-to-r from-neutral-900 to-stone-700">
          <ModalHeader>
            <h3 className="py-6 underline underline-offset-8">About Me</h3>
          </ModalHeader>
          <ModalContent>
            <p className="tracking-wide">
              Hello! I'm <b>Siddharth Santosh Shinde</b> , a passionate and
              skilled Full Stack Developer born on October 15, 2002. With a
              solid foundation in MERN stack technologies and a keen interest in
              building dynamic, user-friendly web applications, I'm always eager
              to learn and take on new challenges.
            </p>
            <p className="tracking-wide">
              I have completed a comprehensive Full Stack Developer course,
              which has equipped me with the technical knowledge and hands-on
              experience needed to excel in the field. Throughout my journey, I
              have worked on several projects that have honed my skills in both
              front-end and back-end development. These projects showcase my
              ability to create robust and scalable web applications. In
              addition to my coursework, I have completed an internship where I
              gained valuable experience in building and managing websites. This
              experience has further solidified my understanding of web
              development best practices and has prepared me to contribute
              effectively to any development team.
            </p>
            <p className="tracking-wide">
              I am currently seeking job opportunities where I can apply my
              skills, grow professionally, and make meaningful contributions to
              innovative projects. If you are looking for a dedicated and
              enthusiastic Full Stack Developer, I would love to connect and
              explore potential opportunities.
            </p>
          </ModalContent>
        </div>
        <div className="absolute right-0">
          <ModalActions>
            <Button color="black" onClick={() => setOpen(false)}>
              close
            </Button>
          </ModalActions>
        </div>
      </Modal>
    </div>
  );
};

export default AboutMe;
