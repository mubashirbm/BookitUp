// import { Button, Form,Input } from 'antd'
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../redux/alertsSlice";
 
import {sendingEmail} from '../Api/userApi/UserRequest'
import { useRef, useState,   } from "react";
import { userRegister } from "../Api/userApi/UserRequest";
import validator from "validator";




function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [submit,setSubmit]=useState(false)
  // const [otp,setOtp]=useState('')
  // console.log(otp)




  const handleName =(e)=>{
    const name= e.target.value
    setName(name)
 
  }
  const handleEmail=(e)=>{
    const email=e.target.value
    setEmail(email)
    setIsEmail(validator.isEmail(email))
 
  }
  const handelPassword =(e)=>{
    const password=e.target.value
    setPassword(password)
    setIsPassword(password.length==6)
   
  }
  // if(!name && !isEmail & isPassword){
  //   setSubmit(false)
  // }
  const formData={
    name,email,password
  }


  const sendEmail=async()=>{
    console.log(111111111111)
    console.log(email)
    try {
      // navigate('/otp')
      const response=await sendingEmail({email})
      const otp=response.data.text
      console.log(otp,"response")
      navigate('/otp',{state:{otp:otp,formData}})
    } catch (error) {
      console.log(error)
    }
  }



  // const Register = async (e) => {
  //   e.preventDefault();

  //   try {
  //     dispatch(showLoading());
  //     const response = await userRegister({ name, email, password });
  //     dispatch(hideLoading());
  //     if (response.success) {
  //       toast("redirecting to login page");
  //       toast.success(response.message);
  //       navigate("/login");
  //     } else {
  //       console.log("masoooo");
  //       toast.error(response.message);
  //     }
  //   } catch (error) {
  //     dispatch(hideLoading());

  //     toast.error("something went wrong");
  //   }
  // };

  return (
    // <div className="authentication">
    //   <div className="authentication-form card p-3">
    //     <h1 className="card-title">Register Here</h1>
    //       <Form layout='vertical' onFinish={onFinish}>
    //         <Form.Item label='Name' name='name'>
    //           <Input placeholder= 'Name' />
    //         </Form.Item>
    //         <Form.Item label='Email' name='email'>
    //           <Input type='email' placeholder= 'Email' />
    //         </Form.Item>
    //         <Form.Item label='Password' name='password'>
    //           <Input type='password' placeholder= 'Password' />
    //         </Form.Item>

    //         <Button className= 'primary-button my-2' htmlType='submit'> Register</Button>

    //         <Link to='/login' className='anchor mt-2'>CLICK HERE TO LOGIN</Link>

    //       </Form>

    //   </div>
    // </div>

    <div>
      <div className="flex justify-center items-center h-screen  ">
        <div className="w-full max-w-sm p-4 bg-white border border-gray-200  rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
          <form className="space-y-8" action="">
            <h5 className="text-xl  font-medium text-gray-900 text-center  dark:text-white">
              Register Here
            </h5>
            <div>
              <label
                for="Name"
                className="block  mb-6 text-sm font-medium text-gray-900 dark:text-white"
              >
                Name
              </label>
              <input
                type="Name"
                name="name"
                id="Name"
                onChange={handleName}
                value={name}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Plese Enter Your Name"
                required
              />
              {!name &&
            <small className="text-red-500"> Please Enter Your Name</small>
              }
            </div>
            <div>
              <label
                for="email"
                className="block  mb-6 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                name="name"
                id="email"
                onChange={handleEmail}
                // value={email}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Plese Enter Your Email"
                required
              />
            </div>
            {!isEmail &&
            <small className="text-red-500">Please Enter a Valid Email</small>
            }
            <div>
              <label
                for="Password"
                className="block  mb-6 text-sm font-medium text-gray-900 dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="Password"
                onChange={handelPassword}
                value={password}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                placeholder="Plese Enter Your Password"
                required
              />
            </div>
            {!isPassword &&
            <small className="text-red-500">Please Enter 6 digit Password</small>
            }
{name && isEmail && isPassword &&
            <button
            type="button"
            // onClick={Register}
            onClick={sendEmail}
            className=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register
            </button>
            }
            
            
            <Link
            
              to="/login"
              className="block mt-3 text-sm font-medium text-gray-900 dark:text-white"
            >
              Already Registered ? Login
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;

