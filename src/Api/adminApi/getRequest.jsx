import { adminAPI } from "../../Utils/Api"


export const getAllHotels= async ()=>{
    const { data} =await adminAPI.get("/getAllHotel")
    return data
}

export const BlockUser=async(isActive,userId)=>{
    const response=await adminAPI.get(`/changeStatus/${isActive}/${userId}`)
    return response.data
}