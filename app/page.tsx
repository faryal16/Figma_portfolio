import { ProjectCard } from "@/components/ProjectCard";
import { FaArrowDown } from "react-icons/fa";
import project1 from "@/app/images/project1.png"
import project2 from "@/app/images/project2.png"
import project3 from "@/app/images/project3.png"

export default function Work() {
  return (
    <div className="container mx-auto px-16">
   <div className="flex  items-center h-[70vh] gap-28 ">
    <div className="w-[45%]">
      <h1 className="text-6xl font-semibold ">
        Hello, I&#39;m <br /> Faryal Junaid. 
      </h1>
    </div>
    <div className="w-[55%] text-left text-xl mt-16 ">
      <p >A Frontend Developer student who trying to<br/> specialize in web development field.</p>
    </div>
   </div>
   <div className=" mt-10 mb-36">
    <p className="text-5xl font-extrabold">
    <FaArrowDown />
    </p>
   </div>
{/* 1st card */}
<ProjectCard 
cardNo="01"
cardTitle="Winter Update App"
cardParagraph="Weather keeps you informed about conditions including temperature, rain, snow, and wind. "
cardSpan="Check out the forecast by the hour for the next ten days."
cardLink="More shots from this Project  &#x2197;"
cardImage={project1}

/>

<hr className="w-[100%] mx-auto h-0.5 bg-slate-600" />


{/* 1st card */}
<ProjectCard 
cardNo="02"
cardTitle="My Online Delivery App"
cardParagraph="Best delivery app freelance services online. get it quickly done and delivered remotely online. "
cardSpan=""
cardLink="see case study  &#8594;"
cardImage={project2}

/>

<hr className="w-[100%] mx-auto h-0.5 bg-slate-600" />


{/* 1st card */}
<ProjectCard 
cardNo="03"
cardTitle="GIAIC AdmitCard"
cardParagraph="Generate Admit Card made by CodeWithFairy. "
cardSpan=""
cardLink="Project WIP"
cardImage={project3}

/>

<hr className="w-[100%] mx-auto h-0.5 bg-slate-600 mb-28" />
   </div> 
  );
}
