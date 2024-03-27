import { useRef, useState } from "react"

export default function FaqCard({ item }) {

  const [open, setOpen] = useState(false);
  const ansRef = useRef();
  const containerRef = useRef();

  function handleOpen() {

    if (!open) {
      ansRef.current.style.transform = 'translateY(0%)';
      containerRef.current.style.height = '100%'
      setOpen(true);
    }
    else {
      ansRef.current.style.transform = 'translateY(-100%)';
      containerRef.current.style.height = '0'
      setOpen(false);
    }

  }

  return (
    <div className="cursor-pointer mb-10" onClick={handleOpen}  >
      <div className="w-[50vw] max-md:w-[90vw] font-bold text-lg flex flex-col  border-2 border-slate-200 px-10 py-4 shadow-lg z-10 bg-white">
        {item.question}
      </div>


      <div className="overflow-hidden h-0 duration-500" ref={containerRef}>
        <div ref={ansRef} className="w-[50vw] max-md:w-[90vw] flex flex-col border-2 border-slate-200 px-10 py-4 shadow-lg duration-500 translate-y-[-100%]">
          {item.answer}
        </div>
      </div>


    </div>
  )


}