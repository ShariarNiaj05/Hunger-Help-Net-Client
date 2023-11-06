import { Link } from "react-router-dom";

const AvailableFoodsCard = ({ singleFood }) => {
    
    const {  _id,
          foodImage,
          foodName,
          donatorImage,
          donatorName,
          foodQuantity,
          pickupLocation,
          expirationTime,
          additionalNotes,
    } = singleFood || {}
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={foodImage} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {foodName}
          <div className="badge badge-secondary">{foodQuantity}</div>
        </h2>
        <p>{additionalNotes}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{pickupLocation}</div>
          <div className="badge badge-outline">{expirationTime}</div>
        </div>
        <div>
          <div className="avatar">
            <div className="w-24 rounded-xl">
              <img src={donatorImage} />
            </div>
            <button className="btn">{donatorName}</button>
          </div>
          <Link to={`/food-details/${_id}`}><button className="btn btn-active btn-primary">View Details</button></Link>
        </div>
          </div>
          
    </div>
    );
};

export default AvailableFoodsCard;