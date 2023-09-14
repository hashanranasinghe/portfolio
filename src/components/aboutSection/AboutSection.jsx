
import { About } from "./About";


function AboutSection() {
  return (
    <div className="container mx-auto " id="contact">
      <div className="flex flex-col items-center gap-3">
      <h1 className="text-blue-700 font-bold text-5xl py-5">
            Contact Me
          </h1>
        <p className="text-black text-center w-screen lg:px-40  md:px-10 sm:px-10 pt-2 text-xl">
          {" "}
          Hello and welcome to my portfolio! I`m Hashan, a Flutter developer
          with over 5 years of experience building high-quality mobile apps for
          a variety of industries.{" "}
        </p>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 py-10">
<About/>
      </div>
    </div>
  );
}

export default AboutSection;