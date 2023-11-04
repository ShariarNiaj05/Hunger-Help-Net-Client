import Lottie from "lottie-react";
import error from "../../assets/error.json";
const Error = () => {
  return (
    <div className=" text-2xl max-h-screen max-w-screen-sm mx-auto ">
      <Lottie animationData={error} loop={true}></Lottie>
    </div>
  );
};

export default Error;
