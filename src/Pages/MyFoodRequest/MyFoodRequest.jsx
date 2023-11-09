import { useEffect, useState } from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import MyFoodRequestCard from "./MyFoodRequestCard";

const MyFoodRequest = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const [myFoodRequest, setMyFoodRequest] = useState([]);

  useEffect(() => {
    axios.get(`/my-food-request?queryEmail=${user?.email}`).then((res) => {
      // console.log(res.data);
      setMyFoodRequest(res?.data);
    });
  }, [axios, user?.email]);
  return (
    <div>
     
      <div className=" bg-blue-600 p-5 mb-6 text-white text-lg font-bold max-w-[40%] mx-auto">
        <marquee  direction="left"> Total {myFoodRequest.length} Food Requested </marquee>
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
        {myFoodRequest.map((mySingleFood) => (
          <MyFoodRequestCard
            key={mySingleFood._id}
            mySingleFood={mySingleFood}
            setMyFoodRequest={setMyFoodRequest}
            myFoodRequest={myFoodRequest}
          ></MyFoodRequestCard>
        ))}
      </div>
    </div>
  );
};

export default MyFoodRequest;
