import { Link } from "react-router-dom"
import WorldImage from "../../public/Images/world.webp"
import MenuImage from "../../public/Images/menu.png"
import { useRef, useState } from "react"
import BoolButton from "./BooleanButton";

export default function Navbar() {

  const divRef = useRef();
  const linksRef = useRef();
  const [openLinks, setOpenLinks] = useState(false);


  function handleMouseEnter() {
    divRef.current.style.transform = 'translateX(0%)'
  }

  function handleMouseLeave() {
    divRef.current.style.transform = 'translateX(-100%)'
  }

  function handleLinksOpen() {
    const open = !openLinks;
    setOpenLinks((prev) => !prev);

    if (open) {
      linksRef.current.style.display = 'flex';
      // linksRef.current.style.transform = 'translateY(0%)'

    } else {
      linksRef.current.style.display = 'none';
      // linksRef.current.style.transform = 'translateY(-100%)'
    }
  }

  return (
    <div className="bg-darkgreen text-white max-md:h-[12vh] h-[15vh] w-full flex justify-around items-center">

      <div className="flex items-center z-20">
        <img src={WorldImage} className="h-12" />
        <p className="font-bold text-3xl">
          DeCarbonn
        </p>
      </div>

      <button className="hidden max-md:flex" onClick={handleLinksOpen}>
        {/* <BoolButton /> */}
        <img src={MenuImage} className="inset-1 h-6" />
      </button>

      <div className="flex justify-between items-center gap-12 duration-500 max-md:navbar " ref={linksRef}>

        <a href="/#home" className="hover:translate-y-[-40%] hover:scale-105 duration-300 ">
          Home
        </a>

        <a href="/#projects" className="hover:translate-y-[-40%] duration-300 hover:scale-105">
          Project
        </a>

        <a href='/#aboutus' className="hover:translate-y-[-40%] duration-300 hover:scale-105 ">
          About
        </a>

        <Link to='https://github.com/parthkapoor-dev' target="blank" className="bg-white text-darkgreen rounded-lg font-bold overflow-hidden flex h-10 w-28 box-border" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <div ref={divRef} className="duration-500 w-full flex translate-x-[-100%]">
            <div className="py-2 px-4 w-full box-border">
              CONNECT→
            </div>
            <div className="py-2 px-4 w-full box-border">
              CONNECT→
            </div>
          </div>
        </Link>

      </div>

    </div>
  )
}