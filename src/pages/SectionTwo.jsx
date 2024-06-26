import React from 'react'
import img4 from "../assets/images/img4.svg"
import img5 from "../assets/images/img5.svg"
import img6 from "../assets/images/img6.svg"
import img7 from "../assets/images/img7.svg"
import img8 from "../assets/images/img8.svg"
import img9 from "../assets/images/img9.svg"


const SectionTwo = () => {
    return (
        <div>
            <div className='flex px-0'>
                <img
                    loading="lazy"
                    srcSet={img4}
                    className="w-[20rem] aspect-[0.93] max-md:mt-10 max-md:max-w-full"
                />

                <img
                    loading="lazy"
                    srcSet={img5}
                    className=" w-[20rem] aspect-[0.93] max-md:mt-10 max-md:max-w-full"
                />
                <img
                    loading="lazy"
                    srcSet={img6}
                    className="w-[20rem] aspect-[0.93] max-md:mt-10 max-md:max-w-full"
                />
                <img
                    loading="lazy"
                    srcSet={img7}
                    className="w-[20rem] aspect-[0.93] max-md:mt-10 max-md:max-w-full"
                />
                <img
                    loading="lazy"
                    srcSet={img8}
                    className="w-[20rem] aspect-[0.93] max-md:mt-10 max-md:max-w-full"
                />
                <img
                    loading="lazy"
                    srcSet={img9}
                    className="w-[20rem] aspect-[0.93] max-md:mt-10 max-md:max-w-full"
                />
                
            </div>
            <div className='flex justify-between'>
                <div>
                    About us
                </div>
                <div>
                Payment pathways, built<br/> for you<br/>
                Transalliance Group. Money Out and Money In solutions give our customers the ability to complete cross-border, multi-currency transactions securely and at speed. And with a single provider for both payouts and pay-ins, say goodbye to the operational headaches of multi-supplier management

                </div>
            </div>
        </div>
    )
}

export default SectionTwo
