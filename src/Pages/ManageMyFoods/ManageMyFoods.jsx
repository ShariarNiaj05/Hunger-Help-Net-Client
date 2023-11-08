import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/useAuth";
import Loading from "../../Shared/Loading/Loading";
import ManageMyFoodsTableRow from "./ManageMyFoodsTableRow";
import TestTable from "./TestTable";

// import ManageMyFoodsTable from "./ManageMyFoodsTable";
// import React, { useMemo } from "react";
// import {
    
//   useReactTable,
//   getCoreRowModel,
//   flexRender,
// } from "@tanstack/react-table";


// const columns = [
//     {
//         Header: "Donor Name",
//       accessorKey: "donatorName",
//     },
//     {
//         Header: "Email",
//       accessorKey: "email",
//     },
//     {
//         Header: "Expiration Time",
//       accessorKey: "expirationTime",
//     },
//   ];

const ManageMyFoods = () => {
  const axios = useAxiosSecure();
  const { user } = useAuth();
  const { data, isLoading, isError, error, isFetching, refetch } = useQuery({
    queryKey: ["manage-foods"],
    queryFn: async () => {
      const myFood = await axios.get(`/get-food?queryEmail=${user?.email}`);
      return myFood;
    },
  });
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
  
  const testTableData = data?.data 

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
          <thead>
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
          </thead>
          <tbody>
            {/* row 1 */}
            {
             data?.data.map(food => <ManageMyFoodsTableRow key={food._id} food={food} refetch={refetch} testTableData={testTableData}></ManageMyFoodsTableRow>) 
          }
          </tbody>
        </table>


        <p> React table implementing</p>

        {
          

          // data?.data.map(food => <TestTable key={food._id} food={food} refetch={refetch}></TestTable>)
          // <TestTable testTableData={testTableData} refetch={refetch}></TestTable>
        
        
        }

       
      </div>

          
    </div>
  );
};

export default ManageMyFoods;
