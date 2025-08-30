import React from "react";
import { Icon } from "semantic-ui-react";

const Experience = ({ ExperienceRef }) => {
  const experiences = [
  {
    type: "Internship",
    duration: "31st March to 1 May",
    company: "Metainnovix company, Pune",
    role: "Full Stack Developer",
    responsibilities: [
      "Developed user authentication functionality",
      "Implemented chat functionality for both frontend and backend",
      "Handled APIs of user details"
    ],
    experienceLetter: {url:" https://drive.google.com/file/d/1CMhA27I5roJDVfEZZ10VTv4uZ3dSyDXF/view?usp=sharing",letter:'Experience letter' }
    },
     {
    type: "Working Experience",
    duration: "October to current",
    company: "Sankey solutions, Thane",
    role: "Solution analyst",
    responsibilities: [
      "Working as frontend developer",
      "Integrate with backend services",
      "developed individual components and shared components",
      "involved in solution building and implementation"
    ],
    experienceLetter: {url:"https://drive.google.com/file/d/1khLJ_Ih74poc66ye135diy3l_8cVxfbw/view?usp=sharing",letter:'Offer letter' }
    },
  ]
  return (
    <div
      className="text-white h-max flex flex-col align-center justify-center mt-16 w-full"
      ref={ExperienceRef}
    >
      <h3 className="md:ml-20 ml-6 underline underline-offset-4 font-mono md:text-2xl text-xl text-sky-400/50 mb-10">
        Experience
      </h3>
      <div className="w-full overflow-x-auto m-5 flex justify-center md:text-xl h-min p-4 gap-x-3">
        {

      experiences.map((exp, index) => (
        <div>

          <p className="font-bold underline underline-offset-4 ">
            <Icon name="chevron right" /> {exp.type}
          </p>
          <div className="flex md:text-xl shadow-lg shadow-black/25 space-y-4 space-x-4">
            <ul className="p-5 border border-y-0 border-l-0 border-white/30 ">
              <li> {exp.duration}</li>
              <li>{exp.company}</li>
              <li>{exp.role}</li>
            </ul>
            <ul className="p-4">
              Responsibilities:
             { exp.responsibilities.map((item, idx) => (
                <li key={idx} className="mt-2 list-disc list-inside">
                  {item}
                </li>
              ))}
              <li className="mt-2">
                <a
                  href={exp.experienceLetter.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 {exp.experienceLetter.letter}
                </a>
              </li>
            </ul>
          </div>
      
        </div>
      ))}
      </div>
    </div>
  );
};

export default Experience;
