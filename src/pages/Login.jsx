import React, { useState } from 'react'
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { hideLoading, showLoading } from "../redux/alertsSlice"
import { check, userLogin } from '../Api/userApi/UserRequest';
import validator from 'validator';
import { setUser } from '../redux/userSlice';
import { useEffect } from 'react';

function Login() {




  const dispatch = useDispatch();
  const [email, setEmail] = useState(null)
  const [isEmail,setIsEmail] = useState("")
  
  // const [password,IsPassword] = useState(null)
  const [isPassword,setIsPassword] = useState("")
  // setIsEmail(validator.isEmail(email))
  
  const [Password,setPassword] = useState(null)
  console.log(email,Password)
  
  const navigate = useNavigate();
  
  const handleEmail=(e)=>{
    const email=e.target.value
    setEmail(email)
    setIsEmail(validator.isEmail(email))
 
  }
  const handlePassword =(e)=>{
    const password= e.target.value
    setPassword(password)
    setIsPassword(password.length==6)
  }


  const sendEmail=async(e)=>{
    e.preventDefault() 
    try {
      dispatch(showLoading());

      const response = await userLogin({email,Password})
     
      
      dispatch(hideLoading());

      if (response.success) {
        console.log(response,"response.data.success")
        if(response.isAdmin){

          toast.error("User Does not exist");
          toast("redirecting to  home page admin");
          console.log("admin")
          // localStorage.setItem("userToken", response.data);
          navigate("/login");
        }else{
          console.log(response.user,"user DETAILS")
          toast.success(response.message);
          toast("redirecting to home page");
          console.log(response.user,"user")
         
          dispatch(setUser(response?.user))
          console.log("insided Dispatch")
          localStorage.setItem("userToken", response.data);
          navigate("/");
        }
        
      } 
      else {
        toast.error(response.message);
      }
    } catch (error) {
      // console.log(error)
      dispatch(hideLoading());
      toast.error("something went wrong");
    }
  };

const check =()=>{
  if(localStorage.getItem('userToken')){
    navigate('/')
  }
}

  useEffect(()=>{
    check()
  },[])

  return (
   

    <div>

  
    <div className='flex justify-center items-center h-screen  '>
<div class="w-full max-w-sm p-4 bg-white border border-gray-200  rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
<form class="space-y-8" action="">
    <h5 class="text-xl  font-medium text-gray-900 text-center  dark:text-white">Login Here</h5>
    <div>
      
        <label for="email"  class="block  mb-6 text-sm font-medium text-gray-900 dark:text-white">Email</label>
        <input type="email" name="email" id="email"  onChange={handleEmail} value={email}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Plese Enter Your Email" required />
    </div>
    
       {!isEmail &&email != null && <small className='text-red-500' >Please enter a valid Email </small>}
    
    <div>
        <label for="Password"  class="block  mb-6 text-sm font-medium text-gray-900 dark:text-white">Password</label>
        <input type="Password" name="Password" id="Password"  onChange={handlePassword}  value={Password}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Plese Enter 6 Digit Password" required />
    </div>
{!isPassword && Password !=null && <small className='text-red-500'>Please Enter a 6 digit Password</small>}
   {isEmail & isPassword &&
    <button type="submit" onClick={sendEmail}
     class=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login</button>
   }
    
</form>
    <Link to='/register' class="block mt-3 text-sm font-medium text-gray-900 dark:text-white text-center"  >CLICK HERE TO Register</Link>
</div>
</div>

</div>
  );
}

export default Login;






























// import React, { useState } from 'react'
// // import loginImg from '../../assets/login.jpg'
// import toast, { Toaster } from 'react-hot-toast'
// import { userLogin } from '../Api/userApi/UserRequest'
// import { Link, useNavigate } from 'react-router-dom'
// import validator from 'validator'


// function Login() {
//     const Navigate = useNavigate()
//     const [loginData, setloginData] = useState([])
//     const [isEmail, setIsEmail] = useState(false)
//     const [isPassword, setIsPassword] = useState(false)
//     const [submit, setSubmit] = useState(false)

//     const handleChange = (e) => {

//         const { value, name } = e.target
//         setloginData({ ...loginData, [name]: value })
//         setIsEmail(validator.isEmail(loginData?.email))
//         setIsPassword(loginData?.password?.length > 2)
        

//     }

//     const handleSubmit = async (e) => {

//         e.preventDefault()
//         setSubmit(true)

//         const response = await userLogin(loginData)
//         if (response.error) {
//             toast.error(response.error)
//         } else {
//             toast.success(response.msg)
//             Navigate('/')
//         }

//     }


//     return (
//         <div className='grid grid-cols-1 sm:grid-cols-2 h-screen w-full'>
//             <div className='hidden sm:block'>
//                 {/* <img className='w-full h-full object-cover' src={loginImg} alt="" /> */}
//             </div>
//             <div className='bg-gray-800 flex flex-col justify-center'>
//                 <Toaster position='top-center' reverseOrder={false} />
//                 <form className='max-w-md w-full mx-auto bg-gray-900 p-8 px-8 rounded-lg'>
//                     <h2 className='text-4xl text-white font-bold text-center'>Login</h2>
//                     <div className='flex flex-col text-gray-400 py-2'>
//                         <label>User Name</label>
//                         <input onChange={handleChange} name='email' className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' type="text" />
//                     </div>
//                     <div>
//                         {!loginData.email && submit ? <small className='text-red-500'>*Please enter an email</small> : null}
//                         {!isEmail && loginData.email ? <small className='text-red-500'>Please enter a valid email</small> : null}
//                     </div>
//                     <div className='flex flex-col text-gray-400 py-2 pb-6'>
//                         <label>Password</label>
//                         <input onChange={handleChange} className='rounded-lg bg-gray-700 mt-2 p-2 focus:border-blue-500 focus:bg-gray-800 focus:outline-none' name='password' type="password" />
//                     </div>
//                     <div>
//                         {!loginData.password && submit ? <small className='text-red-500'>*Please enter password</small> : null}
//                         {!isPassword && loginData.password ? <small className='text-red-500'>Please enter a valid password</small> : null}
//                     </div>
//                     {/* <div className='flex justify-between text-gray-400 py-2'>
//                     <p></p>
//                     <p>Forgot Password</p>
//                 </div> */}
//                     <button onClick={handleSubmit} className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/60 hover:shadow-teal-500/40 text-white font-semibold rounded-lg'>Sign In</button>
                    
//                     <div className='flex justify-between text-gray-400 py-2'>
//                     <p>Didn't have an account</p>
//                     <p> <Link to={'/register'}>Click here</Link>  </p>
//                 </div>
//                 </form>
//             </div>
//         </div>
//     )
// }

// export default Login;