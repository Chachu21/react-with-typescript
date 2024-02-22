import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Header = () => {
  const cartItem = useSelector((state: RootState) => state.cart.cart);
   const getQuantity = () => {
     let quantity = 0;
     cartItem.forEach((item) => (quantity += item.quantity));
     return quantity;
   };

   const cartCount = getQuantity();
  return (
    <nav className="flex justify-between items-center sticky top-0 start-0 bg-white shadow-md z-10 rounded-sm w-full container mx-auto  py-[4px] px-[58px] my-[2px]">
      <div className="flex justif-center items-center">
        <Link to="/">
          <img
            src="/Color logo with background.svg"
            alt="logo"
            className="w-16 h-16 rounded-lg"
          />
        </Link>
      </div>
      <div>
        <ul className="flex items-center space-x-5 sm:space-x-[38px]">
          <li>
            <NavLink
              to="/shop"
              className={({ isActive }) => {
                return isActive
                  ? "text-[#FF6700]"
                  : "text-black hover:text-orange-600";
              }}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => {
                return isActive
                  ? "text-[#FF6700]"
                  : "text-black hover:text-orange-600";
              }}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "orange" } : {};
              }}
              to="/cart"
              className="flex justify-items-center items-center space-x-3 relative"
            >
              <FaShoppingCart />
              <span className="absolute -top-5 text-sm right-0">
                {cartCount}
              </span>
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
