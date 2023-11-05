import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Shared/Loading/Loading";

const AvailableFoods = () => {

    const axios = useAxiosSecure()

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
    console.log(data?.data);


    return (
        <div>
            
            AvailableFoods
        </div>
    );
};

export default AvailableFoods;