import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
const IntroWork = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

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
          className="p-5 md:p-14 bg-[#F5F5F5] flex-auto rounded-3xl"
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

          <h2 className="text-2xl md:text-4xl font-bold mb-4 pt-3">
            Browse my latest work
          </h2>
          <p className="text-[#333] text-sm font-normal leading-relaxed pb-3">
          Explore my latest projects, where I leverage cutting-edge technologies in web development and machine learning to create innovative digital solutions. My work focuses on enhancing user experiences and driving business growth through data-driven insights.
          </p>
          <Link to="/about">
            <button className="bg-black text-white py-4 px-5 font-bold rounded-3xl hover:bg-[#333] transition duration-300">
              More about me
            </button>
          </Link>
        </motion.div>

        {/* Second box */}
        <motion.div className="flex-auto" variants={boxVariant}>
          <img
            src="/Project/chiti.png"
            alt="Sample"
            className="w-[800px] h-full object-cover rounded-3xl"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IntroWork;
