import photo from "./assets/photo.jpg";
import { FaLinkedin, FaYoutube, FaInstagramSquare } from "react-icons/fa";

function Hero() {
  const config = {
    subtitle: "Front-end Developer",
    social: {
      linkedin: "https://www.linkedin.com/in/chandru-r-100477249/",
      youtube: "javascript:void(0);",
      instagram: "javascript:void(0);",
    },
  };
  return (
    <>
      <section className="flex flex-col md:flex-row py-32 px-32" id="hero">
        <div className="md:w-1/2 flex-col">
          <div className="flex justify-center">
            <h1 className="text-6xl font-hero-font">
              I am <b>Chandru</b>.<p>{config.subtitle}</p>
            </h1>
          </div>

          <div className="text-black social-icons flex justify-center">
            <a target="_blank" href={config.social.linkedin}>
              <FaLinkedin size={36} />
            </a>
            <a href={config.social.youtube}>
              <FaYoutube size={36} />
            </a>
            <a href={config.social.instagram}>
              <FaInstagramSquare size={36} />
            </a>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img src={photo} alt="" className="rounded-full md:size-96" />
        </div>
      </section>
    </>
  );
}

export default Hero;
