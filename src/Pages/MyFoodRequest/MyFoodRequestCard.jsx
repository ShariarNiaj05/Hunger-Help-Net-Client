import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyFoodRequestCard = ({
  mySingleFood,
  myFoodRequest,
  setMyFoodRequest,
}) => {
  const {
    _id,
    foodName,
    foodImage,
    foodId,
    donatorEmail,
    donatorName,
    foodQuantity,
    pickupLocation,
    expirationTime,
    additionalNotes,
    requestDate,
    requesterEmail,
    foodStatus,
  } = mySingleFood;

  const axios = useAxiosSecure();

  const handleCancelRequest = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`/cancel-food/${_id}`).then((res) => {
          console.log(res.data);
          if (res?.data?.deletedCount > 0) {
            Swal.fire(
              "Deleted!",
              "Your requested food has been deleted.",
              "success"
            );
            const remaining = myFoodRequest.filter((food) => food._id !== _id);
            setMyFoodRequest(remaining);
          }
        });
      }
    });
  };
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={mySingleFood.foodImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Donar Name: {donatorName}</h2>
        <p>Pickup Location: {pickupLocation}</p>
        <p>Expire Date: {expirationTime}</p>
        <p>Request Date: {requestDate}</p>
        <p>Status: {foodStatus} </p>

        <div className="card-actions justify-end">
          {foodStatus === "available" && (
            <button
              onClick={() => handleCancelRequest(_id)}
              className="btn btn-primary"
            >
              Cancel Request
            </button>
          ) }
        </div>
      </div>
    </div>
  );
};

export default MyFoodRequestCard;
