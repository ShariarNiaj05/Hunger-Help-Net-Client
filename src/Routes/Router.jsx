import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Error from "../Shared/Error/Error";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import ManageMyFoods from "../Pages/ManageMyFoods/ManageMyFoods";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import FeaturedFoodDetails from "../Pages/Home/FeaturedFood/FeaturedFoodDetails";
import ManageSingleFood from "../Pages/ManageMyFoods/ManageSingleFood";
import EditMyFoods from "../Pages/ManageMyFoods/EditMyFoods";

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
        path: "/food-details/:id",
        element: <PrivateRoute><FeaturedFoodDetails></FeaturedFoodDetails></PrivateRoute>,
        loader: ({params})=> fetch(`http://localhost:5000/foods/${params.id}`)
      },
      {
        path: "/available-foods",
        element: <AvailableFoods></AvailableFoods>,
      },
      {
        path: "/add-food",
        element: (
          <PrivateRoute>
            <AddFood></AddFood>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-foods",
        element: (
          <PrivateRoute>
            <ManageMyFoods></ManageMyFoods>
          </PrivateRoute>
        ),
      },
      {
        path: "/manage-my-foods/:id",
        element: (
          <PrivateRoute>
            <EditMyFoods></EditMyFoods>
          </PrivateRoute>
        ),
        loader: ({params})=>fetch(`http://localhost:5000/get-food/${params.id}`)
      },
      {
        path: "/manage/:id",
        element: (
          <PrivateRoute>
            <ManageSingleFood></ManageSingleFood>
          </PrivateRoute>
        ),
        loader: ({params})=>fetch(`http://localhost:5000/get-food/${params.id}`)
      },
      {
        path: "/my-food-request",
        element: (
          <PrivateRoute>
            <MyFoodRequest></MyFoodRequest>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
