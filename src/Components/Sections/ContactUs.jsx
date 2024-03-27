import { Link } from "react-router-dom"
import WorldImage from "../../../public/Images/world.webp"


export default function ContactSection() {

  return (
    <div className="h-[50vh] bg-darkgreen max-md:h-full w-full">


      <div className="flex max-md:flex-col ">
        <LeftSection />
        <RightSection />
      </div>


      <div className="text-white flex justify-center items-center text-4xl max-md:text-2xl">
        Made with ❤️ By Parth Kapoor
      </div>

      <div className="text-white bottom-0">
        copyright © 2024 Parth Kapoor
      </div>


    </div>
  )
}


function LeftSection() {

  return (
    <div className="w-[50vw] h-[30vh] max-md:h-[20vh] max-md:w-full flex flex-col justify-center px-40 max-md:px-2 text-white">
      <div className="text-3xl max-md:text-base font-bold flex items-center ">
        <img src={WorldImage} className="h-10" />
        DeCarbonn
      </div>

      <div className="mt-4">
        Have any Query ?
      </div>

      <form className="text-black">
        <input type="email" placeholder="email@gmail.com" className=" px-4 py-1  rounded focus-visible:outline-none w-[18vw] mt-4 max-md:w-[60vw]" />
        <button type="submit" className="bg-white rounded px-4 py-1 ml-4">
          Send
        </button>
      </form>
    </div>
  )
}

function RightSection() {


  return (
    <div className="w-[50vw] h-[30vh] max-md:h-[20vh] flex justify-center px-40 text-white gap-8 mt-12 text-lg max-md:text-base">

      <div className="">
        <p className="font-bold mb-2">
          SOCIAL
        </p>

        <div className="flex flex-col">
          <Link>
            LinkedIn
          </Link>

          <Link>
            Instagram
          </Link>

          <Link>
            Twitter
          </Link>
        </div>
      </div>

      <div className="flex flex-col">

        <p className="font-bold mb-2">
          COMPANY
        </p>

        <div className="flex flex-col">
          <Link>
            Home
          </Link>

          <Link>
            Project
          </Link>

          <Link>
            About
          </Link>
        </div>
      </div>

      <div className="">

        <p className="font-bold mb-2">
          INITIATIVES
        </p>

        <div className="flex flex-col">
          <Link>
            Maiti Labs
          </Link>

          <Link>
            DeCarbonn
          </Link>

          <Link>
            GreeenBit
          </Link>
        </div>


      </div>
    </div>
  )


}