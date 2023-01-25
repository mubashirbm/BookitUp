import axios from "axios";


export const userApi = axios.create({ baseURL:"http://localhost:5000/api" });

export const adminAPI = axios.create({ baseURL:"http://localhost:5000/admin" });

