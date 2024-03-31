
export default function Card({ item }) {


  return (
    // <div onMouseLeave={leave} onMouseEnter={handleEnter} className="h-[40vh] w-[20vw] max-md:w-[80vw] overflow-hidden rounded relative z-[-1]" >
    //   {/* <div className="h-[40vh] w-[20vw] max-md:w-[80vw]  bg-top bg-cover hover:blur-sm duration-200"
    //     style={{ backgroundImage: 'url(' + item.image + ')' }}> */}
    //   <div>
    //     <img src={item.image} />
    //   </div>

    //   <div className="relative z-10" ref={divRef}>
    //     <div>
    //       {item.title}
    //     </div>
    //     <div>
    //       {item.description}
    //     </div>
    //   </div>
    //   {/* </div> */}

    // </div>

    <div className="flex flex-col w-72 h-[64vh] max-md:h-full max-md:w-[70vw] rounded-md overflow-hidden shadow-md">
      <div>
        <img src={item.image} className="w-72 max-md:w-[70vw] object-contain" />
      </div>
      <div className="px-4 py-2 font-bold text-lg h-20 max-md:h-full">
        {item.title}
      </div>
      <div className="px-4 py-2">
        {item.description}
      </div>
    </div>
  )
}