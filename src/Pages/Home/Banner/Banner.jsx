import Lottie from "lottie-react";
import bannerFood1 from "../../../assets/bannerFood1.json";
import { motion } from "framer-motion";
const Banner = () => {
  return (
    <div className="   my-20">
      {/* <motion.h2 animate={{fontSize: 50, x:-100,}}>
                banner motion
            </motion.h2> */}

      <div className=" flex flex-col lg:flex-row ">
        <motion.div animate={{ y: 10 }} className=" flex-1 text-center">
          <h2 className=" text-6xl text-blue-600">
            Join the Fight Against Hunger
          </h2>
          <p className=" text-2xl">
            Our mission is to foster a sense of <br /> community and
            sustainability by sharing food resources. Join us in making a <br />{" "}
            positive impact on the lives of others.
          </p>
        </motion.div>
        <div className=" flex-1 ">
          <Lottie animationData={bannerFood1} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Banner;
