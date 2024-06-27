import React from 'react'
import img15 from "../assets/images/img15.svg"
import img16 from "../assets/images/img16.svg"
import img17 from "../assets/images/img17.svg"
import img18 from "../assets/images/img18.svg"
import img19 from "../assets/images/img19.svg"
import img14 from "../assets/images/img14.svg";




const SectionThree = () => {
    return (
        <div className='flex'>
            <div>
                <div>
                    our service
                </div>
                <div>
                    <img src={img15} alt="" />
                    <h2>
                        We are your trusted partner
                    </h2>
                    <p>
                        We are a dedicated and diligent team of payments specialists that’s committed to helping you unlock opportunity, create value and make payments happen, together.
                    </p>
                </div>
                <div>
                    <img src={img16} alt="" />
                    <h2>
                        We provide the network you need
                    </h2>
                    <p>
                        We open access to a resilient global network spanning 90+ countries that’s built to simplify complex challenges and move money at speed.
                    </p>
                </div>
                <div>
                    <img src={img17} alt="" />
                    <h2>
                        We bring certainty through compliance
                    </h2>
                    <p>
                        We were born with compliance at our heart. Licensed by the globally trusted Danish FSA, when we move money you can be confident that it gets to the right place with absolute accuracy.
                    </p>
                </div>
                <div>
                    <img src={img18} alt="" />
                    <h2>
                        We execute with expertise
                    </h2>
                    <p>
                        We complete an industry-leading 99% of payments for customers in the fast-changing financial services, iGaming, corporate and NGO sectors, drawing on 16 years of proven expertise.
                        .
                    </p>
                </div>

            </div>
            <div>
                <div>
                    <h2>
                        The Transalliance Group. difference

                    </h2>
                    <p>
                        Our global payments network is powered by passionate people, transparent customer relationships, and leading-edge technology.

                    </p>
                </div>
                <div>
                    <img src={img19} alt="" />
                </div>
            </div>
            <div className="flex items-start">
                
                <div className="flex-1 rounded-tl-lg h-80 bg-red-500">
                    <img src={img14} alt="" />
                </div>
                <div className="flex-1 mt-[5.5rem] bg-green-500">
                    <div className="pt-10 pl-80 pr-10">
                        <h2 className="text-3xl">The human-powered payments network</h2>
                        <p>
                            Driven by a team of over 200 global payments experts with absolute
                            dedication to solving our customers’ most complex cross-border
                            payments challenges.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SectionThree
