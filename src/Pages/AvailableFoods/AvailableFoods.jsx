import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Loading from "../../Shared/Loading/Loading";
import AvailableFoodsCard from "./AvailableFoodsCard";
import { useState } from "react";

const AvailableFoods = () => {
  const axios = useAxiosSecure();
  const [searchField, setSearchField] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  const { data, isLoading, isError, error, refetch } = useQuery({
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

  const AvailableFoods = data?.data;

  // console.log(AvailableFoods);

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

// ------------------------------------------------
   // Filter the available foods based on the searchField
   const filteredFoods = AvailableFoods.filter((food) =>
   food.foodName.toLowerCase().includes(searchField.toLowerCase())
  );
  
 // Sort the filtered foods based on numeric expirationTime
 const sortedFoods = filteredFoods.slice().sort((a, b) => {
  const expirationTimeA = parseInt(a.expirationTime);
  const expirationTimeB = parseInt(b.expirationTime);
  if (sortOrder === "asc") {
    return expirationTimeA - expirationTimeB;
  } else {
    return expirationTimeB - expirationTimeA;
  }
});

  
// const canRequestFood = filteredFoods.filter((item) => item.foodStatus === "available");
const canRequestFood = sortedFoods.filter((item) => item.foodStatus === "available");


  // ------------------------------------------------
  
  // if dont work the above code uncomment the code below

  // const canRequestFood = AvailableFoods.filter(
  //   (item) => item.foodStatus === "available"
  // );

 

  const handleSearch = e => {
    e.preventDefault()
    // console.log(e.target.value);

    // ----------------
    
    setSearchField(e.target.value);
    // -----------------------
  }


  const handleSortChange = (e) => {
    e.preventDefault()
    // console.log(e.target.value);
    setSortOrder(e.target.value);
  };

  return (
    <div>
      {/* filtering area  */}

      <div className=" max-w-4xl mx-auto flex gap-10 items-center justify-center">
        <div  className="card-body w-1/2">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Search by food name</span>
            </label>
            <input
              type="text"
              placeholder="Food Name"
              className="input input-bordered"
              name="foodName"
              onChange={handleSearch}
            />
          </div>
          {/* <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div> */}
        </div>

        <select onChange={handleSortChange} className="select select-ghost w-full max-w-xs mt-6 input input-bordered">
          <option disabled selected>
            Sort By Food Expire Date
          </option>
          <option value={'asc'}>Asc</option>
          <option value={'desc'}>Desc</option>
          
        </select>
      </div>

      {/* ------------------ */}

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
        {canRequestFood.map((singleFood) => (
          <AvailableFoodsCard
            key={singleFood._id}
            singleFood={singleFood}
            refetch={refetch}
          ></AvailableFoodsCard>
        ))}
      </div>
    </div>
  );
};

export default AvailableFoods;
