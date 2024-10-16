import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const Intro = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const boxVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.4,
      },
    },
  };

  return (
    <div ref={ref} className="max-w-[980px] mx-auto px-6 pt-6">
      {/* Container */}
      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial="hidden"
        animate={controls}
        variants={boxVariant}
      >
        {/* First box */}
        <motion.div
          className="p-5 md:p-14 bg-[#F5F5F5] flex-1 rounded-3xl"
          variants={boxVariant}
        >
          <div className="flex items-center mb-4">
            <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center mr-4">
              <img
                src="/Home/userAvatar.png"
                alt="Profile"
                className="w-8 h-8 rounded-full object-contain"
              />
            </div>

            {/* Button */}
            <Link
              to="/contact"
              className="relative bg-white text-[#333] text-sm border font-medium px-2 py-2 rounded-full flex items-center bottom-[-8px] hover:scale-105 transition-transform duration-300 ease-in-out hover:border-gray-400"
            >
              Let&apos;s chat
              <span>
                <img
                  src="/Home/chat.png"
                  alt="Chat Icon"
                  className="w-5 h-5 ml-2 object-cover"
                />
              </span>
            </Link>
          </div>

          <p className="text-2xl md:text-3xl  mb-4 pt-4">
            I’m Rohit Kumar, Full Stack Developer with AI/ML Expertise.
          </p>
          <p className="text-[#333] text-lg font-normal leading-relaxed text-justify opacity-75">
          Enthusiastic developer with a strong foundation in software development, web technologies, and data analysis. Experienced in generative AI and machine learning, with hands-on expertise in retrieval-augmented generation (RAG) systems and Long Short-Term Memory (LSTM) networks. Eager to leverage my skills to drive innovation and tackle complex challenges in dynamic, tech-driven environments.
          </p>
        </motion.div>

        {/* Second box */}
        <motion.div className="flex-1" variants={boxVariant}>
          <img
            src="/Home/profile.jpeg"
            alt="Sample"
            className="w-full h-full object-cover rounded-3xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Intro;
