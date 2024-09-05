import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
const Contact = () => {

const form = useRef();
  
const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3nynqjh", "template_ilt2syc", form.current, {
        publicKey: "iZBcvU_iu6YuXcPqd",
      })
      .then(
        () => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your message has been sent!",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log("Pesan berhasil dikirim!");
          console.log(e.target[0].value);
          console.log(e.target[1].value);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact" className="flex flex-col items-center justify-center min-h-screen gap-8">
      <h1 className="text-4xl font-bold">Get in touch </h1>
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-16 p-4">
        <div className="flex flex-col gap-4 md:gap-8">
          <h2 className="text-2xl md:text-3xl">Don't be shy</h2>
          <p className="w-full md:w-[400px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod impedit illum quaerat quasi alias. Iste dolor vel tempore unde et?</p>
          <div className="flex gap-4 items-center">
            <MdOutlineEmail size={24} />
            <p>mi1797128@gmail.com</p>
          </div>
          <div className="flex gap-4 items-center">
            <BsFillTelephoneFill size={24} />
            <p>+6281615697675</p>
          </div>
        </div>
        <form onSubmit={sendEmail} ref={form} className="flex flex-col gap-4 md:gap-6 items-center w-full md:w-auto">
          <input type="text" name="user_name" id="user_name" placeholder="Full Name" className="p-3 rounded-md w-full md:w-[400px] outline-none text-[#697565]"  required/>
          <input type="email" name="user_email" id="user_email" placeholder="Email" className="p-3 rounded-md w-full md:w-[400px] outline-none text-[#697565]"  required/>
          <textarea name="message" id="message" cols="40" rows="5" placeholder="Your Message" className="p-3 rounded-md w-full md:w-[400px] outline-none text-[#697565]" required></textarea>
          <button type="submit" className="bg-[#697565] text-white px-6 py-2 rounded-lg w-full md:w-28">Send</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
