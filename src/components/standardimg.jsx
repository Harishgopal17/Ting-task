import { AiOutlinePlus } from "react-icons/ai";
export function StandardImg({ img, title, children }) {
  return (
    <>
      <img
        src={img}
        alt="img"
        className="block w-full group-hover:scale-[1.02] transform transition-all duration-300"
      />
      <div className="absolute top-5 left-8 max-lg:top-3 max-lg:left-5">
        <div className="font-playfair text-4xl text-[#1f1715] pb-2 max-lg:text-2xl max-xl:pb-0">
          {title}
        </div>
        <div className="description text-[#060000] text-xl max-xl:text-lg max-lg:text-base">
          {children}
        </div>
      </div>
      <div className="absolute bottom-5 right-5 p-2 bg-white rounded-full text-3xl max-lg:text-xl font-bold text-[#00000080] cursor-pointer">
        <AiOutlinePlus />
      </div>
    </>
  );
}
