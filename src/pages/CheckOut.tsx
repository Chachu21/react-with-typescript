import { useState } from "react";
import Formone from "../components/Formone";
import Formtwo from "../components/Formtwo";

const CheckOut = () => {
  const formList = ["FirstForm", "SecondForm"];

  const formLength = formList.length;

  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage(page === 0 ? formLength - 1 : page + 1);
  };

  const handleForms = () => {
    switch (page) {
      case 0: {
        return <Formone />;
      }
      case 1: {
        return <Formtwo />;
      }
      default:
        return null;
    }
  };
  const cartItems = [
    {
      name: "Warm wrap hoodie",
      url: "https://s3-alpha-sig.figma.com/img/0749/038c/bf65ac3b1282b77e4e63237982fadc1a?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Cr7hAp4ad~oXHASckodsYv1TG3ApY9dcPgugBUMii5IJ0jRBMuwcLiA1HXx1X4rf6GxO8gKfNSzvMmiHBUxOqdiL4fzRypY7soiciT2ZB8-czfCkidRSdmWZ5ykxfyw5x9DTGDuIQ4S19VTN9o7p34sFe92~w8rS1OHTCsjWfgn8ylqfZfrNPJHVYmBkgFv6mtY2XZ0EhQ8zRi~rs1drfHrtegEt0YXjBLiNCPuRAL7GI0RSqT3QzLdoPnda5JRwLq5lXrUJSzVj7~exRtQpDeTczbpDoAgf84Duk62DQJtWQdfVzNYw5fcld2wKtaqi34dwtFO7YFgitxoCoZ1RJw__",
    },
    {
      name: "Lounge leader hoodie",
      url: "https://s3-alpha-sig.figma.com/img/aca2/31c1/dd06cb67f119a9a733fc0b01adde0a7f?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=jBYX7O7VVJ5OckSkSCJSJlEkBqUuo1ZvA-ZDr4mL5oILzg5C1JgQ5xDTkmXx~kN4RIFpQhGo6Y26lSktNDNMDJjPZSQ3X1vOFIC1C6v4w5-ZrUQd17g2~mhnqmMBEAV1F~sUQniXfEShCanRJ5JF~zt~6Ti0i1QiIlYEeq9ew~FORcQ8irf~pJ6PZtlJQVMmkEQpOySVxicsrzyifiGIwxirVQrNO753BGRIXgG1O8KZOhg2tWMkgiOwEC5j-~xfTbMAGahqpWPzedEsndd0d3xnpWI69FzeCE0Qf9YOwC-SZQaHXI1CnC5G9nkOnNUu~7zT4tslzDNjHu8hE3F7tg__",
    },
  ];
  return (
    <section className="flex justify-between items-start mx-[50px]">
      <div className="flex flex-col justify-start items-start space-y-5">
        {handleForms()}
        {page == 1 ? (
          <button className="float-right w-fit rounded-2xl text-sm bg-[#4243B1] px-4 py-3 text-white">
            Pay Now
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="float-right w-fit rounded-2xl text-sm bg-[#4243B1] px-4 py-3 text-white"
          >
            CONTINUE TO PAYMENT
          </button>
        )}
      </div>
      <div className="flex flex-col space-y-5">
        <div className="flex flex-col space-y-10">
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between">
              <div className="flex space-x-10">
                <img
                  src={item.url}
                  alt="something"
                  className="h-[268px] w-[368px] bg-gray-100  object-fill rounded-2xl"
                />
                <div className="flex flex-col space-y-32">
                  <span className="font-semibold text-24">{item.name}</span>
                  <div className="flex space-x-5 justify-start items-center">
                    <button className=" flex justify-center items-center w-10 h-10 rounded-full text-center bg-gray-100 text-black font-bold text-3xl">
                      -
                    </button>
                    <span className="text-[18px] font-bold">1</span>
                    <button className=" flex justify-center items-center w-10 h-10 rounded-full text-center bg-gray-100 text-black font-bold text-3xl">
                      +
                    </button>
                  </div>
                </div>
              </div>
              <span className="font-bold">$50</span>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold ">SubTotals</span>
          <span className="font-bold ">USD $230</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-semibold ">Shipping</span>
          <span className="font-normal text-xs ">Calculated at next step</span>
        </div>
        <hr className="bg-black h-[2px]" />
        <div className="flex justify-between items-center">
          <span className="font-bold ">Total</span>
          <span className="font-bold ">USD $230</span>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
