import { MdOutlineEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col min-h-screen">
      {/* Container for contact info */}
      <div className="flex flex-col items-center justify-center flex-grow my-12 ">
        <p className="text-sm text-gray-600">Get in Touch</p>
        <h1 className="text-3xl font-bold">Contact Me</h1>
        <div className="flex flex-col gap-6 mt-6 md:flex-row items-center border border-gray-600 rounded-3xl py-8 px-4">
          <div className="flex items-center gap-2 mt-4 px-4">
            <MdOutlineEmail size={30} />
            <p className="text-base">muhammadilhaam@gmail.com</p>
          </div>
          <div className="flex items-center gap-2 mt-4">
            <FaLinkedin size={30} />
            <p className="text-base">Muhammad Ilham</p>
          </div>
        </div>
      </div>

      {/* Footer always at the bottom */}
      <Footer />
    </div>
  );
};

export default Contact;
