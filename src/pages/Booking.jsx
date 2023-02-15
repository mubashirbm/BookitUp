import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Booking() {
  // const [room,setRoom]=useState("")
  // const location=useLocation()
  // const Room=location.state.room
  // // setRoom(Room)
  // console.log(room)
  return (
    <>
      <Navbar />
      <div className=" w-full bg-gray-900 ">
        <section className="container mx-auto px-6 flex items-start justify-center py-10 bg-gray-600 ">
          <div className="mr-12 flex text-xl w-full lg:text-2xl text-gray-800 bg-gray-700 dark:text-gray-900 font-bold lg:w-1/2">
            <div class="flex w-full flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            
              <div class="flex flex-col justify-between p-4 leading-normal">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Noteworthy technology acquisitions 2021
                </h5>
                <span>
                  
<div date-rangepicker class="flex items-center">
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <input name="start" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start"/>
  </div>
  <span class="mx-4 text-gray-500">to</span>
  <div class="relative">
    <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
    </div>
    <input name="end" type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date end"/>
</div>
</div>

                </span>
                <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Here are the biggest enterprise technology acquisitions of
                  2021 so far, in reverse chronological order.
                </p>
              </div>
              <div></div>
            </div>
            




            <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">



            <div class="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
              <form class="space-y-6" action="#">
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">
                  Sign in to our platform
                </h5>
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="name@company.com"
                    required
                    />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                    Your password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    required
                    />
                </div>
                <div class="flex items-start">
                  <div class="flex items-start">
                    <div class="flex items-center h-5">
                      <input
                        id="remember"
                        type="checkbox"
                        value=""
                        class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                        required
                      />
                    </div>
                    <label
                      for="remember"
                      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                      >
                      Remember me
                    </label>
                  </div>
                  <a
                    href="#"
                    class="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
                  >
                    Lost Password?
                  </a>
                </div>
                <button
                  type="submit"
                  class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                  Login to your account
                </button>
                <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                  Not registered?{" "}
                  <a
                    href="#"
                    class="text-blue-700 hover:underline dark:text-blue-500"
                    >
                    Create account
                  </a>
                </div>
              </form>
            </div>
              
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
