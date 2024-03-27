export default function Button({ data }) {
  return (
    <div className="bg-white flex items-center justify-center">
      <button className="px-6 py-2 font-medium bg-darkgreen text-white w-fit transition-all shadow-[3px_3px_0px_gray] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
        {data}
      </button>
    </div>
  );
};
