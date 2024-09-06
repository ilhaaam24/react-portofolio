import React, { useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaLinkedin } from "react-icons/fa";
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
    <div id="contact" className="flex flex-col items-center my-12">
      <p className="text-sm text-gray-600">Get in Touch</p>
      <h1 className="text-3xl font-bold ">Contact Me</h1>
      <div className="flex flex-col gap-6 mt-6 md:flex-row items-center border-2 border-gray-600 rounded-3xl py-8 px-4 ">
        <div className="flex items-center gap-2 mt-4">
          <MdOutlineEmail size={40} />
          <p className="text-lg">mi1797128@gmail.com</p>
        </div>
        <div className="flex items-center gap-2 mt-4">
          <FaLinkedin size={40} />
          <p className="text-lg">Muhammad Ilham</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
