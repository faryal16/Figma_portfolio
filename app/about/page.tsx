import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import img from "@/app/images/about.webp";

function About() {
  return (
    <main className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="container mx-auto min-h-screen flex flex-col sm:flex-row justify-between items-center px-6 py-12">
        {/* Text Section */}
        <div className="sm:w-1/2 w-full text-center sm:text-left mb-8 sm:mb-0">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hi, I&#39;m Faryal Junaid, a Frontend Web Developer.
          </h1>
          <p className="mt-6 text-lg leading-relaxed">
            Hardworking mothers are the unsung heroes of our society. They
            juggle multiple roles and responsibilities, often sacrificing their
            own needs to provide for their families. They work long hours, often
            holding down multiple jobs, and go above and beyond to ensure their
            children are cared for and have a bright future.
          </p>
        </div>

        {/* Image Section */}
        <div className="sm:w-1/2 w-full flex justify-center">
          <Image
            src={img}
            alt="Profile Picture"
            className="w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] rounded-full object-cover"
          />
        </div>
      </div>

      {/* Details Section */}
      <div className="container mx-auto px-6 py-12 space-y-12">
        {/* Main Software */}
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <h3 className="text-xl font-semibold underline mb-4 sm:mb-0 sm:w-1/4">
            Main Software
          </h3>
          <p className="text-lg sm:w-3/4 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            minus.
          </p>
        </div>

        {/* Main Skills */}
        <div className="flex flex-col sm:flex-row justify-between items-start">
          <h3 className="text-xl font-semibold underline mb-4 sm:mb-0 sm:w-1/4">
            Main Skills
          </h3>
          <p className="text-lg sm:w-3/4 leading-relaxed">
            HTML, CSS, JavaScript, TypeScript, TailwindCSS, React.js.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="w-11/12 mx-auto h-0.5 bg-slate-500" />

      {/* Contact Section */}
      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
        {/* Contact Text */}
        <p className="text-lg lg:text-xl leading-relaxed">
          I am thrilled to collaborate on <br />
          your next project
          <FaArrowRight className="inline-block ml-2 text-gray-800" />
        </p>

        {/* Contact Info */}
        <div className="text-lg lg:text-xl">
          <p>
            <strong>Email: </strong>bintefarzana1992@gmail.com
          </p>
          <p>
            <a
              href="#"
              className="text-blue-500 underline hover:text-blue-700"
            >
              View Resume
            </a>
          </p>
        </div>
      </div>
    </main>
  );
}

export default About;
