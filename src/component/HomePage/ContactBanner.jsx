import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

const ContactBanner = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.6,
  });
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  const bannerVariants = {
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
      variants={bannerVariants}
      initial="hidden"
      whileInView="visible"
      animate={controls}
      className="max-w-[980px] mx-auto px-6 pb-10"
    >
      {/* Box */}
      <motion.div
        className="relative p-6 md:p-10 bg-black text-white flex flex-col md:flex-row gap-6 rounded-3xl"
        variants={bannerVariants}
      >
        {/* Right section: Button */}
        <div className="absolute top-8 right-6 md:right-10">
          <button className="bg-white p-3 rounded-md">
            <Link to="/contact">
              <img
                src="/Home/arrow.svg"
                alt="Arrow Icon"
                className="w-6 h-6 object-cover  hover:scale-75 transition duration-300"
              />
            </Link>
          </button>
        </div>

        {/* Left section: Image and text */}
        <div className="flex flex-col md:flex-row md:ml-6 md:mt-7 w-full">
          <img
            src="/Home/userAvatar.png"
            alt="Avatar"
            className="w-20 h-26 md:w-28 md:h-40 object-cover mb-4 md:mb-0 md:mr-8"
          />
          <div className="flex flex-col text-lg md:text-2xl font-semibold max-w-[450px]">
            <p className="text-xl md:text-3xl font-bold md:leading-9">
              Let&apos;s get in touch today and get started with your Project!
            </p>

            {/* Email */}
            <div className="flex items-center mt-4">
              <img
                src="/Home/email_icon.png"
                alt="Email Icon"
                className="w-6 h-4 object-cover mr-2"
              />
              <a
                href="mailto:bpscrohit@gmail.com"
                className="hover:underline text-base"
              >
                bpscrohit@gmail.com
              </a>
            </div>

            {/* Phone */}
            <div className="flex items-center mt-4">
              <img
                src="/Home/telephone_icon.png"
                alt="Phone Icon"
                className="w-6 h-6 object-cover mr-2"
              />
              <a
                href="tel:+1 2012680352"
                className="hover:underline text-base"
              >
                +1 2012680352
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactBanner;
