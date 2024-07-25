import standardsectionimg1 from "../assets/standardsection1.jpg";
import standardsectionimg2 from "../assets/standardsection2.jpg";
import standardsectionimg3 from "../assets/standardsection3.jpg";
import { StandardImg } from "../components/standardimg";

export default function Standards() {
  return (
    <>
      <div className="max-container">
        <div className="flex items-start justify-between mx-16 mb-20 relative max-xl:mx-8 max-xl:mb-14">
          <h2 className="text-white font-playfair text-6xl heading-with-line max-lg:text-5xl max-md:text-4xl max-sm:text-[26px]">
            Living up to earth-standard
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 max-sm:mx-3">
          <figure className="overflow-hidden group image-container relative">
            <StandardImg img={standardsectionimg1} title={"Custom Craft"}>
              <>
                Giving a sustainable from <br />
                to your creative vision
              </>
            </StandardImg>
          </figure>
          <figure className="overflow-hidden group image-container relative">
            <StandardImg img={standardsectionimg2} title={"atelier"}>
              <>
                A sustainable production unit to craft
                <br />
                your next eco-conscious collection
              </>
            </StandardImg>
          </figure>
          <figure className="overflow-hidden group image-container relative md:col-span-2">
            <StandardImg img={standardsectionimg3} title={"corporate gifting"}>
              <>
                When conscious working translates <br />
                to conscious gifting
              </>
            </StandardImg>
          </figure>
        </div>
      </div>
    </>
  );
}
