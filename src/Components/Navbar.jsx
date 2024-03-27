import { Link } from "react-router-dom"
import WorldImage from "../../public/Images/world.webp"

export default function Navbar() {

  return (
    <div className="bg-darkgreen text-white max-md:h-[12vh] h-[15vh] w-full flex justify-around items-center">

      <div className="flex items-center">
        <img src={WorldImage} className="h-12" />
        <p className="font-bold text-3xl">
          DeCarbonn
        </p>
      </div>

      <div className="flex justify-between items-center gap-12 max-md:hidden">

        <Link className="hover:translate-y-[-40%] hover:scale-105 duration-300 ">
          Home
        </Link>

        <Link className="hover:translate-y-[-40%] duration-300 hover:scale-105">
          Project
        </Link>

        <Link className="hover:translate-y-[-40%] duration-300 hover:scale-105 ">
          About
        </Link>

        <Link className="bg-white text-darkgreen py-2 px-4 rounded-lg font-bold">
          CONNECT →
        </Link>

      </div>

    </div>
  )
}