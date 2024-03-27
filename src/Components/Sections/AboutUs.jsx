import Image1 from "/public/Images/about1.webp"
import Image2 from "/public/Images/about2.webp"
import Image3 from "/public/Images/about3.webp"
import Image4 from "/public/Images/about4.webp"
import Card from "../Card"

export default function AboutUs() {


  const cardData = [
    {
      title: "Precise Tracking",
      description: "We carefully check how much CO₂ is offset by each project, so we can promise you lasting impact.",
      image: Image1,
    },
    {
      title: "Every Dollar Makes a difference",
      description: "Our projects wouldn't happen without your support. With DeCarbonn, your money makes a real impact.",
      image: Image2,

    },
    {
      title: "Internationally Recognized Credits Issuer",
      description: "We make sure all our projects are vetted by Internationally recognized issuers like Verra, Gold Standard, CSI etc",
      image: Image3,

    },
    {
      title: "Regular Updates",
      description: "We get data straight from projects on the ground, so you can track your impact, month by month.",
      image: Image4,
    },
  ]

  return (

    <div className="mb-12 px-10 mt-16" id="aboutus">

      <div className="text-3xl font-bold mb-24 flex items-center justify-center">
        All DeCarbonn projects meet these rigorous criteria:
      </div>
      <div className="flex gap-14
       justify-center items-center max-md:flex-col ">
        {cardData.map(item => (
          <Card item={item} key={item.title} />
        ))}
      </div>
    </div>

  )
}