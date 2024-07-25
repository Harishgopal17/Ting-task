import { shopsectionimages } from "../constants";

export default function Shop() {
  return (
    <>
      <div className="max-container">
        <div className="flex items-center justify-between mx-16 mb-20 relative max-xl:mx-8 max-xl:mb-14">
          <h2 className="text-white font-playfair text-6xl heading-with-line max-lg:text-5xl max-md:text-4xl max-sm:text-2xl">
            The earth seems <br /> pretty pleased!
          </h2>
          <button className="px-12 max-md:px-8 max-sm:px-6 py-3 max-md:py-2 max-sm:py-1 bg-white text-black font-lato text-2xl max-md:text-xl font-light shadow-xl hover:shadow-2xl transition-all duration-200">
            shop now
          </button>
        </div>
        <div className="grid grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-4">
          {shopsectionimages.map((img) => (
            <figure key={img} className="overflow-hidden">
              <img
                src={img}
                alt="shoping_img"
                className="block w-full hover:scale-[1.06] transition-all duration-300"
              />
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
