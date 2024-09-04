import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-16">
      <h1 className="text-4xl font-bold">Get in touch </h1>
      <div className=" flex justify-between gap-16">
        <div className="flex flex-col gap-8">
          <h2 className="text-3xl">Don't be shy</h2>
          <p className="w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod impedit illum quaerat quasi alias. Iste dolor vel tempore unde et?</p>
          <div className="flex gap-4">
            <MdOutlineEmail size={30} />
            <p>mi1797128@gmail.com</p>
          </div>
          <div className="flex gap-4">
            <BsFillTelephoneFill size={30} />
            <p>+6281615697675</p>
          </div>
        </div>
        <form action="" className=" flex flex-col gap-6 items-center">
          <input type="text" placeholder="Full Name" className="p-3 rounded-md w-full outline-none text-[#697565]" />
          <textarea name="message" id="message" cols="40" rows="10" placeholder="Your Message" className="p-3 rounded-md outline-none text-[#697565]"></textarea>
          <button className="bg-[#697565] text-white px-6 py-2 rounded-lg w-28 ">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
