
import React from "react";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });
export default function Paypal({Room}) {
       console.log(Room,"Rooooooooooooooooooooooooooooooooo")
       const onBooking =()=>{
        console.log("booking success");
       }
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: Room.D.total,
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


 
