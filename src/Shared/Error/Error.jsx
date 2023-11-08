import Lottie from "lottie-react";
import error from "../../assets/error.json";
import { Link, useNavigate } from "react-router-dom";
const Error = () => {
  const navigate = useNavigate();
  return (
    <div className=" text-2xl max-h-screen max-w-screen-sm mx-auto ">
      <Lottie animationData={error} loop={true}></Lottie>
      <Link to={"/"}>
        <button className="btn btn-active btn-ghost">Back TO Home</button>
      </Link>
    </div>
  );
};

export default Error;
