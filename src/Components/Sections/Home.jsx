import { useRef } from "react";
import BgImage from "../../../public/Images/bg2.jpg"
import Button from "../Button"

export default function HomeSection() {

  const containerRef = useRef();
  const screenRef = useRef();

  function handleMouseEnter() {
    screenRef.current.style.transform = 'rotate(45deg) translateY(0%)'
  }

  function handleMouseLeave() {
    screenRef.current.style.transform = 'rotate(45deg) translateY(120%)'

  }

  return (

    <div>

      <div className="mx-10 my-20 flex justify-center items-center flex-col">
        <div className="font-bold flex-col items-center justify-center text-4xl flex gap-2 max-md:text-xl">
          <p>
            DeCarbonn your business by
          </p>
          <p>
            investing in carbon offset projects.
          </p>
        </div>

        <div className="text-slate-700 flex justify-center items-center mt-8 max-md:text-sm">
          We search in India for climate projects with the highest impact
        </div>

        <div className="flex gap-20 mt-8 font-bold max-md:gap-6">
          {/* <button className="px-8 py-2 bg-darkgreen text-white rounded-lg">
            CONNECT
          </button> */}
          <Button data={'CONNECT'} />

          <button className="px-6 py-2 border-2 border-darkgreen text-darkgreen rounded">
            GET IN TOUCH
          </button>
        </div>

        <div className="mt-16">
          <img className="w-[75vw] h-[70vh] max-md:h-[30vh] object-cover rounded-lg" src={BgImage} />
        </div>


        <div className="mt-20 font-bold text-2xl max-md:text-lg max-md:items-center">
          Our goal is to simplify & enhance climate action.
        </div>
      </div>
    </div>
  )
}