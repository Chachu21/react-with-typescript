const About = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        About EthioShop
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
          <p className="text-gray-700">
            Our mission at EthioShop is to provide our customers with the best
            shopping experience by offering high-quality products and excellent
            customer service.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
          <p className="text-gray-700">
            Our vision is to become the leading online marketplace in Ethiopia,
            connecting buyers and sellers from all corners of the country.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Our History</h2>
          <p className="text-gray-700">
            EthioShop was founded in 2020 with the aim of revolutionizing
            e-commerce in Ethiopia. Since then, we have been committed to
            bringing convenience and reliability to online shopping.
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">About the Developer</h2>
          <p className="text-gray-700">
            EthioShop is developed by Chalachew Tsegaye, a passionate software
            engineer dedicated to building innovative solutions for the
            Ethiopian market.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
