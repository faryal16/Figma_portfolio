import  Image, { StaticImageData }  from "next/image";


export const ProjectCard = ({cardNo, cardTitle, cardParagraph, cardSpan, cardLink, cardImage} : 
    {cardNo:string, cardTitle:string, cardParagraph:string, cardSpan:string, cardLink:string, cardImage: string | StaticImageData}
)=> {
 
  return (
    <>
    {/* // Project Container */}
    <div className=" flex flex-col lg:flex-row justify-between gap-32 mx-auto lg:my-[110px] my-[55px]">
        <div className="flex flex-col justify-between w-[400px]">
            <div className="flex flex-col gap-5">
                <div className="">
            <h2 className="text-2xl font-bold">{cardNo}/{cardTitle} </h2>
                </div>
                <div>
                    <p className="text-xl font-semibold">{cardParagraph} </p>
                </div>
                <div><span>{cardSpan}</span></div>
            </div>
        <div className=" flex font-bold underline ">
            <p >{cardLink} </p>
            
        </div>
        </div>

    {/* // project Image */}
    <div className="lg:w-[670px] w-[100%] border-2 border-gray-700 ">
<Image src={cardImage}  alt="project1" />
    </div>
 </div>
   </>
  )
}
