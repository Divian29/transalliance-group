import React from 'react'
import img20 from "../assets/images/img20.svg";
import img21 from "../assets/images/img21.svg";
import img22 from "../assets/images/img22.svg";
import img23 from "../assets/images/img23.svg";
import LineBreak from '../components/LineBreak';




const SectionFour = () => {
    return (
        <div className='flex'>
            <div>
                <div>
                    <h2>
                        Sectors we serve
                    </h2>
                    <p>
                        We simplify the complexities of cross-border payments in some of the world’s most <br />demanding sectors. Learn more about who we serve and how we add value below.
                    </p>
                </div>
                <div>
                    <img src={img20} alt="" />
                    <img src={img21} alt="" />
                </div>

            </div>
            <div>
                <img src={img22} alt="" />
                <img src={img23} alt="" />
            </div>

        </div>
    )
}

export default SectionFour
