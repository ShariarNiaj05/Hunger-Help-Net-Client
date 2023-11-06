import { useMutation } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useState } from "react";

const AddFood = () => {

  // const [food, setFood] = useState({})
  const { user } = useAuth()
  const axios = useAxiosSecure()

    const handleNewFood = e => {
        e.preventDefault();
    const form = new FormData(e.currentTarget);
    const foodName = form.get("foodName") || 'No Data Provided';
    const foodImage = form.get("foodImage") || 'No Data Provided';
    const foodQuantity = parseInt(form.get("foodQuantity")) || 'No Data Provided';
    const pickupLocation = form.get("pickupLocation") || 'No Data Provided';
    const expirationTime = parseInt(form.get("expirationTime")) || 'No Data Provided';
    const additionalNotes = form.get("additionalNotes") || 'No Data Provided';
    const foodStatus = form.get("foodStatus") || 'No Data Provided';
        
    const donatorName = user?.displayName || 'No Data Provided';
    const email = user?.email || 'No Data Provided';
    const donatorImage = user?.photoURL || 'No Data Provided';
        
    const newFood = {
        foodName,
        foodImage,
        foodQuantity,
        pickupLocation,
        expirationTime,
        additionalNotes,
        foodStatus,
        donatorName,
        email,
        donatorImage
      };
      
      // setFood(newFood)
      
      
      axios.post('/add-food', newFood)
        .then(res => {
        console.log(res.data);
      })


     
  }


  // const {mutate} = useMutation({
  //   mutationKey: ['allFoods'],
  //   mutationFn: async ({food}) => {
  //     return axios.post('/add-food', food)
  //   }
  // })

  // console.log(food);
  

  return (
    <div className=" max-w-7xl mx-auto mb-20">
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50  ">
        <form onSubmit={handleNewFood} className="container flex flex-col space-y-12 max-w-7xl mx-auto">
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900 ">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Food Information</p>
              <p className="text-xs">
                Together, we can make a positive impact on our community, reduce
                hunger, and work towards a more sustainable and compassionate
                world. Thank you for being a part of the HungerHelpNet family
                and for your commitment to making a difference in the lives of
                others.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="foodName" className="text-sm">
                  Food Name
                </label>
                <input
                  id="foodName"
                                  type="text"
                                  name="foodName"
                  placeholder="Food Name"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="foodImage" className="text-sm">
                  Food Image URL
                </label>
                <input
                  id="foodImage"
                                  type="text"
                                  name="foodImage"
                  placeholder="Food Image URL"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="foodQuantity" className="text-sm">
                  Food Quantity
                </label>
                <input
                  id="foodQuantity"
                                  type="text"
                                  name="foodQuantity"
                  placeholder="Food Quantity  (No. of person to be served)"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full">
                <label htmlFor="pickupLocation" className="text-sm">
                  Pickup Location
                </label>
                <input
                  id="pickupLocation"
                  type="text"
                                  placeholder="Pickup Location"
                                  name="pickupLocation"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label htmlFor="expirationTime" className="text-sm">
                  Expiration Time
                </label>
                <input
                  id="expirationTime"
                  type="text"
                                  placeholder="Expiration Time"
                                  name="expirationTime"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label htmlFor="additionalNotes" className="text-sm">
                  Additional Notes
                </label>
                <textarea
                  id="additionalNotes"
                                  placeholder=" Additional Notes "
                                  name="additionalNotes"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                ></textarea>
              </div>

              {/* <div className="col-span-full sm:col-span-2">
                <label htmlFor="foodStatus" className="text-sm">
                  Food Status
                </label>
                <input
                  id="foodStatus"
                  type="text"
                  placeholder="Food Status"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div> */}
              <div className="col-span-full sm:col-span-2 ">
                <label htmlFor="foodStatus" className="text-sm">
                  Food Status
                </label>
                <select
                                  defaultValue={"available"}
                                  name="foodStatus"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                >
                  <option value={"available"}>Available</option>
                  <option value={"unavailable"}>Unavailable</option>
                  {/* <option>Marge</option> */}
                </select>
              </div>

              {/* 	<div className="col-span-full sm:col-span-2">
					<label htmlFor="zip" className="text-sm">ZIP / Postal</label>
					<input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900" />
                            </div> */}
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="font-medium">Donor Profile</p>
              <p className="text-xs">
                Please take a moment to provide the following information to
                create your donor profile. Your data will be kept secure and
                used only for the purpose of enhancing your experience as a
                HungerHelpNet donor. Thank you for joining us in the fight
                against food insecurity and helping those in need. Together, we
                can make a significant difference.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="donatorName" className="text-sm">
                  User Name
                </label>
                <input
                  id="donatorName"
                                  type="text"
                                  defaultValue={user?.displayName}
                                  placeholder="User Name"
                                  readOnly
                                  name="donatorName"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="email" className="text-sm">
                  Email
                </label>
                <input
                  id="email"
                  type="text"
                                  placeholder="Donator Email"
                                  defaultValue={user?.email}
                                  readOnly
                                  name="email"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                />
              </div>

              {/*     <div className="col-span-full">
                <label htmlFor="bio" className="text-sm">
                  Bio
                </label>
                <textarea
                  id="bio"
                  placeholder=""
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                ></textarea>
                          </div> */}

              <div className="col-span-full">
                <label htmlFor="donatorImage" className="text-sm">
                  Donor Image
                </label>
                <div className="flex items-center space-x-2">
                  <img
                    src={user?.photoURL}
                    alt=""
                    name="donatorImage"
                    className="w-10 h-10 rounded-full dark:bg-gray-500"
                  />
                </div>
                <button
                  // onClick={()=> mutate(food)}
                  type="submit"
                  className="px-4 py-2 mt-3 border rounded-md dark:border-gray-100"
                >
                  Add Food
                </button>
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default AddFood;
