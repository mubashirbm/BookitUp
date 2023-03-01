import axios from "axios";


export const userApi = axios.create({ baseURL:"http://localhost:5500/api" });
// export const userApi = axios.create({ baseURL:"https://api.bookitup.fitzone.fun/api" });

// export const adminAPI = axios.create({ baseURL:"https://api.bookitup.fitzone.fun/admin" });
export const adminAPI = axios.create({ baseURL:"http://localhost:5500/admin" });

