import React from "react";
import { Icon } from "semantic-ui-react";

const Experience = ({ ExperienceRef }) => {
  return (
    <div
      className="text-white h-max flex flex-col align-center justify-center mt-16"
      ref={ExperienceRef}
    >
      <h3 className="md:ml-20 ml-6 underline underline-offset-4 font-mono md:text-2xl text-xl text-sky-400/50 mb-10">
        Experience
      </h3>
      <div className="m-5 flex justify-center md:text-xl h-min p-4 ">
        <div>
          <p className="font-bold underline underline-offset-4 ">
            <Icon name="chevron right" /> Internship
          </p>
          <div className="flex md:text-xl shadow-lg shadow-black/25 space-y-4 space-x-4">
            <ul className="p-5 border border-y-0 border-l-0 border-white/30 ">
              <li> 31st March to 1 May</li>
              <li>Metainnovix company, pune</li>
              <li>As full stack developer</li>
            </ul>
            <ul className="p-4">
              Responsibilities:
              <li>- Developed user authentication functionality</li>
              <li>
                - Implemented chat functionality for both frontend and backend
              </li>
              <li>- Handled api’s of user details.</li>
              <li className="mt-2">
                <a
                  href=" https://drive.google.com/file/d/1CMhA27I5roJDVfEZZ10VTv4uZ3dSyDXF/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View experience letter
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
