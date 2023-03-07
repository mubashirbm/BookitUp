import ColumnGroup from "antd/es/table/ColumnGroup";
import { adminAPI } from "../../Utils/Api"


export const hotels= async ()=>{
    console.log("object")
    const  {data} =await adminAPI.get("/getAllHotel")
   
    return data
}
export const rooms= async ()=>{
    console.log("room object")
    const  {data} =await adminAPI.get("/getAllRoom")
   
    return data
}

export const BlockUser=async(isActive,userId)=>{
    const response=await adminAPI.get(`/changeStatus/${isActive}/${userId}`)
    return response.data
}
export const ChangeStatus=async(isActive,userId)=>{
    const response=await adminAPI.get(`/changeBookingStatus/${isActive}/${userId}`)
    return response.data
}
export const getUser=async ()=>{
    const data=await adminAPI.get("/getAllUsers")
    return data
}
export const hotelById=async(hotelId)=>{
   
  
    const {data}=await adminAPI.get(`/getHotelById/${hotelId}`)
    console.log(data)
    return data
}
export const roomById=async(roomId)=>{
   
   
    const {data}=await adminAPI.get(`/getRoomById/${roomId}`)
    console.log(data)
    return data
}
export const getAllBookings=async ()=>{
    const {data}=await adminAPI.get('/getAllBooking')
    console.log(data,'Booking Details')
    return data
}


export const getChartData =async () =>{
    try {
      const { data } = await adminAPI.get("/getChart");
      return data
    } catch (error) {
      
    }
  }
  export const monthgraph=async ()=>{
    try {
        
        const data=await adminAPI.get('/getrevenue')
        console.log(data,"daaattaaa")
        return data
    } catch (error) {
        console.log(error)
    }
  }

  export const getBookedRoom =async (Id)=>{
    try{
        const {data} = await adminAPI.get(`/getRoomById/${Id}`)
       
        console.log(data,"mm")
        return data
    }catch (error){
        console.log(error)
    }
  }