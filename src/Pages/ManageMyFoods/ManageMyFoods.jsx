import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Shared/Loading/Loading";
import ManageMyFoodsTableRow from "./ManageMyFoodsTableRow";
import TestTable from "./TestTable";
import {
  flexRender,
  useReactTable,
  getCoreRowModel,
} from "@tanstack/react-table";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


// import ManageMyFoodsTable from "./ManageMyFoodsTable";
// import React, { useMemo } from "react";
// import {
    
//   useReactTable,
//   getCoreRowModel,
//   flexRender,
// } from "@tanstack/react-table";


export const columnDef = [
  {
      accessorKey: '_id',
      header: 'Header ID',
  },
  {
      accessorKey: 'foodName',
      header: 'Food Name',
  },
  {
      accessorKey: 'foodQuantity',
      header: 'Food Quantity',
  },
  {
      accessorKey: 'expirationTime',
      header: 'Expiration Time',
  },
  {
      accessorKey: 'pickupLocation',
      header: 'Pickup Location',
  },
  
]

const ManageMyFoods = () => {
  const axios = useAxiosSecure();
  const navigate = useNavigate();
  const { user } = useAuth();
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["manage-foods"],
    queryFn: async () => {
      const myFood = await axios.get(`/get-food?queryEmail=${user?.email}`);
      return myFood;
    },
  });


  // -------------------table test ------------------------------

  const finalColumnDef = React.useMemo(() => columnDef, []);
  const testTableData = data?.data 
  console.log(testTableData);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: testTableData,
    getCoreRowModel: getCoreRowModel(),
  });

  // -------------------table test ------------------------------



  if (isLoading) {
    return <Loading></Loading>;
  }
  if (isError) {
    console.log(error);
    return <p>{error}</p>;
  }

  if (isFetching) {
    return <Loading></Loading>;
  }
  // console.log(myFood);

//   const food = data.data;
//   const tableData = useMemo(() => food, [food]);

  

//   const table = useReactTable({
//     tableData,
//     columns,
//     getCoreRowModel: getCoreRowModel(),
  //   });
  
  
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
    {/*   <table>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {" "}
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}

        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table> */}
          

          <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          {/* <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Food Name</th>
              <th>Expiration Time & Quantity</th>
              <th>Location</th>
              <th>Action</th>
            </tr>
          </thead> */}
          <tbody>
            {/* row 1 */}
            {
            //  data?.data.map(food => <ManageMyFoodsTableRow key={food._id} food={food} refetch={refetch} testTableData={testTableData}></ManageMyFoodsTableRow>) 
          }
          </tbody>
        </table>

{/* ---------------------------------------------------------------------- */}
        <p> React table implementing</p>
        

        <table className=" table table-border table-striped table-zebra table-lg ">
        <thead>
          {tableInstance.getHeaderGroups().map((headerElement) => {
            return (
              
              <tr key={headerElement.id}>
                {headerElement.headers.map((columnElement) => {
                  return (
                    <th key={columnElement.id} colSpan={columnElement.colSpan}>
                      {
                        flexRender(
                        columnElement.column.columnDef.header,
                        columnElement.getContext()
                      )}
                    </th>
                  );
                }
                
                
                )}
                <th>Action Header</th>
              </tr>
            );
          }
          
            
            )}
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
                }
                
                
                
                )}
                <td>
                  <th>
                    <Link to={`/manage/${rowElement.original._id}`}>
                      <button className="btn btn-ghost btn-xs">Manage</button>
                    </Link>
                    <button
                      onClick={() => navigate(`/manage-my-foods/${rowElement.original._id}`)}
                      className="btn btn-ghost btn-xs"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(rowElement.original._id)}
                      className="btn btn-ghost btn-xs"
                    >
                      Delete
                    </button>
                  </th>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

        {
          

          // data?.data.map(food => <TestTable key={food._id} food={food} refetch={refetch}></TestTable>)
          // <TestTable testTableData={testTableData} refetch={refetch}>          </TestTable>
        
        
        }

       
      </div>

          
    </div>
  );
};

export default ManageMyFoods;
