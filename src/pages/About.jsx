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
    <div id="about" className="flex flex-col items-center justify-evenly  md:p-6 gap-6 md:min-h-screen md:py-10">
      <motion.div ref={ref} initial="hidden" animate={controls} variants={fadeInUp}>
        <p className="text-sm text-gray-600 text-center">Get to know more</p>
        <h1 className="text-3xl md:text-4xl font-bold text-center">About Me</h1>
      </motion.div>
      <div className="flex flex-col md:flex-row items-center justify-center  gap-8">
        <motion.img src="../src/assets/about.jpg" className="w-[250px] h-[250px] border-2 rounded-xl object-cover i" alt="Profile" initial="hidden" animate={controls} variants={fadeInLeft} />
        <motion.div className="flex justify-center items-center gap-6 w-1/2 md:h-[300px] flex-col" initial="hidden" animate={controls} variants={fadeInUp}>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col items-center h-full  w-[350px] md:w-full border border-black p-6 rounded-xl text-center">
              <SlBadge size={25} />
              <h2 className="text-lg font-bold">Experience</h2>
              <p className="text-sm text-gray-500"> Project Based Virtual Intern : Fullstack Developer BTPN Syariah x Rakamin Academy</p>
            </div>
            <div className="flex flex-col items-center h-full w-[350px] md:w-full border border-black p-6 rounded-xl text-center">
              <MdOutlineCastForEducation size={25} />
              <h2 className="text-lg font-bold">Education</h2>
              <p className="text-sm text-gray-500">• Universitas Negeri Surabaya</p>
              <p className="text-sm text-gray-500">• SMAN 2 Tanggul</p>
            </div>
          </div>
          <div className="w-[350px] md:w-full  ">
            <p className="text-sm text-gray-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis autem adipisci ad, molestiae quae neque repellendus est accusantium dignissimos quam hic fuga facilis non sint laboriosam corrupti optio facere eaque.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
