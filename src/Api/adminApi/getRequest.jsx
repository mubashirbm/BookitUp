import ColumnGroup from "antd/es/table/ColumnGroup";
import { adminAPI } from "../../Utils/Api"


export const hotels= async ()=>{
    console.log("object")
    const  {data} =await adminAPI.get("/getAllHotel")
    console.log(data,"000000000000000000000000000000");
    return data
}

export const BlockUser=async(isActive,userId)=>{
    const response=await adminAPI.get(`/changeStatus/${isActive}/${userId}`)
    return response.data
}
export const getUser=async ()=>{
    const data=await adminAPI.get("/getAllUsers")
    return data
}
export const hotelById=async(hotelId)=>{
    console.log(hotelId,"dddddddddddddddddddd")
    console.log("dddddddddddddddddddd")
    const {data}=await adminAPI.get(`/getHotelById/${hotelId}`)
    console.log(data)
    return data
}