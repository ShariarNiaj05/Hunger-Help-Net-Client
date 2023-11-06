import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ManageMyFoodsTableRow = ({ food, refetch }) => {

  const navigate = useNavigate()


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


          axios.delete(`http://localhost:5000/delete-food/${_id}`)
            .then(res => {
              // console.log(res);
              if (res?.data?.deletedCount > 0) {
                      Swal.fire("Deleted!", "Your file has been deleted.", "success");
                console.log(_id);
                refetch()
                      // const remainingProducts = cartProducts.filter(
                      //   (product) => product._id !== _id
                      // );
                      // setCartProducts(remainingProducts);
                    }
          })
          
          // fetch(`http://localhost:5000/delete-food/${_id}`, {
          //   method: "DELETE",
          // })
          //   .then((res) => res.json())
          //   .then((data) => {
          //     if (data.deletedCount > 0) {
          //       Swal.fire("Deleted!", "Your file has been deleted.", "success");
          //       console.log(_id);
          //       // const remainingProducts = cartProducts.filter(
          //       //   (product) => product._id !== _id
          //       // );
          //       // setCartProducts(remainingProducts);
          //     }
          //   });
        }
      });
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
        <button onClick={()=>navigate(`/manage-my-foods/${_id}`)} className="btn btn-ghost btn-xs">Edit</button>
        <button onClick={()=>handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
      </th>
    </tr>
  );
};

export default ManageMyFoodsTableRow;
