import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Shared/Loading/Loading";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const FeaturedFood = () => {
  const axios = useAxiosSecure();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["allFoods"],
    queryFn: async () => {
      const allFoods = await axios.get(`/foods`);
      return allFoods;
    },
  });

  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    console.log(error);
    return <p>{error}</p>;
  }

  const sortedFood = data.data.sort((a, b) => b.foodQuantity - a.foodQuantity);
  const slicedFood = sortedFood.slice(0, 6);
  // console.log(sortedFood);

  const canRequestFood = slicedFood.filter(
    (item) => item.foodStatus === "available"
  );

  console.log(canRequestFood);

  return (
    <div className=" my-20 ">
      <motion.h2
        animate={{ scale: 1 }}
        initial={{ scale: 0.5 }}
        className=" text-5xl text-center font-bold mb-5 text-blue-600"
      >
        Featured Food
      </motion.h2>

      <div>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {canRequestFood.map((food) => (
            <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
          ))}
        </div>
      </div>
      <div className=" text-center mx-auto justify-center items-center mt-10">
        <Link to={"/available-foods"}>
          <motion.button
            className="btn btn-active btn-accent "
            animate={{ scale: 1.5 }}
            whileHover={{ scale: 1.2 }}
          >
            View All
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default FeaturedFood;
