import { Link, useParams } from "react-router-dom";
import { images } from "../data"; // Ensure that this import is correct and that the data is exported correctly
import { GoArrowRight } from "react-icons/go";
import Button from "./UI/Button";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { addToCart } from "../redux/features/cartSlice";

interface FilteredProduct {
  id: string;
  url: string;
  name: string;
  price: number;
  description: string;
}

const ProductDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams<{ id: string }>(); // Ensure that you specify the type for useParams
  const filteredProduct: FilteredProduct | undefined = images.find(
    (image) => image.id === id
  );

  // Check if a product with the given ID exists
  if (!filteredProduct) {
    return <div>Product not found</div>;
  }

  return (
    <section className="flex flex-col justify-start items-start space-y-0 mx-[50px]">
      <div className="flex m-10">
        <div className="flex-1">
          <img src={filteredProduct.url} alt={filteredProduct.name} />
        </div>
        <div className="flex-1 flex flex-col justify-start items-start space-y-10">
          <h2 className="text-7 font-bold ">{filteredProduct.name}</h2>
          <p className="text-xs font-bold text-gray-900">
            Price: ${filteredProduct.price}
          </p>
          <p>{filteredProduct.description}</p>
          <Button
            onClick={() => {
              dispatch(
                addToCart({
                  id: filteredProduct.id,
                  name: filteredProduct.name,
                  url: filteredProduct.url,
                  price: filteredProduct.price,
                })
              );
            }}
            className="-mt-[102px]"
          >
            {/* <GoArrowRight /> */}
            <span className="capitalize">ADD TO BAG</span>
          </Button>
        </div>
      </div>
      <img
        src="https://s3-alpha-sig.figma.com/img/749a/6c11/ef23b9f68c72d3bc4d5aeff73d25553c?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cc3zrhX30hGoE7H7QLM465Ht9zyZym8oYImFCh0uQ6-l5GWZToe4-AKX09~C2cpZyw4trk-dySU7dqyURd1~4nUiT4Ka3AsU9RU3HEQeRwU9AezQlmiDKW8P93cjTxVQPIjD6CpLCVqTMJJej0qQ8YwEN8HOqpz7UjWy-1d0kVsDLC2FS4SYteBrUEqxr~vYfY0FwTkIFMoe4s8AKhmwKP4C74k48p1ldX7tlPg66KJfczmolS6R3FeLRdVODAKukSJrrTZ9gWJOI4uwO7oSR5b3ePqx2KA~Ir4asdpJjWol43ehLl1MjbONv3Lp8Lw~ZX0mE5oEJJsnTM~VRyZq9w__"
        alt=""
        className="w-full h-[540px]"
      />
      <span className="text-4xl font-bold pt-16 pb-10">
        Our eco-friendly materials
      </span>
      <div className="flex">
        <img
          src="https://s3-alpha-sig.figma.com/img/3936/3f0b/eeed1f5d71e0aa617fd112c7eca50569?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jgk3H4uZOXIuGr1p70r87f40kosBSC~4ztvtEE8S~Qv-M4dcCOX8HQhRz2rJ8TYd~zYvTw05GXPS63y~~XblRYQcAVYgb51ZtayIQyvqhREyrbQRME7r1NLUTW12WzQHzJivAg7l-ih-vkYI6GsLZPH7saYKkJiIqlMrIM05fVmlaxPDsqEjiPfYzoq7R1ZfyKP3hCA0-a-a9i0kxVtsC0SpcQSrqY73Sh8RwrxR63hpAxEv1yrPeoGFj43hKUxp7oAXQVf0cQny~cN5nADkaPKqBRQdK49~njTmti88Y12IyBa8srPc74nuPt5yjfc6Ss8tzzzJBN5TTu5-az84pw__"
          alt=""
          className="flex-1 w-1/2"
        />
        <div className="flex flex-col justify-center items-start space-y-10 mx-10 flex-1 w-1/2">
          <span className="text-xl font-semibold">
            Ethical sourcing and production processes
          </span>
          <p className="text-sm">
            We prioritize suppliers who meet our ethical standards and uphold
            fair labor practices, pay fair wages, and maintain safe working
            conditions
          </p>
          <button
            onClick={() => {}}
            className="flex space-x-6 rounded-md items-center py-1 px-2 bg-[#4243B1] text-white -mt-[102px]"
          >
            <GoArrowRight />
            <span className="capitalize">Learn more</span>
          </button>
        </div>
      </div>
      <div className="flex ">
        <div className="flex flex-col justify-center items-start space-y-10 mx-10 flex-1 w-1/2">
          <span className="text-xl font-semibold">
            Ethical sourcing and production processes
          </span>
          <p className="text-sm">
            We prioritize suppliers who meet our ethical standards and uphold
            fair labor practices, pay fair wages, and maintain safe working
            conditions
          </p>
        </div>
        <img
          src="https://s3-alpha-sig.figma.com/img/1b4a/e7f6/cfef27f94cba49d1b3a7fbbd37a41eac?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZXxKBnHitjVIUe93g~wzDNSdN4s3aJVuy13gLHSCxOVUUXumTIXMs5KEsU2t4fcZe9Ftn6PPXHWsYqQ4y9QFzE3JtVyd7v86jthEfBwSRTN9WtbAR~1ba5rdgpLaw8bcFR6lXmxQfIcY3IVtVEzpJL85fMLNfkaqfFglxcrR0Zwpq2d-~dtlmjnuLww-KboO8DzltWeol0or3wpEs8F2HVJjVP63fVbmOHBCEULY6hgntrXn9wWMS2cMPX6O8F6AC4Zs1sKKWrts~u70t9ZCWN0Dn7tsaPnzNjTtW3BDl0~AoB0sC2wmV0FLOWTjU3XgOB49yJPNks6oxlue-2Mc2Q__"
          alt=""
          className="flex-1 w-1/2"
        />
      </div>
      <div className="flex py-32">
        <div className="flex flex-1 flex-col  relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/6f28/29ab/103a309acc394f64b068d2b344a2bc4e?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=JKyZ05FY89fgptcODJaM9XF5YocvWRS2GyzYUDhspDKfUSeNorkdkQeW7~5hWTtjL9UoPnT7ZdbTiUBqyuSaSX6K3gkAjolAertRYXJ~Xs1YlGLe8Epf9Vn41FysnDZPLKzDLufroz355fpTmtsBzqRf3Ge2vfWXu0-A-5tuiSzHZc0S3AgWp~sdlGESFn0T2w4N74Ww6D03NUe-K5KbcM1WRKcWkoBhgU2noHLfCoFSXihFTyezaaboU1Dine9-WIHJ2SSBkGzmIcXNlKKbBKWT04-dJ0YPZyzWyJ-4zXe43XyRqXY0klUQihjT44pCsX7juceLmLsrcfOl0~vhXQ__"
            alt="young bndofijd"
            className="w-full object-cover bg-white"
          />
          <Link to={"/shop"}>
            {" "}
            <Button type="button" onClick={() => {}} className="-mt-[102px]">
              <GoArrowRight />
              <span className="capitalize text-xl">Shop</span>
            </Button>
          </Link>
        </div>
        <div className="flex flex-1 flex-col  relative">
          <img
            src="https://s3-alpha-sig.figma.com/img/9217/7752/165dc1be8da6aa9dbc598c05ec4d0b9f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IezuW0MFYb0ah2mYyHt~WJNUGY8A8xriIqAB-I3w3F1Tcym7w0DUwn46Gy6EZqH1Jm3B5cY5UxMGQMEN~WJRwQDrpG95bFWzfAn20tzph06VkPkrjgJk1XzoNmkQCD8JGarJrrIWbdtXIZznY9N14cyo9cVFHSSy-5ByHe8~rhmp0Pa41MRBTcW0eUqRf8cCWoptLQ2t4bkiZSUbR~FLoyMlRdMCTCwMtdjl0VHLZ19JUoFDNqzQ5WdtFAXm5P9EwoWl9-xLWvy68I2IaXvAIxH0jdZLUnVBc7DIfdYHUnbOo1dVuDvBV2~tkIJxQiqYEsFqbx30FgkyRHBXrFm7Ng__"
            alt="young bndofijd"
            className="w-full object-contain bg-white"
          />
          <Link to={"/shop"}>
            {" "}
            <Button type="button" onClick={() => {}} className="-mt-[102px]">
              <GoArrowRight />
              <span className="capitalize text-xl">Shop</span>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
