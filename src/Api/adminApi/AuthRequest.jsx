import { adminAPI } from "../../Utils/Api"

export const adminLogin =async(formData)=>{
    console.log("11111111111111111111")
    const {data}=await adminAPI.post("/login",formData)
    console.log(formData,'00000000000000000000000000000000000000000000')
    console.log(data,"insiiiiiiiiiiiiiiiiiiiiiii")
    return data 
// sdfwsfsafdfasdf
} 