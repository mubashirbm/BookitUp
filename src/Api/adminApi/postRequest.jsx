
import ColumnGroup from "antd/es/table/ColumnGroup";
import { adminAPI } from "../../Utils/Api";

export const addingHotel=async (addHotel)=>{
    const data=await adminAPI.post('/AddHotel',addHotel)
    return data
}
export const addingRoom=async (addRoom,Id)=>{
    const data=await adminAPI.put(`/AddRoom/${Id}`,addRoom)
    return data
}
export const updateRoom=async (addRoom,Id)=>{
    console.log(addRoom)
    console.log(Id)
    const data=await adminAPI.put(`/updateRoom/${Id}`,addRoom)
    return data
}

export const deletingHotel=async (hotelId)=>{
    console.log("deleting back")
    const {response}=await adminAPI.post(`/deleteHotel/${hotelId}`)
    console.log(response,"response deleting")
    return response
    
}
export const deletingRoom=async (roomId)=>{
    console.log("deleting back")
    const {response}=await adminAPI.post(`/deleteRoom/${roomId}`)
    console.log(response,"response deleting")
    return response
    
}
export const updateHotel=async (update,Id)=>{
    console.log("11111111111111111111111111111111111111111111111111111111111111111111")
    console.log(update,"update hotel")
    const data=await adminAPI.put(`/updateHotel/${Id}`,update)
    return data
}
export const getAdmin = async () => {
    try {
      const {data} = await adminAPI.post("/get-admin-info-by-id");
      return data;
    } catch (error) {
      console.log(error);
    }
  };