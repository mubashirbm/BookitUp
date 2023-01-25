// import { userApi } from "../Utils/Api"

import { userApi } from "../../Utils/Api"


export const userRegister =async (fromData)=>{
    const {data} =await userApi.post("/register",fromData)
    return data             
}

export const userLogin = async (formData)=>{
    const {data}=await userApi.post("/login",formData)
    return data
}

