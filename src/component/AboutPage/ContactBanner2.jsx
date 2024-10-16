import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
const ContactBanner2 = () => {
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
      className="max-w-[980px] mx-auto px-6 pb-10"
      ref={ref}
      variants={bannerVariants}
      initial="hidden"
      whileInView="visible"
      animate={controls}
    >
      {/* Box */}
      <motion.div
        className="relative p-8 md:p-14 bg-black text-white flex flex-col md:flex-row gap-6 rounded-3xl"
        variants={bannerVariants}
      >
        {/* Left section: Text content */}
        <div className="flex flex-col w-full md:w-2/3">
          <p className="text-2xl md:text-4xl font-bold md:leading-9 pb-2">
            Want to work with me?
          </p>
          <p className="text-2xl md:text-4xl font-bold md:leading-9 md:pb-4">
            Let’s get in touch!
          </p>

          {/* Email and Phone in a row */}
          <div className="flex flex-col md:flex-row  md:gap-6 mt-4">
            {/* Email */}
            <div className="flex items-center">
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
            <div className="flex items-center mt-4 md:mt-0">
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

        {/* Right section: Image */}
        <div className="flex justify-center md:w-1/3">
          <img
            src="/About/email_vector.png"
            alt="Contact Image"
            className="object-cover w-full h-auto rounded-lg"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactBanner2;
