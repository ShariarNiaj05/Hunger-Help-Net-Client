import { useLoaderData } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const FeaturedFoodDetails = () => {
  const foodDetails = useLoaderData();
  const [currentDate, setCurrentDate] = useState('');
  const { user } = useAuth();

  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expirationTime,
    additionalNotes,
    donatorName,
    email,
    donatorImage,
    foodStatus,
  } = foodDetails;


  useEffect(() => {
    const currentDate = new Date();
    setCurrentDate(currentDate.toISOString().split('T')[0]);
  }, []);

  const handleFoodRequest = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const foodName = form.get("foodName") || 'No Data Provided';
    const foodImage = form.get("foodImage") || 'No Data Provided';
    const foodId = form.get("foodId") || 'No Data Provided';
    const email = form.get("email") || 'No Data Provided';
    const donatorName = form.get("donatorName") || 'No Data Provided';
    const foodQuantity = parseInt(form.get("foodQuantity")) || 'No Data Provided';
    const pickupLocation = form.get("pickupLocation") || 'No Data Provided';
    const expirationTime = parseInt(form.get("expirationTime")) || 'No Data Provided';
    const additionalNotes = form.get("additionalNotes") || 'No Data Provided';
    const requestDate = form.get("requestDate") || 'No Data Provided';
    const foodStatus = form.get("foodStatus,") || 'No Data Provided';
    const donationAmount = form.get("donationAmount") || 'No Data Provided';

    
      const requesterEmail = user?.email || 'No Data Provided';
      const requesterName = user?.displayName || 'No Data Provided';
      const requesterImage = user?.photoURL || 'No Data Provided';
      
      const newRequest = {
          foodName,
          foodImage,
          foodId,
          email,
          donatorName,
          foodQuantity,
          pickupLocation,
          expirationTime,
        additionalNotes,
        donationAmount,
          requestDate,
        requesterEmail,
        requesterName,
        requesterImage,
        foodStatus,

      }

    // console.log(newRequest);

    fetch(`https://hunger-help-net-server.vercel.app/request-food`, {
      method: "POST",
      headers: {
        'Content-type' : 'application/json'
      },
      body: JSON.stringify(newRequest)
    })
    .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.insertedId) { 
          Swal.fire("Success", "Added  Successfully", "success");
      }
    })
    

  };

  // const today = new Date();

  // console.log(today);
  return (
    <div className=" max-w-5xl mx-auto gap-10 flex flex-col">
      <div>
        <h2 className="card-title">Donar Name: {donatorName}</h2>
        <h2 className="card-title">Pickup Location: {pickupLocation}</h2>
      </div>
      <div>
        <div className="card lg:card-side bg-base-100 shadow-xl">
          <figure>
            <img className=" max-h-64" src={foodImage} alt={foodName} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Food Name: {foodName}</h2>
            <p>Food Quantity: {foodQuantity}</p>
            <p>Expired Time: {expirationTime}</p>
            <div className="card-actions justify-end">
              <button
                className="btn btn-primary"
                onClick={() =>
                  document.getElementById("my_modal_1").showModal()
                }
              >
                Food Request
              </button>
              <dialog id="my_modal_1" className="modal">
                <div className="modal-box">
                  <div className="modal-action">
                    <form onSubmit={handleFoodRequest}>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Food Name</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={foodName}
                          name="foodName"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Food Image</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={foodImage}
                          name="foodImage"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Food Quantity</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={foodQuantity}
                          name="foodQuantity"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Food ID</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={_id}
                          name="foodId"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Food Donator email</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={email}
                          name="email"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Food Donator Name</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={donatorName}
                          name="donatorName"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">User email</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.email}
                          name="email"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Request Date</span>
                        </label>
                        <input
                          type="date"
                          defaultValue={currentDate}
                          name="requestDate"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Pickup Location</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={pickupLocation}
                          name="pickupLocation"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Expire Date</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={expirationTime}
                          name="expirationTime"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Requester Name</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.displayName}
                          name="Requester Name"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>
                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Requester Image</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={user?.photoURL}
                          name="Requester Name"
                          readOnly
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text">Additional Notes</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={additionalNotes}
                          name="additionalNotes"
                          className="input input-bordered"
                          required
                        />
                      </div>

                      <div className="form-control">
                        <label className="label">
                          <span className="label-text"> Donation Amount</span>
                        </label>
                        <input
                          type="text"
                          placeholder="enter amount you want to donate"
                          className="input input-bordered"
                          name="donationAmount"
                          
                        />
                      </div>



                      <div className="form-control">
                        <label className="label">
                          <span className="label-text"> Food Status</span>
                        </label>
                        <input
                          type="text"
                          defaultValue={foodStatus}
                          name="foodStatus,"
                          className="input input-bordered"
                          readOnly
                        />
                      </div>
                      <div className="form-control mt-6">
                        <button type="submit" className="btn btn-primary">
                          Request
                        </button>
                      </div>
                    </form>

                    {/* ---------------- */}
                  </div>
                  <form method="dialog">
                    {/* <img src={foodImage} alt="" /> */}
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </dialog>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedFoodDetails;

<form className="card-body"></form>;
