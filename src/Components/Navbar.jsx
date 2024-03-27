import { Link } from "react-router-dom"
import WorldImage from "../../public/Images/world.webp"
import { useRef } from "react"

export default function Navbar() {

  const divRef = useRef();

  function handleMouseEnter() {
    divRef.current.style.transform = 'translateX(0%)'

  }

  function handleMouseLeave() {
    divRef.current.style.transform = 'translateX(-100%)'

  }

  return (
    <div className="bg-darkgreen text-white max-md:h-[12vh] h-[15vh] w-full flex justify-around items-center">

      <div className="flex items-center">
        <img src={WorldImage} className="h-12" />
        <p className="font-bold text-3xl">
          DeCarbonn
        </p>
      </div>

      <div className="flex justify-between items-center gap-12 max-md:hidden">

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