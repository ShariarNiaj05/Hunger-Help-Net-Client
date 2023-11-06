import { Link } from "react-router-dom";

const ManageMyFoodsTableRow = ({ food, refetch }) => {
  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expirationTime,
    additionalNotes,
    foodStatus,
    donatorName,
    requesterEmail,
    donatorImage,
  } = food;

    
    const handleDelete = _id => {
        console.log(_id);
    }
  return (
    <tr>
      <th>
        <label>
          <input type="checkbox" className="checkbox" />
        </label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img
                src="/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-bold">{donatorName}</div>
          </div>
        </div>
      </td>
      <td>
        {expirationTime}
        <br />
        <span className="badge badge-ghost badge-sm">
          {pickupLocation}
        </span>
      </td>
      <td>{pickupLocation}</td>
      <th>
        <Link to={`/manage/${_id}`}><button className="btn btn-ghost btn-xs">Manage</button></Link>
        <button className="btn btn-ghost btn-xs">Edit</button>
        <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default ManageMyFoodsTableRow;
