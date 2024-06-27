import React from 'react'
import img1 from "../assets/images/img1.svg"
import img2 from "../assets/images/img2.svg"
import img3 from "../assets/images/img3.svg"


const SectionOne = () => {
    return (
        <div>

            <div style={{backgroundColor: "#122038"}}className=" w-full max-md:mt-10 max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:flex-col-reverse">
                    <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
                        <div className="flex flex-col self-stretch my-auto font-bold max-md:mt-10 max-md:max-w-full">
                            <div className=" text-yellow-500 leading-[54px] max-md:max-w-full max-md:text-4xl">
                                Simplified cross-border payment
                            </div>
                            <div className="mt-8 text-5xl max-md:text-lg text-white max-md:max-w-full">
                                We are the <br/>payments people
                            </div>
                            <div className="mt-8 text-3xl max-md:text-lg font-thin text-white max-md:max-w-full">
                                Transalliance Group.’s cross-border payments solutions connect organisations and communities globally to the network they need to thrive. Together, we make money move.
                            </div>

                        </div>
                    </div>
                    <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                        <img
                            loading="lazy"
                            srcSet={img1}
                            className="grow w-full aspect-[0.93] max-md:mt-10 max-md:max-w-full"
                        />
                    </div>
                </div>

                <div className='w-[80%] flex justify-end'  >
                    <img
                     loading="lazy"
                    srcSet={img3}
                    className="grow aspect-[3] max-md:mt-10 max-md:max-w-full"
                    />
                </div>

                {/* <div className='w-[50%]'>
                    <img
                     loading="lazy"
                    srcSet={img2}
                    className="grow aspect-[0.93] max-md:mt-10 max-md:max-w-full"
                    />
                </div> */}
            </div>
            

        </div>
    )
}

export default SectionOne
