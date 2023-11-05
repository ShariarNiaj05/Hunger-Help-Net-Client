import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Loading from "../../../Shared/Loading/Loading";
import FeaturedFoodCard from "./FeaturedFoodCard";
import { Link } from "react-router-dom";

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
  console.log(sortedFood);

  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
      {slicedFood.map((food) => (
        <FeaturedFoodCard key={food._id} food={food}></FeaturedFoodCard>
      ))}
<Link to={'/available-foods'}><button className="btn btn-active btn-accent">View All</button></Link>
      </div>
  );
};

export default FeaturedFood;
