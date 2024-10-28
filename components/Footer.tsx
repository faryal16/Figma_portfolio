
import { IoRemoveOutline } from "react-icons/io5";
const Footer = () => {
  return (
    <div className='container mx-auto flex justify-between items-center px-8 py-8 text-[13px]'>
        <div className="flex items-center text-blue-700 m-8 sm:ml-12 ">CodeWithFairy
        <IoRemoveOutline />
            2024</div>
        <div >
            <ul className="flex gap-12 text-black">
                <li>Linkedin</li>
                <li>github</li>
                <li>Twitter</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer