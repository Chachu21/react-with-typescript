import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  // Define state to hold the current year
  const [currentYear, setCurrentYear] = useState(0);

  // Update the current year when the component mounts
  useEffect(() => {
    const year = new Date().getFullYear();
    setCurrentYear(year);
  }, []);
  return (
    <footer className="bg-[#314899] flex flex-col gap-32 mt-20 ">
      <div className="flex justify-between items-center mx-[50px] text-white mt-10">
        <div className="flex  flex-col">
          <h2 className="capitalize text-2xl mb-2">Our Company</h2>
          <ul>
            <li>
              <Link to="" className="text-[16px]">
                our story
              </Link>
            </li>

            <li>
              <Link to="" className="text-[16px]">
                term of service
              </Link>
            </li>

            <li>
              <Link to="" className="text-[16px]">
                privacy policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className=" capitalize text-2xl mb-2">Support</h2>
          <ul className="flex flex-col items-end">
            <li>
              <Link to="" className="text-[16px]">
                FAQs
              </Link>
            </li>

            <li>
              <Link to="" className="text-[16px]">
                Contact us
              </Link>
            </li>

            <li>
              <Link to="" className="text-[16px]">
                returns
              </Link>
            </li>
            <li>
              <Link to="" className="text-[16px]">
                professionals
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-between items-center mx-[50px] mb-8 text-white ">
        <div className="w-[200px]">
          <p className="font-normal text-xs">
            Do not sell my personal information &copy; {currentYear} KOMOREBI
          </p>
        </div>
        <div className="flex items-center space-x-[24px]">
          <FaInstagram />
          <RiYoutubeLine />
          <FaLinkedin />
          <FaTwitterSquare />
        </div>
      </div>
    </footer>
  );
}

export default Footer