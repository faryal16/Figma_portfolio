import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

import img from "@/app/images/about.webp"

function about() {
  return (
    <main className=" "> 
     <div className=" container mx-auto h-[100vh] flex justify-between items-center sm:flex-row flex-col">
      <div className="ml-20">
        <div className="w-[250px] flex items-left justify-start ">
      <h1 className=" text-4xl  text-left">
        Hi I&#39;m Faryal Junaid,A Frontend Web Developer.
      </h1>
      </div>
      <div className="w-[350px]  text-2xl font-normal mt-8 ">
      <p className=" ">
        Hardworking mothers are the unsung heroes of our society.
        They juggle multiple roles and responsibilities, often sacrificing
        their own needs to provide for their families.</p>
        <br />
        <p> They work long hours, 
        often holding down multiple jobs, and go above and beyond to make sure 
        their children are cared for and have a bright future.
      </p>
      </div>
    </div>
      <div className="">
    <Image src={ img } alt="Profile Picture" className=" w-[400px] h-[400px] opacity-1 " />
    </div>
</div>
    <div className="ml-32 mt-16 mb-16 w-[35%] flex flex-col sm:flex-row  justify-between items-left ">
        <h3 className="text-xl underline ">
            Main SoftWare
        </h3>
        <p>Lorem ipsum dolor sit amet consectetur<br/> adipisicing elit. Nulla, minus.</p>
    </div>
    
    <div className="w-[35%] ml-32 mt-16 mb-16 flex flex-col sm:flex-row justify-between items-left ">
        <h3 className="text-xl underline">
            Main Skills
        </h3>
        <p>Html,CSS,Javascript,Typescript,coding<br/>TailwindCSS,React.js.</p>
    </div>

    <hr className="w-[88%] mx-auto h-0.5 bg-slate-500 " />
    
    
    <div className="w-[70%] ml-32 mt-16 mb-32  flex justify-between gap-4 sm:justify-between items-center ">
        <p className="text-xl ">
            I am thrilled to answer to <br/>Your next project<FaArrowRight className="mx-40 mt-[-7%] "  />
        </p>
        <p><span className="text-xl">bintefarzana1992@gmail.com</span><br/>View Resume</p>
    </div>
      </main>
  );
}

export default about;
