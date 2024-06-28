import React from "react";
import Button from "./Button";
import img26 from "../assets/images/img26.svg";
import img27 from "../assets/images/img27.svg";
import img28 from "../assets/images/img28.svg";
import logo1 from "../assets/images/logo1.svg";


 
const Footer = () => {
  return (
    <div className="flex flex-col p-8 pl-40">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="flex items-center mb-4">
            <img src={logo1} alt="logo" className="w-12 h-12 mr-2" />
            <div className="text-xl">Transalliance Group</div>
          </div>
          <Button className="mr-20 my-10">Contact Us</Button>
        </div>
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="text-xl font-semibold mb-4">Offices</div>
          <div>
            <p>Denmark:</p>
            <p>Toldbodgade 55B</p>
            <p>1253, Copenhagen</p>
            <p>United Kingdom:</p>
          </div>
          <div className="mt-5">
            <p>1 Poultry</p>
            <p>EC2R 8EJ, London</p>
            <p>info@inpay.com</p>
            <p>Phone: +45 88 610 600</p>
          </div>
        </div>
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="text-xl font-semibold mb-4">Solutions</div>
          <div>Money Out</div>
          <div>Money In</div>
        </div>
        <div className="flex flex-col mb-8 md:mb-0">
          <div className="text-xl font-semibold mb-4">Sectors</div>
          <div>Financial services</div>
          <div>iGaming</div>
          <div>Corporates</div>
          <div>NGOs</div>
        </div>
        <div className="flex flex-col">
          <div className="text-xl font-semibold mb-4">Other</div>
          <div>About Us</div>
          <div>News & Insights</div>
          <div>Compliance</div>
          <div>Careers</div>
          <div>Contact us</div>
        </div>
      </div>
      <hr className="my-4 border-gray-300" />
      <div className="flex flex-col self-end mr-5">
        <div className="text-xl font-semibold mb-4">Social Media</div>
        <div className="flex space-x-4">
          <img src={img26} alt="facebook" className="w-8 h-8" />
          <img src={img27} alt="twitter" className="w-8 h-8" />
          <img src={img28} alt="instagram" className="w-8 h-8" />
        </div>
      </div>
    </div>
  );
};
 
export default Footer;
 