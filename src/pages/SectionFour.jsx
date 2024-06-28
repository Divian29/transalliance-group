import React from "react";
import img20 from "../assets/images/img20.svg";
import img21 from "../assets/images/img21.svg";
import img22 from "../assets/images/img22.svg";
import img23 from "../assets/images/img23.svg";
 
const SectionFour = () => {
  return (
    <div className="my-20 px-4">
      <div className="mb-8">
        <h2 className="text-5xl mb-10">Sectors we serve</h2>
        <p className="text-2xl text-gray-700 w-[65%] mb-20">
          We simplify the complexities of cross-border payments in some of the
          world’s most demanding sectors. Learn more about who we serve and how
          we add value below.
        </p>
      </div>
      <div className="mx-10 grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img src={img20} alt="" className="w-3/4 md:w-full" />
        </div>
        <div className="flex justify-center">
          <img src={img22} alt="" className="w-3/4 md:w-full" />
        </div>
        <div className="flex justify-center">
          <img src={img21} alt="" className="w-3/4 md:w-full" />
        </div>
        <div className="flex justify-center">
          <img src={img23} alt="" className="w-3/4 md:w-full" />
        </div>
      </div>
    </div>
  );
};
 
export default SectionFour;
 