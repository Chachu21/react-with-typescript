import { useState } from "react";

const Banner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsVisible(false);
  };

  return (
    <>
      {isVisible && (
        <div className="flex justify-between items-center mx-auto container  px-[58px] bg-[#314899] text-white py-2 w-full">
          <div />
          <p>Free shipping on $50+ orders</p>
          <svg
            viewBox="0 0 24 24"
            width="24"
            height="24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={handleCloseBanner}
            className="cursor-pointer"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      )}
    </>
  );
};

export default Banner;
