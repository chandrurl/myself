import React from "react";
import boy from "./assets/boy.png";

function About() {
  const config = {
    line1: `I am Chandru. I completed my schooling at Z.K.M. Higher Secondary
              School in Bodinayakanur and earned my bachelor's degree in
              Mechanical Engineering from Theni Kammavar Sangam College of
              Technology in Theni. I also completed a value-added course in
              Front-End Development at Login360 Software Training Institute in
              Chennai.`,
    line2: `I have 2 years of experience as a Quality Engineer at Tube
              Products of India in Chennai and also I have 2 years of experience
              as a Senior Sales Executive at HDB Financial Services. I am
              currently doing Web Designer at Webrivers. I am seeking a job as a
              React.js Developer and possess skills in HTML5, CSS3, JavaScript,
              React.js, Domain Name System and SEO Marketing.`,
    line3: `In the future, I plan to learn backend development while working.`,
  };
  return (
    <>
      <section
        className="bg-gray-100 flex flex-col md:flex-row px-10 py-16"
        id="about"
      >
        <div className="md:w-1/2 flex justify-center">
          <img src={boy} alt="" className="py-10 md:w-[400px] md:h-[500px]" />
        </div>

        <div className="md:w-1/2 flex justify-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl border-b-2 border-black w-[172px] my-4 font-bold">
              About Me
            </h1>
            <p className="pb-2">{config.line1}</p>
            <p className="pb-2">{config.line2}</p>
            <p>{config.line3}</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
