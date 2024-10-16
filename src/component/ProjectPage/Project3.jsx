import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const Project3 = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.4,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const divVariants = {
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
    <motion.div
      ref={ref}
      className="max-w-[930px] lg:mx-auto  bg-[#F5F5F5] rounded-3xl my-6 mx-6"
      initial="hidden"
      animate={controls}
      variants={divVariants}
    >
      {/* Container */}
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 order-2 md:order-1">
          <img
            src="/Project/boat.png"
            alt="Project"
            className="w-full h-full object-cover rounded-b-3xl md:rounded-l-3xl md:rounded-br-none p-0"
          />
        </div>

        <div className="flex-1 relative px-6 pt-6 order-1 md:order-2">
                   {/*add project link here*/}

          <a href="https://github.com/RohitKumar7830/DBMSPROJECT" target="_blank" rel="noopener noreferrer">
            <div className="absolute top-5 right-5">
              <button className="bg-white p-2 md:p-3 rounded-md md:rounded-xl">
                <img
                  src="/Home/arrow.svg"
                  alt="arrow"
                  className="w-5 h-5 md:w-6 md:h-6 object-cover hover:scale-75 transition duration-300"
                />
              </button>
            </div>
          </a>

          {/* Content */}
          <div className="mt-16">
            <div>
              <img
                src="/Home/ml1.png"
                alt="small image"
                className="w-10 h-10 mb-3"
              />
            </div>
            <h2 className="text-xl md:text-3xl font-semibold mb-2 md:mb-6 max-w-[400px]">
            Sanchari - A travel Guide
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Fullstack Development<span className="px-2">-</span> May 2024
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Project3;
