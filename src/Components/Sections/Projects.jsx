import SingleProject from "./SingleProject";
import Image1 from "../../../public/Images/image1.webp"
import Image2 from "../../../public/Images/image2.webp"
import Image3 from "../../../public/Images/image1.webp"


const ProjectData = [
  {
    title: "Calculate your Carbon footprints",
    description: "Use our open source calculator to find out how much CO2 your business emits.",
    buttonName: "calculator",
    image: Image1,
    position: "left"
  },
  {
    title: "Connect With Projects & Invest",
    description: "Choose a project and we'll connect you with the on-ground team before you invest.",
    buttonName: "Projects",
    image: Image2,
    position: "right"
  },
  {
    title: "Earn Credits & Track Your Investments",
    description: "Receive your carbon credits in your wallet and track your investments impact every month.",
    buttonName: "Earn Credits",
    image: Image3,
    position: "left"
  }

]

export default function ProjectSection() {

  return (
    <div className="flex flex-col px-4 gap-10  ">

      {ProjectData.map(item => (
        <SingleProject item={item} />
      ))}

    </div>
  )
}