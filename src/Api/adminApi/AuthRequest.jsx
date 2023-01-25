import { adminAPI } from "../../Utils/Api"

export const adminLogin =async(formData)=>{
    const {data}=await adminAPI.post("/login",formData)
    return data 

} 