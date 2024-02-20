import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
interface MyObject {
  id: string;
  name: string;
  topName?: string;
  price?: number;
  url: string;
  children?: ReactNode|ReactNode[];
//   buttonText?: string;
}

interface shopProps {
  url: string;
  headline: string;
  subheadLine?: string;
  children: ReactNode | ReactNode[];
  topName?: string;
  subTitle?: string;
  title?: string;
  description?: string;
  descriptionImageUrl?: string;
  gridd: MyObject[];
}
const ShopPart = (props: shopProps) => {
    const childrenArray = React.Children.toArray(props.children);
  return (
    <section className="relative">
      <img
        src={props.url}
        alt="person"
        className="absolute -top-[98px] min-h-screen w-full -z-10"
      />
      <div className="flex flex-col gap-y-3 justify-end items-start min-h-screen pb-[150px]  mx-[50px]">
        <span className="text-[40px] font-bold text-black ">
          {props.headline}
        </span>
        {childrenArray[0]}
      </div>
      <div className="bg-white rounded-t-[50px] flex flex-col my-[102px] z-10 py-8 ">
        <div className="flex flex-col justify-start items-start mb-16 mt-8 mx-[50px]">
          <h2 className="text-black text-[40px]">{props.topName}</h2>
          <p className="text-black text-sm">{props.subTitle}</p>
        </div>
        <div className="grid grid-cols-3 gap-5 mx-[50px]">
          {props.gridd.map((single) => (
            <div
              key={single.id}
              className="flex flex-col justify-start  space-y-5"
            >
              <h2 className="text-2xl font-medium text-center">
                {single.topName}
              </h2>
              <Link to ={`/shop/${single.id}`}>
               
                <img
                  src={single.url}
                  alt="hoodies"
                  className="h-[368px] w-[368px] bg-[#F9E4BC] rounded-[18px] p-6"
                />
              </Link>
              <div className="flex justify-start flex-col items-start space-y-1">
                <span className="text-black text-2xl">{single.name}</span>
                <span className="text-black text-xs">{single.price}</span>
              </div>
              {childrenArray[1]}
            </div>
          ))}
        </div>
        {childrenArray[2]}
        {childrenArray[3]}
      </div>
    </section>
  );
};

export default ShopPart;
