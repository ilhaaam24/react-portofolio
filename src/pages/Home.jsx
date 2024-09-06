import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex flex-col py-20 px-6 h-auto min-h-screen justify-evenly lg:flex-row lg:justify-center lg:items-center lg:gap-24">
      {/* Profile Image with animation */}
      <motion.div className="flex justify-center items-center" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
        <img src="../src/assets/profile.jpg" alt="Profile" className="rounded-full h-[250px] w-[250px] md:h-[300px] md:w-[300px] lg:h-[350px] lg:w-[350px] object-cover" />
      </motion.div>

      {/* Text Section with animation */}
      <motion.div className="flex flex-col justify-center items-center px-4 text-center gap-3 lg:justify-start" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>
        <motion.div className="flex flex-col justify-center items-center " initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 1, duration: 0.8 }}>
          <p className="text-xl md:text-2xl text-center text-gray-800">Hello, I'm</p>
          <h2 className="text-3xl font-bold md:text-4xl text-black">Muhammad Ilham</h2>
          <h1 className="text-xl md:text-2xl ">Frontend Developer</h1>
        </motion.div>

        {/* Buttons with animation */}
        <motion.div className="flex gap-4 justify-center items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.5, duration: 0.5 }}>
          <a href="">
            <button className="flex-1 border border-[#3a4437] text-black px-3 py-2 rounded-full mt-4 w-32 hover:bg-[#1a2019] hover:text-white duration-500 text-[13px]">Download CV</button>
          </a>
          <a href="#contact">
            <button className="flex-1 bg-[#3a4437] text-white px-3 py-2 rounded-full mt-4 w-32 hover:bg-[#1a2019] duration-500 text-[13px]">Contact</button>
          </a>
        </motion.div>

        {/* Icons with animation */}
        <motion.div className="flex gap-4 justify-center items-center" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 2, duration: 0.8 }}>
          <a href="https://github.com/ilhaaam24" target="_blank">
            <FaGithub size={40} />
          </a>
          <a href="https://www.linkedin.com/in/muhammad-ilham24" target="_blank">
            <FaLinkedin size={40} />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;
