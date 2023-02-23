import React from 'react'
import { useLocation } from 'react-router-dom'
import { updateDate } from '../Api/userApi/UserRequest';
import Paypal from './Paypal';


export default function Payment() {



    var location=useLocation()
    var data=location?.state;
    var Id=data.roomDet.D.roomId
    console.log(data,"data")
    const UADate=data.roomDet.D.UA
    console.log(UADate,"det")
    const pay=async()=>{
      const data=await updateDate(Id,UADate)
      console.log(data,'returned Room Data')
    }
    
  return (
    <div>
      <button onClick={pay}>
      <Paypal/>
        click
      </button>
    </div>
  )
}
