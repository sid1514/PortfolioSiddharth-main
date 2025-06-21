import React from "react";
import { Icon } from "semantic-ui-react";

const Skills = ({ SkillsRef }) => {
  const skillFontSize = { fontSize: "0.8rem" };
  const skillImage = " w-12 h-8 md:h-10";
  const skillSectionCss =
    " flex justify-center md:h-1/4 md:space-x-4 space-x-2 py-2";
  return (
    <div className=" p-5">
      <h3 className="md:ml-20 underline underline-offset-4 font-mono text-sky-400">
        Skills
      </h3>
      <div
        className="flex w-full justify-center text-center space-y-10 "
        ref={SkillsRef}
      >
        <section className="w-full justify-center">
          <div className=" space-x-10">
            <h4 className="m-auto p-5 w-44 ">Frontend skills</h4>

            <div className={skillSectionCss}>
              <span className="">
                <Icon name="html5" size="big" color="teal" />
                <p style={skillFontSize}>HTML</p>
              </span>
              <span>
                <Icon name="css3 alternate" size="big" color="silver" />
                <p style={skillFontSize}>CSS</p>
              </span>
              <span>
                <Icon name="js square" size="big" color="orange" />
                <p style={skillFontSize}>JAVASCRIPT</p>
              </span>
              <span className="flex flex-col justify-center">
                <img src="reactlogo.png" alt="react" className={skillImage} />
                <label style={skillFontSize}>REACT JS</label>
              </span>
            </div>
          </div>
          <div className=" space-x-10 mt-4">
            <h4 className="p-5 m-auto h-fit w-44">Backend skills</h4>
            <div className={skillSectionCss}>
              <span className="  flex flex-col">
                <img
                  src=" https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000"
                  alt="Mongodb"
                  className={skillImage}
                />
                <label style={skillFontSize}>MONGODB</label>
              </span>

              <span className=" flex flex-col">
                <img
                  src="https://static-00.iconduck.com/assets.00/sql-database-sql-azure-icon-1955x2048-4pmty46t.png"
                  alt="SQL"
                  className={skillImage}
                />
                <labal style={skillFontSize}>SQL</labal>
              </span>
              <span className="flex flex-col">
                <img
                  src="https://img.icons8.com/?size=100&id=2ZOaTclOqD4q&format=png&color=000000"
                  width={40}
                  alt=""
                  className={skillImage}
                />
                <p style={skillFontSize}>EXPRESS JS</p>
              </span>
              <span className="flex flex-col ">
                <Icon name="node js" size="big" />
                <label style={skillFontSize}>NODE JS</label>
              </span>
              <span>
                <img
                  src="https://img.icons8.com/?size=100&id=JAOzEPu9w5iE&format=png&color=000000"
                  width={40}
                  alt="PHP"
                  className={skillImage}
                />
                <p style={skillFontSize}>PHP</p>
              </span>
            </div>
          </div>
          <div className=" flex-grid space-x-10 mt-4">
            <h4 className="p-5 m-auto w-44">version control</h4>
            <div className={skillSectionCss}>
              <span className="flex flex-col ">
                {" "}
                <Icon name="git" size="big" />
                <label style={skillFontSize}>GIT</label>
              </span>
              <span className="flex flex-col">
                {" "}
                <Icon name="github" size="big" />
                <label style={skillFontSize}>GITHUB</label>
              </span>
            </div>
          </div>
          <div className=" flex-grid space-x-10 mt-4">
            <h4 className="p-5 m-auto w-44">Porgramming skills</h4>
            <div className={skillSectionCss}>
              <span>
                <img
                  src="https://img.icons8.com/?size=100&id=5OD485koNIrb&format=png&color=000000"
                  alt="JAVA"
                  className={skillImage}
                />
                <label style={skillFontSize}>JAVA</label>
              </span>
              <span className="flex flex-col ">
                <Icon name="python" size="big" color="yellow" />
                <label style={skillFontSize}>PYTHON</label>
              </span>
              <span>
                <img
                  src="https://img.icons8.com/?size=100&id=40669&format=png&color=000000"
                  alt="C++"
                  className={skillImage}
                />
                <label style={skillFontSize}>C++</label>
              </span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Skills;
