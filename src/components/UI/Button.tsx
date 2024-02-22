import React from "react";

type buttonstype = "submit" | "reset" | "button";

interface buttonType {
  children: React.ReactNode;
  type?: buttonstype; // Make the type property optional
  onClick: () => void;
  className: string;
}

const Button = ({ className, type, onClick, children }: buttonType) => {
  return (
    <button
      className={`${className} flex space-x-6 rounded-md items-center w-fit py-2 px-2 bg-[#4243B1] text-white`}
      type={type} // Now, type can be undefined
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
