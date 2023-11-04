import Lottie from "lottie-react";
import loading from "../../assets/loading.json";

const Loading = () => {
  return (
    <div>
      <Lottie
        animationData={loading}
        loop={true}
        className=" flex justify-center items-center min-h-screen max-w-screen-lg mx-auto content-center text-center "
      ></Lottie>
    </div>
  );
};

export default Loading;
