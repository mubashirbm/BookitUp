
import React, { useState } from "react";
import ReactDOM from "react-dom"
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { bookRoom } from "../Api/userApi/UserRequest";


const PayPalButton = window.paypal.Buttons.driver("react", { React,ReactDOM });





export default function Paypal({roomDetails}) {
const navigate=useNavigate()
const [invoice,setInvoice]=useState("")
console.log(invoice)


       console.log(roomDetails,"Rooooooooooooooooooooooooooooooooo")
       const Id=roomDetails.roomId
       console.log( roomDetails.roomId)
       const onBooking = async()=>{
        try {
          const data= await bookRoom(Id,roomDetails)
          console.log(data,"for booking data")
          setInvoice(data)
          toast.success("Booked Successfully")
          console.log("booking success");
          // navigate("/booking", { state: { roomDetails: room } });
          navigate("/invoice")
          console.log(data,"for booking data")
        } catch (error) {
       console.log(error)
       toast.error("Booking Failed")   
        }

       }
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value:roomDetails.total,
          },
        },
      ],
    });
  };
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };
  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) =>{
         onApprove(data, actions)
        onBooking()}}
    />
  );
}


 
