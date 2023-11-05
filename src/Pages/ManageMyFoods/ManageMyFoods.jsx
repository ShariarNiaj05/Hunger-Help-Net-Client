import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Shared/Loading/Loading";

const ManageMyFoods = () => {
    const axios = useAxiosSecure()
    const {user} = useAuth()
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['manageFoods'],
        queryFn: async () => {
         const myFood =  await axios.get(`/get-food?email=${user?.email}`)
            return myFood;
        }
    })
    if (isLoading) {
        return <Loading></Loading>
    }
    if (isError) {
        console.log(error);
    }
    
    console.log(data?.data);

    return (
        <div>
            {data?.data.map(food => <p>{ food.expirationTime}</p>)}
            
        </div>
    );
};

export default ManageMyFoods;