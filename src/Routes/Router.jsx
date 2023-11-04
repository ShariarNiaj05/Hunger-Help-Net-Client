import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Shared/Error/Error";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import Login from "../Components/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>
      },
      {
        path: "/add-food",
        element: <AddFood></AddFood>
      },
      {
        path: "/manage-my-foods",
        element: <ManageMyFoods></ManageMyFoods>
      },
      {
        path: "/my-food-request",
        element: <MyFoodRequest></MyFoodRequest>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
    ],
  },
]);

export default router;
