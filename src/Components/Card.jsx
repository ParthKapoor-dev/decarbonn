
export default function Card({ item }) {

  console.log(item)

  return (
    <div className="h-[40vh] w-[20vw] max-md:w-[80vw] overflow-hidden rounded">
      <div className="h-[40vh] w-[20vw] max-md:w-[80vw] grayscale bg-top bg-cover hover:grayscale-0 hover:scale-110 duration-500"
        style={{ backgroundImage: 'url(' + item.image + ')' }}>
        <div>
        </div>
      </div>

      <div className=" bg-slate-100 px-1 mx-1 z-10 relative bottom-20 font-bold text-xl text-black ">
        {item.title}
      </div>
    </div>
  )
}