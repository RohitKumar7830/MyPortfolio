import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const educationData = [
  {
    imgSrc: "/About/dataScience.jpg",
    degree: " Master of Computer and Information Science",
    university: "Sacred Heart University",
    year: "Graduation: March 2025",
  },
  {
    imgSrc: "/About/cs.webp",
    degree: "Bachelor of Engineering in Computer Science",
    university: "Visvesvaraya Technological University",
    year: "Graduation: May 2023",
  },
  {
    imgSrc: "/About/education.webp",
    degree: "Intermediate",
    university: "BPSC PU College",
    year: "Graduation: March 2018",
  },
  {
    imgSrc: "/About/education.webp",

    degree: "High School",
    university: "BEST School",
    year: "Graduation: March 2016",
  },
];

const Education = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
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
        {/* First box with 40% width */}
        <motion.div
          className="w-full md:w-[30%] p-5 md:p-8 bg-[#F5F5F5] rounded-3xl"
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
          </div>
          <h2 className="text-xl md:text-2xl font-bold mb-3">My Story</h2>
          <p className="text-[#333] text-sm font-normal leading-relaxed">
          I completed my schooling with 81.71% at BEST, followed by pre-university at BPSC with 71.5%. I earned my BE in Computer Science from Visvesvaraya Technological University with a CGPA of 7.4, and I am currently pursuing a master's in Computer and Information Science, specializing in Data Science, with a GPA of 3.67 .


          </p>
        </motion.div>

        {/* Second box with remaining width */}
        <motion.div
          className="flex-1 p-5 md:p-8 bg-[#F5F5F5] rounded-3xl"
          variants={boxVariant}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-6">My Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {educationData.map((education, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={education.imgSrc}
                  alt="Education"
                  className="w-8 h-8 object-cover rounded-md mr-4 items-start mt-[-20px]"
                />
                <div>
                  <h3 className="font-semibold mb-1">{education.degree}</h3>
                  <p className="text-sm text-gray-600 mb-1">
                    {education.university}
                  </p>
                  <p className="text-xs text-gray-500">{education.year}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Education;
