import Button from "../Button"

export default function SingleProject({ item }) {


  return (

    <div className="mb-10 flex justify-center gap-12 max-md:flex-col">
      {item.position == "left" && (
        <>
          <DataSection item={item} />
          <ImageSection Image={item.image} />
        </>
      )}

      {item.position == "right" && (
        <>
          <ImageSection Image={item.image} />
          <DataSection item={item} />
        </>
      )}

    </div>

  )
}


function DataSection({ item }) {


  return (
    <div className="flex flex-col text-xl w-[30vw] max-md:w-[90vw] ">
      <div className="font-bold text-3xl mb-6">
        {item.title}
      </div>

      <div className="">
        {item.description}
      </div>

      <div className="flex justify-end py-2">
        <Button data={item.buttonName} className=" w-fit mt-6 bg-darkgreen text-white px-8 py-2 rounded" />
      </div>

    </div>
  )

}

function ImageSection({ Image }) {

  return (
    <img src={Image} className="rounded h-[30vh] w-[30vw] max-md:w-[90vw] object-cover bg-top" />

  )

}