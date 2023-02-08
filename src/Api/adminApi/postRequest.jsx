// import addHotel from "../../pages/Admin/addHotel";
import ColumnGroup from "antd/es/table/ColumnGroup";
import { adminAPI } from "../../Utils/Api";

export const addingHotel=async (addHotel)=>{
    const data=await adminAPI.post('/AddHotel',addHotel)
    return data
}

export const deletingHotel=async (hotelId)=>{
    console.log("deleting back")
    const {response}=await adminAPI.post(`/deleteHotel/${hotelId}`)
    console.log(response,"response deleting")
    return response
    
}
export const updateHotel=async (update)=>{
    console.log(update,"update hotel")
    const data=await adminAPI.post('/updateHotel',update)
    return data
}