import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppDispatch, RootState } from "../redux/store";
import {
  CartItem,
  decreaseQuantity,
  increaseQuantity,
} from "../redux/features/cartSlice";

const getTotal = (cartItem: CartItem[]) => {
  let totalQuantity = 0;
  let totalPrice = 0;
  cartItem.forEach((item) => {
    totalQuantity += item.quantity!;
    totalPrice += item.price! * item.quantity!;
  });
  return { totalPrice, totalQuantity };
};

const Cart = () => {
  const cartItem = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch<AppDispatch>();

  const onIncreaseQuantity = (itemId: string) => {
    dispatch(increaseQuantity({ id: itemId }));
  };

  const onDecreaseQuantity = (itemId: string) => {
    dispatch(decreaseQuantity({ id: itemId }));
  };

  const gettotals = getTotal(cartItem);

  return (
    <section className="flex flex-col container mx-auto px-2 md:px-[50px] space-y-20">
      <h1 className="md:text-[32px] text-2xl font-bold my-10  ">
        Shopping cart
      </h1>
      <div className="flex flex-col md:space-y-10 relative">
        {cartItem.map((item, index) => (
          <div
            key={index}
            className=" flex-col mb-10 flex md:flex-row justify-center items-center md:justify-between md:items-start shadow-md"
          >
            <div className="flex md:space-x-10 md:space-y-0 md:flex-row flex-col space-y-5">
              <img
                src={item.url}
                alt="something"
                className="h-[368px] w-[368px] bg-white object-fill rounded-2xl"
              />
              <div className="flex md:flex-col flex-row justify-between items-center md:justify-start  md:space-y-32 md:space-x-0">
                <span className="font-semibold text-24">
                  {item.name} ({item.quantity})
                </span>
                <div className="flex space-x-5 justify-start items-center">
                  <button
                    onClick={() => onDecreaseQuantity(item.id)}
                    className=" flex justify-center items-center w-10 h-10 rounded-full text-center bg-gray-100 text-black font-bold text-3xl"
                  >
                    -
                  </button>
                  <span className="text-[18px] font-bold">1</span>
                  <button
                    onClick={() => onIncreaseQuantity(item.id)}
                    className=" flex justify-center items-center w-10 h-10 rounded-full text-center bg-gray-100 text-black font-bold text-3xl"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
            <span className="font-bold md:my-0 mb-10 pr-0 md:pr-10">
              ${item.price * item.quantity}
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <span className="font-bold ">Total costs</span>
        <span className="font-bold pr-0 md:pr-10 ">
          USD ${gettotals.totalPrice}
        </span>
      </div>
      <Link to={"/checkOut"}>
        <button
          onClick={() => {}}
          className="items-center rounded-md w-full leading-6 py-6 bg-[#4243B1] text-white"
        >
          Proceed to Check out
        </button>
      </Link>
    </section>
  );
};

export default Cart;
