import { useLoaderData, useNavigate, useNavigation, useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import axios from "axios";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const EditMyFoods = () => {
  const { id } = useParams();
  const loadedData = useLoaderData();
    const navigation = useNavigation();
    const navigate = useNavigate()
    const { _id } = loadedData;
    const axios= useAxiosSecure()

  // console.log(_id);
  if (navigation.state === "loading") {
    return <Loading></Loading>;
  }

  const handleUpdateFood = async (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const foodName = form.get("foodName") || "No Data Provided";
    const foodImage = form.get("foodImage") || "No Data Provided";
    const foodQuantity =
      parseInt(form.get("foodQuantity")) || "No Data Provided";
    const pickupLocation = form.get("pickupLocation") || "No Data Provided";
    const expirationTime =
      parseInt(form.get("expirationTime")) || "No Data Provided";
    const additionalNotes = form.get("additionalNotes") || "No Data Provided";
    const foodStatus = form.get("foodStatus") || "No Data Provided";

    const updateFood = {
      foodName,
      foodImage,
      foodQuantity,
      pickupLocation,
      expirationTime,
      additionalNotes,
      foodStatus,
    };

    const response = await axios
      .put(`/add-food/${_id}`, updateFood)
        // .then((res) => {
        //     // console.log(res.data);
        // });
        const data = await response.data
      console.log(data);
      if (data.modifiedCount > 0) {
          Swal.fire("Success", "Food Updated Successfully", "success");
          navigate('/manage-my-foods')
      }
  };
  return (
    <div className=" max-w-7xl mx-auto mb-20">
      <section className="p-6 dark:bg-gray-800 dark:text-gray-50  ">
        <form
          onSubmit={handleUpdateFood}
          className="container flex flex-col space-y-12 max-w-7xl mx-auto"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-900 ">
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label htmlFor="foodName" className="text-sm">
                  Food Name
                </label>
                <input
                  id="foodName"
                  type="text"
                  name="foodName"
                  defaultValue={loadedData.foodName}
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
                  defaultValue={loadedData.foodImage}
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
                  defaultValue={loadedData.foodQuantity}
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
                  defaultValue={loadedData.pickupLocation}
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
                  defaultValue={loadedData.expirationTime}
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
                  defaultValue={loadedData.additionalNotes}
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                ></textarea>
              </div>

              <div className="col-span-full sm:col-span-2 ">
                <label htmlFor="foodStatus" className="text-sm">
                  Food Status
                </label>
                <select
                  defaultValue={loadedData.foodStatus}
                  name="foodStatus"
                  className="w-full rounded-md focus:ring focus:ri focus:ri dark:border-gray-700 dark:text-gray-900"
                >
                  <option value={"available"}>Available</option>
                  <option value={"delivered"}>Delivered</option>
                </select>
              </div>

              <button
                type="submit"
                className="px-4 py-2 mt-3 border rounded-md dark:border-gray-100"
              >
                Update Food
              </button>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};

export default EditMyFoods;
