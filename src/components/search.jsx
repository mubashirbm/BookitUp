import React from 'react'


function Booking() {


  return (
    <div id='deals' className="max-w-[1140px] m-auto w-full p-4">
        <form action="" className='lg:flex lg:justify-between w-full items-center'>
            <div className="flex flex-col my-2 py-2">
                <label>Destination</label>
                <select name="" id="" className='lg:w-[300px] md:w-full border rounded-md p-2'>
                    <option value="">London</option>
                    <option value="">MalDives</option>
                    <option value="">Srilanka</option>
                    <option value="">India</option>
                </select>
            </div>
            <div className="flex w-full">
                <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                    <label>CheckIn</label>
                    <input type="date" className='border rounded-md p-2' />
                </div>
                <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
                    <label>CheckOut</label>
                    <input type="date" className='border rounded-md p-2' />
                </div>
            </div>
            <div className="flex flex-col w-full my-2 p-2">
                <label>Search</label>
                <button className='w-full'>Rate & availabilites</button>
            </div>
        </form>
    </div>
  )
}

export default Booking