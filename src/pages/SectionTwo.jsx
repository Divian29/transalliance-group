import React from "react";
import img4 from "../assets/images/img4.svg";
import img5 from "../assets/images/img5.svg";
import img6 from "../assets/images/img6.svg";
import img7 from "../assets/images/img7.svg";
import img8 from "../assets/images/img8.svg";
import img9 from "../assets/images/img9.svg";
import img10 from "../assets/images/img10.svg";
import img11 from "../assets/images/img11.svg";
import img12 from "../assets/images/img12.svg";
import img13 from "../assets/images/img13.svg";
import Button from "../components/Button";
 
const SectionTwo = () => {
  return (
    <div className="">
      <div className="flex flex-wrap justify-center ">
        <img
          loading="lazy"
          srcSet={img4}
          className="w-32 h-32 object-contain"
        />
        <img
          loading="lazy"
          srcSet={img5}
          className="w-32 h-32 object-contain"
        />
        <img
          loading="lazy"
          srcSet={img6}
          className="w-32 h-32 object-contain"
        />
        <img
          loading="lazy"
          srcSet={img7}
          className="w-32 h-32 object-contain"
        />
        <img
          loading="lazy"
          srcSet={img8}
          className="w-32 h-32 object-contain"
        />
        <img
          loading="lazy"
          srcSet={img9}
          className="w-32 h-32 object-contain"
        />
      </div>
      <div className="mx-20 my-20">
        <div className="flex flex-col text-gray-700 md:flex-row justify-between">
          <div className="flex-1 text-lg mb-4 md:mb-0">About us</div>
          <div className="flex-1 leading-relaxed">
            <p className="text-4xl text-black">
              Payment pathways, built
              <br /> for you
            </p>
            Transalliance Group. Money Out and Money In solutions give our
            customers the ability to complete cross-border, multi-currency
            transactions securely and at speed. And with a single provider for
            both payouts and pay-ins, say goodbye to the operational headaches
            of multi-supplier management
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex justify-center">
              <img loading="lazy" src={img10} className="w-3/4 md:w-full" />
            </div>
            <div className="flex justify-center">
              <img loading="lazy" src={img11} className="w-3/4 md:w-full" />
            </div>
            <div className="flex justify-center">
              <img loading="lazy" src={img12} className="w-3/4 md:w-full" />
            </div>
            <div className="flex justify-center">
              <img loading="lazy" src={img13} className="w-3/4 md:w-full" />
            </div>
          </div>
        </div>
        <div className="flex justify-end">
          <Button>learn more</Button>
        </div>
      </div>
    </div>
  );
};
 
export default SectionTwo;
 
