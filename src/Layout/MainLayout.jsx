import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";
import { useEffect } from "react";

const MainLayout = () => {
  const location = useLocation();
  useEffect(() => {
    // console.log(location.pathname);
    if (location.pathname === "/") {
      document.title = "Hunger Help Net | Home";
    } else {
      document.title = `Hunger Help Net ${location.pathname.replace(
        "/",
        " |"
      )}`;
    }
    if (location.state) {
      document.title = `Hunger Help Net | ${location.state}`;
    }
  }, [location]);

  return (
    <div>
      <Navbar></Navbar>

      <div className=" min-h-[80vh]">
        <Outlet></Outlet>
      </div>

      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
