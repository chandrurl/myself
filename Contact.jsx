import React from "react";
import boy from "./assets/boy.png";

function About() {
  const config = {
    email: "thisischandrul@gmail.com",
    phone: "8531015756",
  };
  return (
    <>
      <section
        className="flex flex-col justify-center py-16 px-10"
        id="contact"
      >
        <div className="flex flex-col items-center">
          <h1 className="text-4xl border-b-2 border-black w-[133px] my-4 font-bold">
            Contact
          </h1>
          <p>If you want to discuss more in details, please contact me.</p>
          <p className="mt-2">
            <span className="font-bold">Email:</span>
            {config.email}
          </p>
          <p>
            <span className="font-bold">Phone:</span>
            {config.phone}
          </p>
        </div>
      </section>
    </>
  );
}

export default About;
