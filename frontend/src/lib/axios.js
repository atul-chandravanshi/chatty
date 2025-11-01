// import axios from "axios";

// export const axiosInstance = axios.create({
//   baseURL: import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api",
//   withCredentials: true,
// });

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:"https://chatty-f4fo.onrender.com/api",
  withCredentials: true,
});

// axios.post(
//   "https://chatty-1.onrender.com/api/auth/login",
//   {
//     email,
//     password,
//   },
//   {
//     withCredentials: true,
//   }
// );
