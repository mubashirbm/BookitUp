// import { userApi } from "../Utils/Api"

import { userApi } from "../../Utils/Api";

export const userRegister = async (fromData) => {
  try {
    const { data } = await userApi.post("/register", fromData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (formData) => {
  try {
    const { data } = await userApi.post("/login", formData);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getByCity = async (city) => {
  try {
    const data = await userApi.get(`/getHotelByCity/${city}`, city);
    return data;
  } catch (error) {
    console.log(error);
  }
};
export const getHotelData = async (Id) => {
  try {
    const {data} = await userApi.get(`/hotelDetails/${Id}`);
    console.log(data,"in userApi")
    return data
  } catch (error) {
    console.log(error);
  }
};
export const getRoomData = async (hotelId) => {
  try {
    const {data} = await userApi.get(`/RoomDetails/${hotelId}`);
    console.log(data,"in userApi")
    return data
  } catch (error) {
    console.log(error);
  }
};
