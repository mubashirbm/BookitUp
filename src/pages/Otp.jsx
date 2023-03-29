import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { showLoading, hideLoading } from "../redux/alertsSlice";
import { userRegister } from "../Api/userApi/UserRequest";
import { toast } from "react-hot-toast";
import {otpVerify} from '../Api/userApi/UserRequest'

export default function Otp() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const [otp, setOtp] = useState("");
  const [valid, setValid] = useState(false);
 
  console.log(valid, "valid");

  console.log(location);

  const handleOtp = (e) => {
    const OTP = e.target.value;
    setOtp(OTP);
    console.log(otp, "111111111111");
  };

  const data = location?.state;

  console.log(data, "data");
  console.log(data.otp, "otp");

  const name = data.formData.name;
  const email = data.formData.email;
  const password = data.formData.password;
  const Otp = data.otp;


  async function handleSubmit(e) {

    // e.preventDefault();
console.log(otp,"ottpp")
    const data=await otpVerify({otp})
  
    if(data.data.success){
try {
   
    dispatch(showLoading());
    const response = await userRegister({ name, email, password });
      dispatch(hideLoading())
      if (response.success) {
        toast("redirecting to login page");
        toast.success(response.message);
      
    navigate("/login");
  
  } else {
    console.log("masoooo");
    toast.error(response.message);
  }
} catch (error) {
  console.log(error)
}
    }else{
      toast.error('invalid Otp')
    }
    
  }

 

  return (
    <div>
      <div>
        <div className="flex justify-center items-center h-screen  ">
          <div class="w-full max-w-sm p-4 bg-white border border-gray-200  rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
            <form class="space-y-8" action="">
              <h5 class="text-xl  font-medium text-gray-900 text-center  dark:text-white">
                Enter the OTP Here
              </h5>
              <div>
                <input
                  type="type"
                  name="otp"
                  id="otp"
                  onChange={handleOtp}
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="Plese Enter The Otp You recieved"
                  required
                />
              </div>
              <div></div>
            </form>
            {otp && (
              <button
                type="button"
                onClick={handleSubmit}
                className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Submit
              </button>
            )}
            {/* <Link to='/register' class="block mt-3 text-sm font-medium text-gray-900 dark:text-white text-center"  >CLICK HERE TO Register</Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
