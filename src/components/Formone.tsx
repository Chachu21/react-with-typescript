
const Formone = () => {
  return (
    <div className="flex flex-col justify-start items-start space-y-5">
      <h1 className="text-3xl font-bold">Shipping address</h1>
      <form action="" className="flex flex-col space-y-10 justify-end">
        <div className="flex items-center space-x-10">
          <div className="flex flex-col ">
            <label htmlFor="firstname" className="font-semibold capitalize">
              name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Name"
              className="h-10 px-2 rounded-md border-2 border-gray-5"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="firstname" className="font-semibold capitalize">
              Last name
            </label>
            <input
              type="text"
              id="firstname"
              placeholder="Last Name"
              className="h-10 px-2 rounded-md border-2 border-gray-5"
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="font-bold">
            Zip code
          </label>
          <input
            type="text"
            name="zipcode"
            id="zipcode"
            placeholder="zip code"
            className="p-2 border-2 border-gray-5 placeholder:text-gray-700"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="address" className="font-bold">
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            placeholder="address"
            className="p-2 border-2 border-gray-5 placeholder:text-gray-700"
          />
        </div>
        <div className="flex items-center justify-between"></div>
      </form>
    </div>
  );
}

export default Formone