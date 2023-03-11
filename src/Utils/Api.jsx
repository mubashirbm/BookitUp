import axios from "axios";


// export const userApi = axios.create({ baseURL:"http://localhost:5500/api" });
export const userApi = axios.create({ baseURL:"https://api.bookitup.fitzone.fun/api" });

userApi.interceptors.request.use((req) => {
    if (localStorage.getItem("userToken")) {
      req.headers.Authorization = "Bearer " + localStorage.getItem("userToken");
    }
    return req;
  });
  

export const adminAPI = axios.create({ baseURL:"https://api.bookitup.fitzone.fun/admin" });
// export const adminAPI = axios.create({ baseURL:"http://localhost:5500/admin" });


adminAPI.interceptors.request.use((req) => {
    if (localStorage.getItem("adminToken")) {
      req.headers.Authorization = "Bearer " + localStorage.getItem("adminToken");
    }
    return req;
  });
  