
const Formtwo = () => {
  return (
    <div className="flex flex-col justify-start items-start space-y-5">
      <h1 className="text-3xl font-bold">Contact Information</h1>
      <form action="" className="flex flex-col space-y-10 justify-end">
        <div className="flex flex-col">
          <label htmlFor="email" className="font-bold">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="p-2 border-2 border-gray-5"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="font-bold">
            Card Number
          </label>
          <input
            type="text"
            name="number"
            id="address"
            placeholder="1234 1234 1234 1234"
            className="p-2 border-2 border-gray-5"
          />
        </div>
        <div className="flex items-center space-x-10">
          <div className="flex flex-col ">
            <label htmlFor="firstname" className="font-semibold capitalize">
              Expiry
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="MM / YY"
              className="h-10 px-2 rounded-md border-2 border-gray-5"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname" className="font-semibold capitalize">
              CVC
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="cvc"
              className="h-10 px-2 rounded-md border-2 border-gray-5"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="font-bold">
            Country
          </label>
          <input
            type="text"
            name="number"
            id="address"
            placeholder="address"
            className="p-2 border-2 border-gray-5"
          />
        </div>
        <div className="flex items-center justify-between"></div>
      </form>
    </div>
  );
}

export default Formtwo