import React from 'react'
import bannerImg from '../images/banner.jpeg'

function Banner() {
    return (
        <div className="w-full h-[90vh]">
            <img src={bannerImg} alt="" className='w-full h-full object-cover' />
            <div className='max-w-[1140px] m-auto'>
                <div className="absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4">
                    <h1 className='font-bold text-4xl'>Find Your special hotels</h1>
                    <h2 className='text-4xl py-4 italic'>with BookItUp</h2>
                    <p>
                        hfvcb ldkshjfcbilheasfvcbhegjhrvsgegjsrfvuighebisygvjfhkgcveskj
                        fkiegfw igf isekyfgaygrfsjkgbrfvsbvgfjcbwugfcgsvfucegsvufcgeusy
                        gfvciesukgfciuegsrfkcbweskgsbfv cygevs fgivgcbbesig gesuyt ue syfgywaufksj
                        gcb w3kusygrfceysgtfiujhesb fochbsasolw3ghfdhcq lgwf svzfhcb jszghcb usgehbjd.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Banner