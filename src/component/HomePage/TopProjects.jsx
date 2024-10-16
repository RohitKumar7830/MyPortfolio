import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    id: 1,
    name: "Harvestify- A Agriculture Product",
    leftImg: "/Home/ml1.png",
    mainImg: "/Project/harvest.png",
    year: 2023,
    // add project1 link here
    link: "https://github.com/RohitKumar710/Harvest",
  },
  {
    id: 2,
    name: "Sanchari - A travel Guide",
    leftImg: "/Home/ml1.png",
    mainImg: "/Project/boat.png",
    year: 2024,
    // add project2 link here

    link: "https://github.com/RohitKumar7830/DBMSPROJECT",
  },
  {
    id: 3,
    name: "Sentimental Analysis on Space Experience",
    leftImg: "/Home/ml1.png",
    mainImg: "/Project/w1.png",
    year: 2024,
    // add project3 link here

    link: "https://github.com/RohitKumar7830/space",
  },
];

const TopProjects = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const boxVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="max-w-[980px] mx-auto px-6 overflow-hidden">
      {/* Container */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariants}
        className="flex flex-col md:flex-row gap-6"
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={boxVariants}
            className="px-5 pt-5 md:px-7 md:pt-7 pb-0 bg-[#F5F5F5] flex-1 rounded-3xl overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4">
              {/* Left Image */}
              <img src={project.leftImg} alt="logo" className="w-8 h-8" />

              {/* Right Button */}
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <button className="bg-white p-2 rounded-md">
                  <img
                    src="/Home/arrow.svg"
                    alt="arrow"
                    className="w-5 h-5 object-cover hover:scale-75 transition duration-300"
                  />
                </button>
              </a>
            </div>

            <div className="mb-6">
              <p className="text-lg md:text-xl font-semibold mb-2 ">
                {project.name}
              </p>
              <p className="text-sm text-gray-600">
                Product Design <span className="px-2">-</span> {project.year}
              </p>
            </div>

            {/* Main Image */}
            <div className="flex justify-center min-w-[320px] md:min-w-[270px]">
              <img
                src={project.mainImg}
                alt={`${project.name} main`}
                className="h-full object-contain rounded-md"
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TopProjects;
