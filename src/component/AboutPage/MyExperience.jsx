import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const experiences = [
  {
    company: " SmartML Labs",
    position: "Technical Contributor",
    duration: "Jun 2024 - Current",
    image: "/About/logo.jpg",
  },
  {
    company: " Sacred Heart University",
    position: "Teaching Assistantship",
    duration: "Mar 2024 - Jun 2024",
    image: "/Home/sacred.png",
  },
  {
    company: "QSqpiders",
    position: " Front-end Developer Intern",
    duration: "Jan 2023 - Feb 2023",
    image: "/Home/qspider.png",
  },
  {
    company: "Freelancer",
    position: "Full Stack Developer",
    duration: "Jan 2022 - Jan 2023",
    image: "/Home/free.png",
  },
];

const skills = [
  {
    img: "/Home/ml1.png",
    name: "Machine Learning",
  },
  {
    img: "/Home/GenAi.png",
    name: "Full Stack Development",
  },
  {
    img: "/Home/fullstack.png",
    name: "Data Analysis",
  },
  {
    img: "/Home/database.png",
    name: "Continuous Integration/Continuous Deployment (CI/CD)",
  }
];

const MyExperience = () => {
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
        staggerChildren: 0.6,
      },
    },
  };

  return (
    <div ref={ref} className="max-w-[980px] mx-auto px-6 py-6">
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
          <h1 className="text-xl md:text-2xl font-bold mb-4 md:mb-6">
            My resume
          </h1>
          {experiences.map((exp, index) => (
            <div key={index} className="mb-4">
              <div className="flex mb-4">
                <img
                  src={exp.image}
                  alt={exp.company}
                  className="mr-4 w-10 h-10"
                />
                <div className="flex-1">
                  <p className="font-semibold mb-1">{exp.company}</p>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm font-normal text-[#616161] mr-9">
                      {exp.position}
                    </p>
                    <p className="text-sm font-normal text-[#616161] text-right">
                      {exp.duration}
                    </p>
                  </div>
                  <p className="text-sm font-normal text-[#616161]">
                    {exp.description}
                  </p>
                </div>
              </div>
              {index < experiences.length - 1 && (
                <hr className="border-t-2 border-gray-300 my-6" />
              )}
            </div>
          ))}
        </motion.div>

        {/* Second box */}
        <div className="flex flex-col gap-6 flex-1">
          <motion.div
            className="p-5 md:p-10 bg-[#F5F5F5] flex-1 rounded-3xl h-[250px] md:h-[350px]"
            variants={boxVariant}
          >
            <h1 className="text-xl md:text-2xl font-bold mb-4">My skills</h1>
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex mb-4">
                  <img src={skill.img} alt="icon" className="mr-4 w-7 h-7" />
                  <p className="text-sm font-normal text-[#616161]">
                    {skill.name}
                  </p>
                </div>

                {index < skills.length - 1 && (
                  <hr className="border-t-2 border-gray-300 mb-4" />
                )}
              </div>
            ))}
          </motion.div>

          {/* Third box */}
          <motion.div
            className="relative group h-[250px] rounded-3xl overflow-hidden"
            variants={boxVariant}
          >
            <img
              src="/About/LinkedinPhone.png"
              alt="LinkedIn"
              className="w-full h-full object-cover"
            />

            {/* Black overlay on hover */}
            <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
            <a
              href="https://www.linkedin.com/in/rohit7830/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <img
                  src="/About/Linkedin_Icon.png"
                  alt="LinkedIn Icon"
                  className="w-16 h-16 mb-2"
                />
                <p className="text-white text-2xl font-bold">Follow me on</p>
                <p className="text-white text-2xl font-bold text-center">
                  LinkedIn
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default MyExperience;
