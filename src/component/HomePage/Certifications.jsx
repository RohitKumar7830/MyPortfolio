import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const certifications = [
  {
    title: "Data Science Job Simulation",
    issuer: "British Airways",
    completion: "February 2024",
    image: "/Home/arrow.svg",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/British%20Airways/NjynCWzGSaWXQCxSX_British%20Airways_xPWrrYXBxYC7aj4KR_1709078367181_completion_certificate.pdf",
  },
  {
    title: "Machine Learning with python: Decision Tree",
    issuer: "LinkedIn Learning",
    completion: "February 2024",
    image: "/Home/arrow.svg",
    link: "https://www.linkedin.com/in/rohit7830/details/certifications/",
  },
  {
    title: "Machine Learning with python",
    issuer: "LinkedIn Learning",
    completion: "February 2024",
    image: "/Home/arrow.svg",
    link: "https://www.linkedin.com/in/rohit7830/details/certifications/",
  },
  {
    title: "MongoDB Python Developer Path",
    issuer: "MongoDB",
    completion: "February 2024",
    image: "/Home/arrow.svg",
    link: "https://learn.mongodb.com/c/VPM75MN8Sh2WDN-_x4XpkQ",
  },
  {
    title: "J2EE Java",
    issuer: "Wipro",
    completion: "January 2022",
    image: "/Home/arrow.svg",
    link: "https://www.linkedin.com/posts/activity-6988547172304642048-rrV_/",
  },
  {
    title: "Front-end Development",
    issuer: "Institute of Advance Network Technology",
    completion: "January 2021",
    image: "/Home/arrow.svg",
    link: "https://www.linkedin.com/posts/activity-6972126384043286528-dzXD/",
  },
];

const Certifications = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
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
    <div className="max-w-[980px] mx-auto px-6 pt-7">
      {/* Container  */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={boxVariant}
        className="flex flex-col gap-6"
      >
        {/* Create rows for certifications */}
        <div className="flex flex-wrap gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="relative p-6 bg-[#F5F5F5] flex-1 min-w-[250px] rounded-3xl"
              variants={boxVariant}
            >
              <a href={cert.link} target="_blank" rel="noopener noreferrer">
                <button className="absolute top-4 right-4 bg-white p-2 rounded-md">
                  <img
                    src={cert.image}
                    alt="arrow"
                    className="w-5 h-5 object-cover transition duration-300 hover:scale-75"
                  />
                </button>
              </a>
              <h1 className="text-2xl font-semibold mb-2 pt-6">{cert.title}</h1>
              <p className="text-sm font-normal text-[#616161] mb-2">
                Issued by: {cert.issuer}
              </p>
              <p className="text-sm font-normal text-[#616161] mb-4">
                Completion: {cert.completion}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Certifications;
