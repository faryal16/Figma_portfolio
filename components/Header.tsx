import Link from "next/link"


const Header = () => {
  return (
    <nav className="container mx-auto w-full px-8 mt-8 flex justify-between items-center text-[15px]">
    <div className="text-[30px]  ml-8 font-bold sm:ml-12">LOGO.</div>
    <div className="flex items-center gap-2  cursor-pointer sm:gap-8 ">
      <div className="active underline hover:text-2xl"><Link href="/" >Work</Link></div>
      <div className="hover:underline hover:text-2xl"><Link href="/about" >About</Link></div>
      <div className="hover:underline hover:text-2xl">Playground</div>
      <div className="hover:underline hover:text-2xl">Contact</div>
    </div>
   </nav>
  )
}

export default Header