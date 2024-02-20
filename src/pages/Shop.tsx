import ShopPart from "../components/ShopPart";
import { images } from "../data";

const Shop = () => {

  return (
    <div>
      <ShopPart
        subTitle="'Perfect blend of comfort, style, and quality materials',"
        topName="Experience comfort and style"
        gridd={images}
        headline="Latest hoodie styles online"
        url="https://s3-alpha-sig.figma.com/img/6457/a5ed/1665d2a599dcf0e7e34f62db09b16cdf?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P6VWcw-ao7wJ2gJudBld2Hiq5srAIPfPyQaOR5u77-uRR~gNIDEL7zvuuHMVrPqTud5WLYRVjrgDRahzwNYuJZG18VZmjspI1jLYTCplqusD2uYY5TAH73tk6TAImI4jzAyuMw3VmeMhV1-ov0qAu513O3WngUzjZEUE9zMuzmBD6NgJMozQnDTFZBO263KajT4me6pIw-y-BK4ekqOFq~kqKUAywGkHC9pQsT3pXggtKd6OfFmMraWR5h9kXg3l57EjCkcmVO4W2CC7xoaNkQxnh3SH58MFVYsfnLrnMwz2Kv3saLcAxlvYDgEC0h1Wz16Bsl~tIHrazrBt5q2fmg__"
      >
        <p>Suit your unique preferences</p>
        <button
          onClick={() => {}}
          className="flex space-x-6 rounded-[18px] items-center py-5 px-3 w-fit bg-[#4243B1] text-white -mt-[102px]"
        >
          {/* <GoArrowRight /> */}
          <span className="capitalize">ADD TO BAG</span>
        </button>
      </ShopPart>
    </div>
  );
}

export default Shop