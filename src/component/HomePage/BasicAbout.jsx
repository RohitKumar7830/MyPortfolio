import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const imagesPartOne = [
  "/Home/sliderimg/futuristic-business-scene-with-ultra-modern-ambiance.jpg",
  "/Home/sliderimg/futuristic-new-year-s-eve-celebration.jpg",
  "/Home/sliderimg/group-business-people-working-office.jpg",
  "/Home/sliderimg/interior-designer-working-out-office.jpg",
];

const imagesPartTwo = [
  "/Home/sliderimg/young-man-woman-protective-glasses-doing-experiments-robotics-laboratory.jpg",
  "/Home/sliderimg/interior-designer-working-out-office.jpg",
  "/Home/sliderimg/group-business-people-working-office.jpg",
  "/Home/sliderimg/futuristic-business-scene-with-ultra-modern-ambiance.jpg",
];

const BasicAbout = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    if (inView) {
      controls.start("visible");
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [controls, inView]);

  const isSmallScreen = windowWidth < 768;

  const divVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="max-w-[980px] mx-auto px-6 py-7"
      initial="hidden"
      animate={controls}
      variants={divVariants}
    >
      <div className="bg-[#F5F5F5] w-full rounded-3xl flex flex-col md:flex-row items-center overflow-hidden">
        {/* Second half: appear first on small screens */}
        <div className="md:w-1/2 md:pl-8 mt-6 md:mt-0 order-1 md:order-2 p-8 md:p-0">
          <p className="text-3xl  mb-4">
          I have been designing software products for 2 years
          </p>
          <p className="text-[#333] text-lg font-normal leading-relaxed mb-6 mr-5  text-justify opacity-75">
          specializing in website development for various clients as a freelancer. My focus is on delivering innovative solutions that enhance user experience and provide valuable business insights, which have significantly contributed to boosting their overall performance.
          </p>
          <Link
            to="/about"
            className="bg-black text-white px-6 py-4 rounded-3xl hover:bg-[#333] transition duration-300"
          >
            More about me
          </Link>
        </div>

        {/* First half: second on small screens */}
        <div className="md:w-1/2 flex justify-between h-[430px] overflow-hidden px-8 flex-col md:flex-row order-2 md:order-1">
          <div className="md:space-y-4 md:space-x-0 sm:space-y-0 sm:space-x-4 h-full flex flex-row md:flex-col px-4 py-4 md:py-0">
            {imagesPartOne.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 1}`}
                className="w-[90%] md:w-[100%] h-[180px] md:h-[190px] object-cover rounded-2xl px-2 md:px-0 md:mt-[-70px]"
                style={{
                  transform: isSmallScreen
                    ? `translateX(${-scrollPosition * 0.1}px)` // Move left on small screens
                    : `translateY(${scrollPosition * 0.1}px)`, // Move down on medium and large screens
                  transition: "transform 0.3s ease-out",
                }}
              />
            ))}
          </div>
          <div className="md:space-y-4 md:space-x-0 sm:space-y-0 sm:space-x-4 h-full flex flex-row md:flex-col ml-[-238px] md:ml-0">
            {imagesPartTwo.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Image ${index + 4}`}
                className="w-[50%] md:w-[100%] h-[180px] md:h-[200px] object-cover rounded-2xl px-2 md:px-0 md:mt-[-20px]"
                style={{
                  transform: isSmallScreen
                    ? `translateX(${scrollPosition * 0.1}px)` // Move right on small screens
                    : `translateY(${-scrollPosition * 0.1}px)`, // Move up on medium and large screens
                  transition: "transform 0.3s ease-out",
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BasicAbout;
