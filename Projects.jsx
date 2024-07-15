import React from "react";
import muscle from "./assets/muscle.png";
import portfolio from "./assets/portfolio.png";

function Projects() {
  const config = {
    projects: [
      {
        image: muscle,
        description: `The personalized portfolio is designed by using HTML, Tailwind
                CSS and React js. The different types of tags were used to
                create the page.`,
        link: "javascript:void(0);",
      },
      {
        image: portfolio,
        description: `This is a static website with a member login form. The form
                validates customer details.`,
        link: "javascript:void(0);",
      },
    ],
  };
  return (
    <>
      <section className="flex flex-col justify-center py-16" id="projects">
        <div className="w-full pb-8 flex justify-center">
          <h1 className="text-4xl border-b-2 border-black w-[135px] my-4 font-bold">
            Projects
          </h1>
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center px-10 gap-16">
          {config.projects.map((project) => (
            <div className="relative">
              <img src={project.image} alt="" className="h-[250px] w-[400px]" />
              <div className="absolute left-0 right-0 bottom-0 top-0 bg-black text-primary opacity-0 duration-800 hover:opacity-100">
                <p className="text-center py-6 px-4">{project.description}</p>
                <div className="text-center">
                  <a
                    target="_blank"
                    href={project.link}
                    className="project-btn"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Projects;
