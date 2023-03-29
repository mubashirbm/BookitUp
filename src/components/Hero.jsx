import React from 'react'

export default function Hero({Hotel}) {
  return (
    <div className='py-8 max-w-[1140px] m-auto w-full p-4'>
     <div className=" grid lg:grid-cols-4 md:grid-cols-4  sm:grid-cols-2 grid-cols-1 gap-4 px-4">
      {Hotel?.map((data, i) => (
                    <div className='pListItem rounded-xl overflow-hidden cursor-pointer ' key={i} 
                    // onClick={() => handleSearch(data.type)}
                    >
                        <img src={data.images[0]} alt="" className="pListImg  h-60 object-cover w-96 " />
                        <h6 className='text-center'>{data.location}</h6>
                        <div className="pListTitles">
                            <h1 className='font-bold mt-3'>{data.type}</h1>
                            <h1>{data.count} {data.type} </h1>
                        </div>
                    </div>
                ))}
      </div>
    </div>
  )
}
