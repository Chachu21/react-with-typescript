

import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Inspx from "inspx";
import Banner from "../components/Banner";
const Root = () => {
  return (
    <Inspx>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
    </Inspx>
  );
};

export default Root;