
import React, { useState } from 'react'

import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../../redux/alertsSlice"
import { adminLogin } from '../../Api/adminApi/AuthRequest';

function Login() {
  const dispatch = useDispatch();
  const [email,setEmail] = useState()
  const [Password,setPassword] = useState()
  console.log(email,Password)
 
  const navigate = useNavigate();


  const sendEmail=async(e)=>{
    e.preventDefault() 
    try {
      dispatch(showLoading());
      console.log("jbfd.zfjhdjkz")
      const response=await adminLogin({email,Password})
    console.log(response)
      dispatch(hideLoading());

      if (response.success) {
        console.log(response,"response.data.success")
        if(response.isAdmin){

          toast.success(response.message);
          toast("redirecting to home page");
          console.log("admin")
          localStorage.setItem("token", response.data);
          navigate("/admin");
        }else{

          
          toast.error(response.message);
          toast("Admin Is Not exist");
          console.log("admin")
         
        }
        
      } 
      else {
        toast.error(response.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      toast.error("something went wrong");
    }
  };

  return (
   

    <div>

  
    <div className='flex justify-center items-center h-screen  '>
<div class="w-full max-w-sm p-4 bg-white border border-gray-200  rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-900 dark:border-gray-900">
<form class="space-y-8" action="">
    <h5 class="text-xl  font-medium text-gray-900 text-center  dark:text-white">Admin Login Here</h5>
    <div>
        <label for="email"  class="block  mb-6 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" name="email" id="email"  onChange={(e)=>{setEmail(e.target.value)}}  value={email}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Plese Enter Your Email" required />
    </div>
    <div>
        <label for="Password"  class="block  mb-6 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="Password" name="Password" id="Password"  onChange={(e)=>{setPassword(e.target.value)}}  value={Password}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Plese Enter Your Password" required />
    </div>

   
    <button type="submit" onClick={sendEmail} class=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
    
</form>
    <Link to='/register' class="block mt-3 text-sm font-medium text-gray-900 dark:text-white text-center"  ></Link>
</div>
</div>

</div>
  );
}

export default Login;
