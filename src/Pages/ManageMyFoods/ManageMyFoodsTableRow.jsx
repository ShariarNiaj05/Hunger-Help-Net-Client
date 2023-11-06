const ManageMyFoodsTableRow = ({food}) => {
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
            <div className="font-bold">{food.donatorName}</div>
          </div>
        </div>
      </td>
      <td>
        {food.expirationTime}
        <br />
        <span className="badge badge-ghost badge-sm">{food.pickupLocation}</span>
      </td>
      <td>{food.pickupLocation}</td>
      <th>
        <button className="btn btn-ghost btn-xs">details</button>
      </th>
    </tr>
  );
};

export default ManageMyFoodsTableRow;
