import React from "react";

import {
  ModalHeader,
  ModalContent,
  ModalActions,
  Button,
  Modal,
} from "semantic-ui-react";

const Qualification = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={
        <p className="tracking-wide font-bold font-mono text-xl">
          {" "}
          Qualification
        </p>
      }
      size="small"
    >
      <div className="tracking-wide p-4 bg-gradient-to-r from-neutral-900 to-stone-700 text-white h-9/12 overflow-y-auto">
        <div className="m-10">
          <ModalHeader>
            <h3 className="font-bold underline underline-offset-4 pb-2">
              Full stack developer course
            </h3>
          </ModalHeader>
          <p className="text-stone-400">May 2023 to October 2023 </p>
          <ModalContent>
            <ul className="text-stone-400">
              <li>Imarticus learning institute, Bengluru, India</li>
              <li>Full stcak developer</li>
            </ul>
          </ModalContent>
        </div>
        <div class="m-10">
          {" "}
          <ModalHeader>
            <h3 className="font-bold underline underline-offset-4 pb-2">
             Post Graduation
            </h3>
          </ModalHeader>
          <p className="text-stone-400">2023 to 2025</p>
          <ModalContent>
            <ul className="text-stone-400">
              <li>
                Bk Birla College of commerec, arts and scienece, Kalyan, India
              </li>
              <li>Masters of science in Computer science (9.1 cgpa)</li>
            </ul>
          </ModalContent>
        </div>
        <div className="m-10">
          <ModalHeader>
            <h3 className="font-bold underline underline-offset-4 pb-2">
              Graduation
            </h3>
          </ModalHeader>

          <p className="text-stone-400">2020 to 2023</p>
          <ModalContent>
            <ul className="text-stone-400">
              <li>
                Bk Birla College of commerec, arts and scienece, Kalyan, India
              </li>
              <li>
                Bachelolrs of science in information technology (9.4 cgpa)
              </li>
            </ul>
          </ModalContent>
        </div>
        <div className="m-10">
          <ModalHeader>
            {" "}
            <h3 className="font-bold underline underline-offset-4 pb-2">HSC</h3>
          </ModalHeader>
          <p className="text-stone-400">2018 to 2020</p>
          <ModalContent>
            <ul className="text-stone-400">
              <li>
                Bk Birla College of commerec, arts and scienece, Kalyan, India
              </li>
              <li> science (63.56%)</li>
            </ul>
          </ModalContent>
        </div>
        <div className="m-10">
          <ModalHeader>
            <h3 className="font-bold underline underline-offset-4 pb-2">SSC</h3>
          </ModalHeader>
          <p className="text-stone-400">2018</p>
          <ModalContent>
            <ul className="text-stone-400">
              <li>Shakuntala vidyalaya, Titwala , India</li>
              <li> (86.60%)</li>
            </ul>
          </ModalContent>
        </div>
      </div>
      <div className="absolute right-0">
        <ModalActions>
          <Button color="black" onClick={() => setOpen(false)}>
            close
          </Button>
        </ModalActions>
      </div>
    </Modal>
  );
};

export default Qualification;
