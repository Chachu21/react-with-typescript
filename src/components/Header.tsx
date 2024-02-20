import { Link } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {

  return (
    <nav className="flex justify-between items-center bg-white/50 rounded-lg mx-[50px] py-[15px] px-6 my-[18px]">
      <div className="flex items-center text-2xl">
        <Link to='/'>Logo</Link>
      </div>
      <div>
        <ul className="flex items-center space-x-[38px]">
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link
              to="/cart"
              className="flex justify-items-center items-center space-x-3 relative"
            >
              <FaShoppingCart />
              <span className="absolute -top-2 -right-4">0</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Header