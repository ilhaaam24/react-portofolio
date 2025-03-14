import { motion } from "framer-motion";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5, FaCss3, FaReact, FaNodeJs, FaBootstrap, FaLaravel, FaFigma, FaGithub } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress, SiFlutter, SiLaragon, SiMysql, SiPostman } from "react-icons/si";
import { FaGolang } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

const Experience = () => {
  return (
    <div id="experience" className="flex flex-col items-center justify-center gap-10  min-h-screen mt-20">
      <div className="text-center">
        <p className="text-lg text-gray-700">Explore</p>
        <h1 className="text-3xl font-bold">My Skills</h1>
      </div>

      {/* Container for Skills */}
      <div className="flex flex-wrap justify-center  gap-8 w-full max-w-5xl">
        {/* Frontend Development */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center  gap-8 border border-gray-700 rounded-3xl py-4 px-6  w-full  md:w-2/5 ">
          <h1 className="text-lg md:text-xl font-semibold text-gray-700">Frontend Development</h1>
          <ul className="flex flex-wrap justify-center gap-8">
            <li className="text-6xl text-[#E34F26]">
              <FaHtml5 />
            </li>
            <li className="text-6xl text-[#1572B6]">
              <FaCss3 />
            </li>
            <li className="text-6xl text-[#563D7C]">
              <FaBootstrap />
            </li>
            <li className="text-6xl text-[#38B2AC]">
              <RiTailwindCssFill />
            </li>
            <li className="text-6xl text-[#F7DF1E]">
              <IoLogoJavascript />
            </li>
            <li className="text-6xl text-[#61DAFB]">
              <FaReact />
            </li>
            <li className="text-6xl text-[#61DAFB]">
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
          className="flex flex-col items-center justify-center  gap-8 border border-gray-700 rounded-3xl p-6   w-full  md:w-2/5">
          <h1 className="text-lg md:text-xl font-semibold text-gray-700">Backend Development</h1>
          <ul className="flex flex-wrap gap-8 justify-center">
            <li className="text-6xl text-[#339933]">
              <FaNodeJs />
            </li>
            <li className="text-6xl text-[#131313]">
              <SiExpress />
            </li>
            <li className="text-6xl text-[#FF2D20]">
              <FaLaravel />
            </li>
            <li className="text-6xl text-[#00758F]">
              <SiMysql />
            </li>
            <li className="text-6xl text-[#00758F]">
              <FaGolang />
            </li>
          </ul>
        </motion.div>

        {/* Tools */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center  gap-8 border border-gray-700 rounded-3xl p-6   w-full  md:w-2/5">
          <h1 className="text-lg md:text-xl font-semibold text-gray-700">Tools</h1>
          <ul className="flex flex-wrap gap-8 justify-center">
            <li className="text-6xl text-[#00758F]">
              <VscVscode />
            </li>
            <li className="text-6xl text-black">
              <FaFigma />
            </li>
            <li className="text-6xl text-black">
              <FaGithub />
            </li>
            <li className="text-6xl text-orange-500">
              <SiPostman />
            </li>
            <li className="text-6xl text-[#47a6ff]">
              <SiLaragon />
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
