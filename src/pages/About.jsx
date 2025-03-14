import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { MdOutlineCastForEducation } from "react-icons/md";
import { SlBadge } from "react-icons/sl";

const About = () => {
  // Control animation with framer-motion's useAnimation
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.1, // Start animation when 10% of the section is in view
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  // Animation variants for different elements
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5 } },
  };

  const fadeInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 1.5 } },
  };

  return (
    <div id="about" className="flex flex-col  justify-evenly  gap-6 md:min-h-screen md:py-10">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeInUp}>
        <p className="text-sm text-gray-700 text-center">Get to know more</p>
        <h1 className="text-3xl md:text-4xl font-bold text-center">About Me</h1>
      </motion.div>
      <div className="flex flex-col items-center justify-center  gap-8">
        <div className="flex flex-col gap-8 justify-center items-center ">
          <motion.img src="/assets/aboutbw.jpg" loading="lazy" className="w-[250px] h-[250px] border-2 rounded-xl object-cover i" alt="Profile" initial="hidden" animate={controls} variants={fadeInLeft} />

          <div className="w-[350px] md:w-1/2  ">
            <p className="text-sm text-center text-gray-800">
              Hey! I'm Muhammad Ilham, a frontend dev studying at Universitas Negeri Surabaya. Super hyped about going fullstack! Always grinding, learning new tech, and building cool stuff. Gotta master both frontend & backend to be that
              all-rounder dev👾
            </p>
          </div>
        </div>
        <motion.div className=" flex flex-col  md:flex-row  gap-6  md:h-[300px] " initial="hidden" animate={controls} variants={fadeInUp}>
          {/* education */}
          <div className="flex flex-col    w-[350px] md:w-full border border-black p-6 rounded-xl">
            <div className="flex flex-col items-center ">
              <MdOutlineCastForEducation size={25} />
              <h2 className="text-lg font-bold">Education</h2>
            </div>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="text-sm text-gray-700">Universitas Negeri Surabaya</li>
              <li className="text-sm text-gray-700">SMAN 2 Tanggul</li>
            </ul>
          </div>

          {/* experience */}
          <div className="flex flex-col items-center   w-[350px] md:w-full border border-black p-6 rounded-xl ">
            <SlBadge size={25} />
            <h2 className="text-lg font-bold">Experience</h2>
            <ul className="mt-4 flex flex-col gap-2">
              <li className="text-sm text-gray-700 ">Project Based Virtual Intern : Fullstack Developer BTPN Syariah x Rakamin Academy</li>
              <li className="text-sm text-gray-700">Project Based Virtual Intern : Mobile Developer Bank Mandiri x Rakamin Academy</li>
              <li className="text-sm text-gray-700">Web Development - Kersa ID</li>
              <li className="text-sm text-gray-700">Mobile Development - SLP Community</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
