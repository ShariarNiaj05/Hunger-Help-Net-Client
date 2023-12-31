import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const axiosSecure = axios.create({
  baseURL: "https://hunger-help-net-server.vercel.app", //https://hunger-help-net-server.vercel.app
  withCredentials: true,
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate()
  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // return Promise.reject(error)

        if (
          error?.response?.status === 401 ||
          error?.response?.status === 403
        ) {
          logOut()
            .then(() => {
              Swal.fire({
                icon: "success",
                title: "Logout Unintentionally",
              });
              navigate('/login')
            })
            .catch((error) => {
              Swal.fire({
                icon: "error",
                title: `${error.message}`,
                text: "Something went wrong!",
              });
            });
        }
      }
    );
  }, [logOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
