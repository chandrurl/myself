import React from "react";
import resume from "./assets/resume.jpg";

function Resume() {
  const config = {
    link: "./assets/resume.pdf",
  };
  return (
    <>
      <section
        className="bg-gray-100 flex flex-col md:flex-row px-10 py-16"
        id="resume"
      >
        <div className="md:w-1/2 flex flex-col justify-center">
          <div className="flex justify-center">
            <div>
              <h1 className="text-4xl border-b-2 border-black w-[132px] my-4 font-bold">
                Resume
              </h1>
              <p>You can see my Resume...</p>
              <div className="py-5 px-2">
                <a
                  className="download-btn text-primary bg-primary mt-4"
                  href={config.link}
                  download="resume"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={resume}
            alt=""
            className="py-10 md:w-[400px] md:h-[500px]"
          />
        </div>
      </section>
    </>
  );
}

export default Resume;
