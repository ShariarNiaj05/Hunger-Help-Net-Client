import { Link } from "react-router-dom";

const AvailableFoodsCard = ({ singleFood, refetch }) => {
  const {
    _id,
    foodImage,
    foodName,
    donatorImage,
    donatorName,
    foodQuantity,
    pickupLocation,
    expirationTime,
    additionalNotes,
  } = singleFood || {};
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img
          className=" max-h-48 w-full object-cover"
          src={foodImage}
          alt={foodName}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {foodName}</h2>
        <div className="badge badge-secondary">
          Food Quantity: {foodQuantity}
        </div>
        <p>Notes: {additionalNotes}</p>
        <div className="card-actions justify-end">
          <div className=" ">
            <span className=" text-blue-600">Location</span>: {pickupLocation}
          </div>
          <div className="badge badge-outline">
            Expiration Time: {expirationTime}
          </div>
        </div>
        <div>
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src={donatorImage} />
            </div>
            <button className="btn">{donatorName}</button>
          </div>
          <Link to={`/food-details/${_id}`}>
            <button className="btn btn-active btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AvailableFoodsCard;
