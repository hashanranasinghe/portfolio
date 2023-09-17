import { About } from "./About";

function AboutSection() {
  return (
    <div className="container mx-auto " id="contact">
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-blue-700 font-bold text-5xl py-5">Contact Me</h1>
      </div>
      <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-5 py-10">
        <About />
      </div>
    </div>
  );
}

export default AboutSection;
