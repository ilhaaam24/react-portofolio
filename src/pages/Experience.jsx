import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaBootstrap, FaLaravel } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFlutter, SiMysql } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col items-center justify-center gap-10 px-2 min-h-screen">
      <div className="text-center">
        <p className="text-lg text-gray-600">Explore</p>
        <h1 className="text-3xl font-bold">My Skills</h1>
      </div>

      {/* Container for Frontend and Backend */}
      <div className="flex flex-col md:flex-row items-start justify-center gap-10 px-4 w-4/5">
        {/* Frontend Development */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 justify-start border border-gray-600 rounded-3xl py-8 px-4 w-full md:w-1/2 min-h-[320px]">
          <h1 className="text-xl md:text-2xl font-bold text-gray-600">Frontend Development</h1>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-4">
            <li className="text-6xl" style={{ color: "#E34F26" }}>
              <FaHtml5 />
            </li>
            <li className="text-6xl" style={{ color: "#1572B6" }}>
              <FaCss3 />
            </li>
            <li className="text-6xl" style={{ color: "#563D7C" }}>
              <FaBootstrap />
            </li>
            <li className="text-6xl" style={{ color: "#38B2AC" }}>
              <RiTailwindCssFill />
            </li>
            <li className="text-6xl" style={{ color: "#F7DF1E" }}>
              <IoLogoJavascript />
            </li>
            <li className="text-6xl" style={{ color: "#61DAFB" }}>
              <FaReact />
            </li>
            <li className="text-6xl" style={{ color: "#61DAFB" }}>
              <SiFlutter />
            </li>
          </ul>
        </motion.div>

        {/* Backend Development */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6 md:justify-start border border-gray-600 rounded-3xl px-4 py-8 w-full md:w-1/2 md:min-h-[320px]">
          <h1 className="text-xl md:text-2xl font-bold text-gray-600">Backend Development</h1>
          <ul className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-4">
            <li className="text-6xl" style={{ color: "#339933" }}>
              <FaNodeJs />
            </li>
            <li className="text-6xl" style={{ color: "#339933" }}>
              <SiExpress />
            </li>
            <li className="text-6xl" style={{ color: "#FF2D20" }}>
              <FaLaravel />
            </li>
            <li className="text-6xl" style={{ color: "#00758F" }}>
              <SiMysql />
            </li>
            <li className="text-6xl" style={{ color: "#00758F" }}>
              <FaGolang />
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
