import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import { columnDef } from "./TestTableColumns";
// import dataJson from "../../../public/demoTable.json";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const TestTable = ({ testTableData, refetch }) => {
  const axios = useAxiosSecure();
  const navigate = useNavigate();
  const [myFood, setMyFood] = useState(null);

  useEffect(() => {
    const data2 = testTableData.map((testItem) => {
      setMyFood(testItem);
    });
  }, [testTableData]);



/*   const {
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
  } = myFood; */

  console.log(myFood);
  // --------------------------------------
  //   const finalData = React.useMemo(() => testTableData, [testTableData]);
  const finalColumnDef = React.useMemo(() => columnDef, []);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: testTableData,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleDelete = (_id) => {
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
        axios
          .delete(
            `https://hunger-help-net-server.vercel.app/delete-food/${_id}`
          )
          .then((res) => {
            // console.log(res);
            if (res?.data?.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              console.log(_id);
              refetch();
              // const remainingProducts = cartProducts.filter(
              //   (product) => product._id !== _id
              // );
              // setCartProducts(remainingProducts);
            }
          });

        // fetch(`https://hunger-help-net-server.vercel.app/delete-food/${_id}`, {
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
  };

  return (
    <div>
      React Table Implementing
      <table className=" table table-border table-striped table-zebra table-lg ">
        <thead>
          {tableInstance.getHeaderGroups().map((headerElement) => {
            return (
              <tr key={headerElement.id}>
                {headerElement.headers.map((columnElement) => {
                  return (
                    <th key={columnElement.id} colSpan={columnElement.colSpan}>
                      {flexRender(
                        columnElement.column.columnDef.header,
                        columnElement.getContext()
                      )}
                    </th>
                  );
                })}
                <th>Action Header</th>
              </tr>
            );
          })}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((rowElement) => {
            return (
              <tr key={rowElement.id}>
                {rowElement.getVisibleCells().map((cellElement) => {
                  return (
                    <td key={cellElement.id}>
                      {flexRender(
                        cellElement.column.columnDef.cell,
                        cellElement.getContext()
                      )}
                    </td>
                  );
                })}
                <td>
                  <th>
                    {/* <Link to={`/manage/${_id}`}>
                      <button className="btn btn-ghost btn-xs">Manage</button>
                    </Link>
                    <button
                      onClick={() => navigate(`/manage-my-foods/${_id}`)}
                      className="btn btn-ghost btn-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(_id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button> */}
                  </th>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TestTable;
