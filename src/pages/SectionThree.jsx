
import React from "react";
import img15 from "../assets/images/img15.svg";
import img16 from "../assets/images/img16.svg";
import img17 from "../assets/images/img17.svg";
import img18 from "../assets/images/img18.svg";
import img19 from "../assets/images/img19.svg";
 
const SectionThree = () => {
  return (
    <div className="flex flex-col lg:flex-row my-20 mx-20 px-4">
      <div className="flex-1 space-y-8 lg:space-y-12 mb-8 lg:mb-0">
        <div className="text-xl text-gray-500">Our Service</div>
        <div className="space-y-4 lg:space-y-6">
          <img src={img15} alt="Service 1" />
          <h2 className="text-2xl">
            We are your trusted partner
          </h2>
          <p className="text-gray-700">
            We are a dedicated and diligent team of<br/> payments specialists that’s
            committed to helping<br/> you unlock opportunity, create value and make<br/>
            payments happen, together.
          </p>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <img src={img16} alt="Service 2" />
          <h2 className="text-2xl">
            We provide the network you need
          </h2>
          <p className="text-gray-700">
            We open access to a resilient global network<br/> spanning 90+ countries
            that’s built to simplify<br/> complex challenges and move money at speed.
          </p>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <img src={img17} alt="Service 3" />
          <h2 className="text-2xl">
            We bring certainty through compliance
          </h2>
          <p className="text-gray-700">
            We were born with compliance at our heart.<br/> Licensed by the globally
            trusted Danish FSA,<br/> when we move money you can be confident that<br/> it
            gets to the right place with absolute accuracy.
          </p>
        </div>
        <div className="space-y-4 lg:space-y-6">
          <img src={img18} alt="Service 4" />
          <h2 className="text-2xl">We execute with expertise</h2>
          <p className="text-gray-700">
            We complete an industry-leading 99% of payments<br/> for customers in the
            fast-changing financial<br/> services, iGaming, corporate and NGO
            sectors,<br/> drawing on 16 years of proven expertise.
          </p>
        </div>
      </div>
      <div className="flex-1 space-y-8 lg:space-y-12 lg:pl-10">
        <div className="space-y-4 lg:space-y-6 mb-[10em]">
          <h2 className="text-5xl">
            The Transalliance Group Difference
          </h2>
          <p className="text-gray-500 text-2xl">
            Our global payments network is powered by passionate people,
            transparent customer relationships, and leading-edge technology.
          </p>
        </div>
        <div className="flex justify-center">
          <img
            src={img19}
            alt="Transalliance Group"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};
 
export default SectionThree;
 