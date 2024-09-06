import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div id="contact" className="flex flex-col items-center justify-center my-12 min-h-screen">
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
