// import { Button, Form,Input } from 'antd'
import React  from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios"
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux';
import { showLoading,hideLoading } from '../redux/alertsSlice';


import { useRef, useState, useEffect } from "react";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register';



// function Register() {
//   const dispatch = useDispatch()
//   const navigate = useNavigate()
//   const [name,setName] = useState("")
//    const [email,setEmail] = useState("")
//    const [password,setPassword] = useState("")
   
//   const Register= async(e) =>{
//     e.preventDefault() 
   
//     try {
//       dispatch(showLoading())
      
//       const response = await axios.post('http://localhost:5000/api/register',{name,email,password})
//       dispatch(hideLoading())
      
//       if(response.data.success){
//         toast.success(response.data.message)
//         toast("redirecting to login page")
//         navigate("/login")


//       }else{
//         toast.error(response.data.message)
//       }
//     } catch (error) {
//       dispatch(hideLoading())         
      
//       toast.error("something went wrong")
//     }
//   }

//   return (
//     // <div className="authentication">
//     //   <div className="authentication-form card p-3">
//     //     <h1 className="card-title">Register Here</h1>
//     //       <Form layout='vertical' onFinish={onFinish}>
//     //         <Form.Item label='Name' name='name'>
//     //           <Input placeholder= 'Name' />
//     //         </Form.Item>
//     //         <Form.Item label='Email' name='email'>
//     //           <Input type='email' placeholder= 'Email' />
//     //         </Form.Item>
//     //         <Form.Item label='Password' name='password'>
//     //           <Input type='password' placeholder= 'Password' />
//     //         </Form.Item>

//     //         <Button className= 'primary-button my-2' htmlType='submit'> Register</Button>

//     //         <Link to='/login' className='anchor mt-2'>CLICK HERE TO LOGIN</Link>

//     //       </Form>


//     //   </div>
//     // </div>



//     <div>

  
//     <div className='flex justify-center items-center h-screen  '>
// <div class="w-full max-w-sm p-4 bg-white border border-gray-200  rounded-lg shadow-md sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
// <form class="space-y-8" action="">
//     <h5 class="text-xl  font-medium text-gray-900 text-center  dark:text-white">Register Here</h5>
//     <div>
//         <label for="Name"  class="block  mb-6 text-sm font-medium text-gray-900 dark:text-white">Name</label>
//         <input type="Name" name="name" id="Name"  onChange={(e)=>{setName(e.target.value)}}  value={name}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Plese Enter Your Name" required />
//     </div>
//     <div>
//         <label for="email"  class="block  mb-6 text-sm font-medium text-gray-900 dark:text-white">Email</label>
//         <input type="email" name="name" id="email"  onChange={(e)=>{setEmail(e.target.value)}}  value={email}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Plese Enter Your Email" required />
//     </div>
//     <div>
//         <label for="Password"  class="block  mb-6 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//         <input type="password" name="password" id="Password"  onChange={(e)=>{setPassword(e.target.value)}}  value={password}class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="Plese Enter Your Password" required />
//     </div>
   
   
//     <button type="submit" onClick={Register} class=" w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Register</button>
//     <Link to='/login' class="block mt-3 text-sm font-medium text-gray-900 dark:text-white"  >Already Registered ? Login</Link>

// </form>
// </div>
// </div>

// </div>
//   );
// }

// export default Register;


const Register = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
      userRef.current.focus();
  }, [])

  useEffect(() => {
      setValidName(USER_REGEX.test(user));
  }, [user])

  useEffect(() => {
      setValidPwd(PWD_REGEX.test(pwd));
      setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd])

  useEffect(() => {
      setErrMsg('');
  }, [user, pwd, matchPwd])

  const handleSubmit = async (e) => {
      e.preventDefault();
      // if button enabled with JS hack
      const v1 = USER_REGEX.test(user);
      const v2 = PWD_REGEX.test(pwd);
      if (!v1 || !v2) {
          setErrMsg("Invalid Entry");
          return;
      }
      try {
          const response = await axios.post(REGISTER_URL,
              JSON.stringify({ user, pwd }),
              {
                  headers: { 'Content-Type': 'application/json' },
                  withCredentials: true
              }
          );
          console.log(response?.data);
          console.log(response?.accessToken);
          console.log(JSON.stringify(response))
          setSuccess(true);
          //clear state and controlled inputs
          //need value attrib on inputs for this
          setUser('');
          setPwd('');
          setMatchPwd('');
      } catch (err) {
          if (!err?.response) {
              setErrMsg('No Server Response');
          } else if (err.response?.status === 409) {
              setErrMsg('Username Taken');
          } else {
              setErrMsg('Registration Failed')
          }
          errRef.current.focus();
      }
  }

  return (
      <>
          {success ? (
              <section>
                  <h1>Success!</h1>
                  <p>
                      <a href="#">Sign In</a>
                  </p>
              </section>
          ) : (
              <section>
                  <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                  <h1>Register</h1>
                  <form onSubmit={handleSubmit}>
                      <label htmlFor="username">
                          Username:
                          {/* <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hide"} />
                          <FontAwesomeIcon icon={faTimes} className={validName || !user ? "hide" : "invalid"} /> */}
                      </label>
                      <input
                          type="text"
                          id="username"
                          ref={userRef}
                          autoComplete="off"
                          onChange={(e) => setUser(e.target.value)}
                          value={user}
                          required
                          aria-invalid={validName ? "false" : "true"}
                          aria-describedby="uidnote"
                          onFocus={() => setUserFocus(true)}
                          onBlur={() => setUserFocus(false)}
                      />
                      <p id="uidnote" className={userFocus && user && !validName ? "instructions" : "offscreen"}>
                          {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                          4 to 24 characters.<br />
                          Must begin with a letter.<br />
                          Letters, numbers, underscores, hyphens allowed.
                      </p>


                      <label htmlFor="password">
                          Password:
                          {/* <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                          <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} /> */}
                      </label>
                      <input
                          type="password"
                          id="password"
                          onChange={(e) => setPwd(e.target.value)}
                          value={pwd}
                          required
                          aria-invalid={validPwd ? "false" : "true"}
                          aria-describedby="pwdnote"
                          onFocus={() => setPwdFocus(true)}
                          onBlur={() => setPwdFocus(false)}
                      />
                      <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                          {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                          8 to 24 characters.<br />
                          Must include uppercase and lowercase letters, a number and a special character.<br />
                          Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                      </p>


                      <label htmlFor="confirm_pwd">
                          {/* Confirm Password:
                          <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                          <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} /> */}
                      </label>
                      <input
                          type="password"
                          id="confirm_pwd"
                          onChange={(e) => setMatchPwd(e.target.value)}
                          value={matchPwd}
                          required
                          aria-invalid={validMatch ? "false" : "true"}
                          aria-describedby="confirmnote"
                          onFocus={() => setMatchFocus(true)}
                          onBlur={() => setMatchFocus(false)}
                      />
                      <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                          {/* <FontAwesomeIcon icon={faInfoCircle} /> */}
                          Must match the first password input field.
                      </p>

                      <button disabled={!validName || !validPwd || !validMatch ? true : false}>Sign Up</button>
                  </form>
                  <p>
                      Already registered?<br />
                      <span className="line">
                          {/*put router link here*/}
                          <a href="#">Sign In</a>
                      </span>
                  </p>
              </section>
          )}
      </>
  )
}

export default Register