import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

console.log(API_URL)

const accessCookie = document.cookie
  .split("; ")
  .find((row) => row.startsWith("="));

const accessValue = accessCookie ? accessCookie.split("=")[1] : null;

export default function init() {
  axios.defaults.baseURL = API_URL;
  axios.defaults.withCredentials = false;

  if (accessValue) {
    axios.defaults.headers.common.Authorization = `Bearer ${accessValue}`;
  }



  axios.interceptors.response.use(
    (response) => response,
    async (error) => {
    
      if (error?.response?.status === 401) {
        // removeCookies(["boles_token", "boles_refresh"]);
        window.location.href = '/'; // Redirect to the home page
      }
      return Promise.reject(error);
    }
  );
}
