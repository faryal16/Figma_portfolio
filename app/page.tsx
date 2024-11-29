import { ProjectCard } from "@/components/ProjectCard";
import { FaArrowDown } from "react-icons/fa";
import project1 from "@/app/images/project1.png";
import project2 from "@/app/images/project2.png";
import project3 from "@/app/images/project3.png";

export default function Work() {
  return (
    <div className="container mx-auto px-6 sm:px-12 lg:px-16">
      {/* Intro Section */}
      <div className="flex flex-col md:flex-row items-center justify-between min-h-[50vh] md:min-h-[70vh] gap-12 md:gap-28 py-10">
        {/* Text Section */}
        <div className="w-full md:w-[45%] text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight">
            Hello, I&#39;m <br /> Faryal Junaid.
          </h1>
        </div>

        {/* Paragraph Section */}
        <div className="w-full md:w-[55%] text-lg sm:text-xl text-center md:text-left mt-4 md:mt-0">
          <p>
            A Frontend Developer student who is striving to <br />
            specialize in the web development field.
          </p>
        </div>
      </div>

      {/* Arrow Section */}
      <div className="flex  mt-10 mb-16">
        <p className="text-4xl sm:text-5xl font-extrabold text-gray-800">
          <FaArrowDown />
        </p>
      </div>

      {/* Project Cards Section */}
      <div className="space-y-16">
        {/* First Card */}
        <ProjectCard
          cardNo="01"
          cardTitle="Winter Update App"
          cardParagraph="Weather keeps you informed about conditions including temperature, rain, snow, and wind."
          cardSpan="Check out the forecast by the hour for the next ten days."
          cardLink="More shots from this Project &#x2197;"
          cardImage={project1}
        />

        <hr className="w-full h-0.5 bg-slate-600" />

        {/* Second Card */}
        <ProjectCard
          cardNo="02"
          cardTitle="My Online Delivery App"
          cardParagraph="Best delivery app freelance services online. Get it quickly done and delivered remotely online."
          cardSpan=""
          cardLink="See case study &#8594;"
          cardImage={project2}
        />

        <hr className="w-full h-0.5 bg-slate-600" />

        {/* Third Card */}
        <ProjectCard
          cardNo="03"
          cardTitle="GIAIC AdmitCard"
          cardParagraph="Generate Admit Card made by CodeWithFairy."
          cardSpan=""
          cardLink="Project WIP"
          cardImage={project3}
        />

        <hr className="w-full h-0.5 bg-slate-600 mb-28" />
      </div>
    </div>
  );
}
