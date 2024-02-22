import { ReactNode } from "react";
import { GoArrowRight } from "react-icons/go";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AppDispatch } from "../redux/store";
import { addToCart } from "../redux/features/cartSlice";
import Button from "./UI/Button";
interface MyObject {
  id: string;
  name: string;
  topName?: string;
  price: number;
  url: string;
  children?: ReactNode | ReactNode[];
  //   buttonText?: string;
}

interface shopProps {
  url: string;
  headline: string;
  subheadLine?: string;
  topName?: string;
  subTitle?: string;
  title?: string;
  description?: string;
  descriptionImageUrl?: string;
  gridd: MyObject[];
}
const ShopPart = (props: shopProps) => {
  const dispatch = useDispatch<AppDispatch>();

  const { pathname } = useLocation();
  return (
    <section className="relative mx-auto container">
      <img
        src={props.url}
        alt="person"
        className="absolute container mx-auto -top-[102px] min-h-screen w-full -z-10"
      />
      <div className="flex flex-col gap-y-3 justify-end items-start min-h-screen pb-[150px] px-2 md:px-[50px]">
        <span className="md:text-[40px] md:font-bold font-semibold text-2xl  text-black ">
          {props.headline}
        </span>
        {pathname === "/" && (
          <Link to="/shop">
            <Button
              type="button"
              onClick={() => {}}
              className="flex space-x-6 rounded-md items-center py-1 px-2 bg-[#4243B1] text-white"
            >
              <GoArrowRight />
              <span>Shop</span>
            </Button>
          </Link>
        )}
        {pathname === "/shop" && <p>Suit your unique preferences</p>}
      </div>
      <div className="bg-white rounded-t-[50px] flex flex-col md:my-[102px] py-0 my-0 z-10 md:py-8 ">
        {pathname === "/shop" && (
          <div className="flex flex-col justify-start items-start mb-0 md:mb-16 -mt-10 md:mt-8 w-full mx-auto container px-[50px]">
            <h2 className="text-black text-[40px]">{props.topName}</h2>
            <p className="text-black text-md">{props.subTitle}</p>
          </div>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-2 w-full content-center place-content-center place-items-center md:px-[50px]">
          {props.gridd.map((single) => (
            <div
              key={single.id}
              className={`flex flex-col ${
                pathname === "/"
                  ? "justify-center items-center"
                  : "justify-start items-start"
              }  space-y-5`}
            >
              {pathname === "/shop" && (
                <h2 className="text-2xl font-medium text-center">
                  {single.topName}
                </h2>
              )}
              {pathname === "/" && (
                <span className="text-black text-xl md:text-2xl">
                  {single.name}
                </span>
              )}
              <Link to={`/shop/${single.id}`}>
                <img
                  src={single.url}
                  alt="hoodies"
                  className="h-[368px] w-[368px] bg-[#F9E4BC] rounded-[18px] p-6"
                />
              </Link>
              {pathname === "/shop" && (
                <div className="flex justify-start flex-col items-start space-y-1">
                  <span className="text-black text-xl md:text-2xl">
                    {single.name}
                  </span>
                  <span className="text-black text-sm font-bold">
                    {" "}
                    ${single.price}
                  </span>
                </div>
              )}
              {pathname === "/" && (
                <Link to="/shop">
                  <Button
                    type="button"
                    onClick={() => {}}
                    className="flex space-x-6 rounded-md items-center w-fit py-1 px-2 bg-[#4243B1] text-white"
                  >
                    <GoArrowRight />
                    <span>Shop</span>
                  </Button>
                </Link>
              )}
              {pathname === "/shop" && (
                <button
                  onClick={() => {
                    dispatch(
                      addToCart({
                        id: single.id,
                        name: single.name,
                        url: single.url,
                        price: single.price,
                      })
                    );
                  }}
                  className="flex space-x-6 rounded-[12px] items-center py-4 px-3 w-fit bg-[#4243B1] text-white -mt-[102px]"
                >
                  <span className="capitalize">ADD TO BAG</span>
                </button>
              )}
            </div>
          ))}
        </div>
        {pathname === "/" && (
          <div className="flex flex-col gap-y-3 w-full container mx-auto  px-2 md:px-[50px] mt-20 md:mt-[179px]">
            <h2 className="md:font-bold md:text-[40px] font-semibold text-2xl ">
              Komorebi hoodies
            </h2>
            <p className="font-normal md:text-[20px] md:w-[760px] text-[17px] container mb-10">
              Our hoodies are crafted from high-quality materials and are
              designed to be both comfortable and stylish. We believe that
              fashion should be functional, and our hoodies are the perfect
              combination of both. Whether you're looking for something cozy to
              wear around the house or a statement piece to make a statement out
              in the world, we have you covered
            </p>
          </div>
        )}
        {pathname === "/" && (
          <div className="flex flex-col items-center justify-center relative">
            <img
              src="https://s3-alpha-sig.figma.com/img/dabc/9d77/0824446c18026f1038ac1db11a33dcf1?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FF6-AU-FnO2B1BfT2Az1F0s6GbmgrhTw24LO~dTmp77tNoQMwwf~8BGmP1Xy~K9jYfsIJ37HPBgFuenoiAVEIFhbTM07lsr1jwfxoEpiRToNPGIFhVIs-3VSWQoFHF42JzyyTCp9hG8sGeSSYpS~go~pKDZVRuYKw6xEi5LVBt5PwhEEbEslKhWiqOhr1-gLDiuCRxpC35OaQJvbACbPIdR21ioM2FxyYYm4jUpB1KdbMbBZ1nBByCg0ZbtZGyNA4mnJx2-B0ev71QphNuMgG0D7PRm3DxIrr237iSxOkamRpBoKAgheM-fVyBdIQEc~a7tnoCXlLJQOqcmqYtEjXg__"
              alt="young bndofijd"
              className="w-full  md:px-0 object-cover"
            />
            <button
              onClick={() => {}}
              className="flex space-x-6 rounded-md items-center py-1 px-2 bg-[#4243B1] text-white -mt-[102px]"
            >
              <GoArrowRight />
              <span className="capitalize">Learn more</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ShopPart;
