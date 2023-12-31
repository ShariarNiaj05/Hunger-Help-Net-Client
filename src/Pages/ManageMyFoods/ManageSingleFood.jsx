import { useLoaderData, useParams } from "react-router-dom";

import { useEffect, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import noFoodRequest from "../../assets/No-Request.json";
import Lottie from "lottie-react";

const ManageSingleFood = () => {
  const loadedFood = useLoaderData();
  const [singleFood, setSingleFood] = useState(loadedFood);
  const [testRequest, setTestRequest] = useState({});
  const { id } = useParams();
  const axios = useAxiosSecure();

  // useEffect(() => {
  //   fetch(`https://hunger-help-net-server.vercel.app/manage?foodId=${id}`)
  //     .then((res) => {
  //       res.json();
  //       console.log(res);
  //     })
  //     .then((data) => {
  //       console.log(data);
  //       setTestRequest(data)
  //     });
  // }, [id]);

  useEffect(() => {
    axios.get(`/manage?foodId=${id}`).then((res) => {
      // console.log(res.data);
      setTestRequest(res?.data);
    });
  }, [id, axios]);

  const {
    // _id,
    foodName,
    foodImage,
    foodId,
    donatorName,
    foodQuantity,
    pickupLocation,
    expirationTime,
    additionalNotes,
    requestDate,
    foodStatus,
    email,
    donatorImage,
    requesterEmail,
    requesterName,
    requesterImage,
  } = testRequest || {};

  console.log(testRequest);

  const handleStatus = (id) => {
    console.log(id);

    // updating from food collection

    axios.patch(`/get-food/${id}`, { foodStatus: "delivered" }).then((res) => {
      console.log(res.data);
      if (res?.data?.modifiedCount > 0) {
        console.log("modified");
      }
    });

    // updating from request collection

    axios
      .patch(`manage/:id`, { foodId: id, foodStatus: "delivered" })
      .then((res) => {
        console.log(res.data);
        if (res?.data?.modifiedCount > 0) {
          console.log("modified");
        }
      });
  };

  if (foodStatus === "delivered") {
    return <p className=" text-center bg-blue-600 text-white p-2 rounded-lg">This food has been delivered</p>;
  }

  if (!requesterEmail) {
    return (
      <div className=" text-2xl max-h-screen max-w-screen-sm mx-auto">
        <Lottie animationData={noFoodRequest} loop={true}></Lottie>
        <h2 className=" text-center bg-blue-600 text-white p-2 rounded-lg">No Request For This Food</h2>
      </div>
    );
  }

  return (
    <div>
      {/* id: {singleFood._id} */}
      {/* <p>email:{email}</p>
      <p>foodName:{foodName}</p>
      <p>foodImage:{foodImage}</p>
      <p>foodId:{foodId}</p>
      <p>donatorName:{donatorName}</p>
      <p>foodQuantity:{foodQuantity}</p>
      <p>pickupLocation:{pickupLocation}</p>
      <p>expirationTime:{expirationTime}</p>
      <p>additionalNotes:{additionalNotes}</p>
      <p>donatorImage:{donatorImage}</p>

      <p>FoodId:...................{id}</p>
      <p>requestDate:...................{requestDate}</p>
      <p>foodStatus:...............{foodStatus}</p>
      <p>requesterEmail:..................{requesterEmail}</p>
      <p>Requester Name:......................{requesterName}</p>
      <p>Requester Image:......................{requesterImage}</p> */}

      <div className="card w-2/3 bg-base-100 shadow-xl max-w-5xl mx-auto">
        <div className="hero ">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={requesterImage}
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h2>
                Requester Name:{" "}
                <span className="text-2xl font-bold">{requesterName}</span>
              </h2>
              <p className="py-6">Requester Email: {requesterEmail}</p>
              <p className="py-6">Request Date: {requestDate}</p>
              {foodStatus !== "delivered" ? (
                <button
                  onClick={() => handleStatus(id)}
                  className="btn btn-primary"
                >
                  Confirm Deliver
                </button>
              ) : (
                <button className="btn btn-primary">
                  Food has been delivered
                </button>
              )}
            </div>
          </div>
        </div>

        {/* <figure>
          <img
            src={requesterImage}
            alt="Shoes"
          />
        </figure> */}
        {/* <div className="card-body"> */}
        {/* <h2 className="card-title">Requester Name: {requesterName}</h2>
          <p>requesterEmail:..................{requesterEmail}</p>
          <p>requestDate:...................{requestDate}</p>
          <div className="card-actions justify-end"> */}
        {/* <p>foodStatus:...............{foodStatus}</p> */}
        {/* {
              foodStatus !== 'delivered' ?
              <button onClick={()=>handleStatus(id)} className="btn btn-primary">Confirm Deliver</button> : <button className="btn btn-primary">Food has  been delivered</button>
            } */}
        {/* </div> */}
        {/* </div> */}
      </div>
    </div>
  );
};

export default ManageSingleFood;
