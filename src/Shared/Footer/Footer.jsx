import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

import logo from "/logo.png";
const Footer = () => {
  return (
    <footer className="flex justify-between p-10 bg-neutral text-neutral-content max-w-7xl mx-auto bottom-0">
      <div className=" flex-1">
        <img src={logo} className=" w-1/3 " alt="" />
        <p className=" footer-title">
          Hunger Help Net
          <br />© 2023 All rights reserved
        </p>
      </div>
          <div className=" flex-1 text-xl font-bold">
          <h3 className="footer-title">Address</h3>
              123 Community Way <br />
Sustainville, SS 54321 <br />
United States</div>
      <nav className=" flex-1">
        <h3 className="footer-title">Social</h3>
        <div className="grid grid-flow-col gap-4 text-3xl ">
          <FaFacebookF></FaFacebookF>
          <FaTwitter></FaTwitter>
          <FaInstagram></FaInstagram>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
