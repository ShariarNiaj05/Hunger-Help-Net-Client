import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Shared/Loading/Loading";
import AvailableFoodsCard from "./AvailableFoodsCard";

const AvailableFoods = () => {

    const axios = useAxiosSecure()

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["availableFoods"],
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
  
  const AvailableFoods = data?.data

  console.log(AvailableFoods);
  
//   const {
//     _id,
//   foodImage,
//   foodName,
//   donatorImage,
//   donatorName,
//   foodQuantity,
//   pickupLocation,
//   expirationTime,
//   additionalNotes,
// } = AvailableFoods

  const canRequestFood = AvailableFoods.filter(item => item.foodStatus === 'available')

  // console.log(canRequestFood);
  

    return (
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        
      
        {
          canRequestFood.map(singleFood => <AvailableFoodsCard key={singleFood._id} singleFood={singleFood}></AvailableFoodsCard>)
        }
          
    </div>
    );
};

export default AvailableFoods;