import React from 'react'
import img24 from "../assets/images/img24.svg";


const SectionFive = () => {
  return (
    <div>
      <div className='flex'>
        <div>
          <img src={img24} alt="" />
        </div>
        <div>
        <section className="py-20 mx-1 bg-gray-100">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-light">Speak to sales</h2>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
          <form>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">
                Email
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="email"
                id="email"
                name="email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Firstname
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="name"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">
                Lastname
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg"
                type="name"
                id="name"
                name="name"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="message">
                Message
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg"
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <div className='flex'>
              <input type="checkbox" />
              <p>
              I agree to receiving payment news and trends from Inpay, including updates to our products and services. I am aware that I can withdraw this consent at any time by contacting Inpay or unsubscribing via email. I agree to Inpay processing my personal data in accordance with its Privacy Policy.
              </p>
            </div>
            <button style ={{backgroundColor: "#5AAF87"}} className=" text-black px-6 py-2 rounded-lg hover:bg-blue-500">
              Submit
            </button>
            
          </form>
        </div>
      </section>
        </div>
      </div>
    </div>
  )
}

export default SectionFive
