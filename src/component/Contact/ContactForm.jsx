import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

const ContactForm = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.3,
  });

  const [currentFAQ, setCurrentFAQ] = useState(0);

  const faqs = [
    {
      question: "Are you open to full-time roles?",
      answer: "Yes, I'm actively looking for full-time roles.",
    },
    {
      question: "Are you open for new projects?",
      answer: "Yes, I'm available for new projects!",
    },
    {
      question: "Are you open for design collaborations?",
      answer: "I'm always open to collaborate.",
    },
    {
      question: "How many years of experience do you have?",
      answer: "I've currently more than 2 years.",
    },
  ];

  const handleNext = () => {
    setCurrentFAQ((prev) => (prev + 1) % faqs.length);
  };

  const handlePrev = () => {
    setCurrentFAQ((prev) => (prev - 1 + faqs.length) % faqs.length);
  };

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("entry.1414179625", formData.name); // Replace with the actual field ID for Name
    data.append("entry.1934161206", formData.email); // Replace with the actual field ID for Email
    data.append("entry.66848770", formData.phone); // Replace with the actual field ID for Phone
    data.append("entry.261099033", formData.subject); // Replace with the actual field ID for Subject
    data.append("entry.1627579876", formData.message); // Replace with the actual field ID for Message

    fetch("https://docs.google.com/forms/d/e/1FAIpQLSfpntO-LeOW-D8HOgQHC_K0mRn1BCxBurMGN01FirD2YAI1fQ/formResponse", {
      method: "POST",
      body: data,
      mode: "no-cors",
    })
    .then(() => {
      alert("Message sent successfully!");
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  };

  return (
    <div ref={ref} className="max-w-[980px] mx-auto px-6 pt-6 pb-28">
      <motion.div
        className="flex flex-col md:flex-row gap-6"
        initial="hidden"
        animate={controls}
        variants={boxVariant}
      >
        {/* First box - Contact Info */}
        <div className="flex flex-col gap-6 flex-1">
          <motion.div
            className="p-5 md:p-10 bg-black text-white flex-1 rounded-3xl h-[250px] md:h-[350px]"
            variants={boxVariant}
          >
            <h1 className="text-2xl md:text-3xl font-bold mb-3">Contact Me</h1>
            <p className="text-sm font-normal leading-relaxed">
              I&apos;m always open to discussing new projects, creative ideas,
              or opportunities to be part of your vision. Let&apos;s work
              together to bring your ideas to life!
            </p>

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

            <div className="flex items-center mt-4">
              <img
                src="/Home/telephone_icon.png"
                alt="Phone Icon"
                className="w-6 h-6 object-cover mr-2"
              />
              <a href="tel:+1 2012680352" className="hover:underline text-base">
                +1 2012680352
              </a>
            </div>
          </motion.div>

          {/* Second box - FAQ Section */}
          <motion.div
            className="p-5 md:py-8 md:px-5 bg-[#F5F5F5] text-black flex-1 h-[250px] md:h-auto rounded-3xl relative"
            variants={boxVariant}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <img
                  src="/Contact/FaqImg.png"
                  alt="FAQ Icon"
                  className="w-8 h-8"
                />
                <h2 className="text-lg md:text-2xl font-bold ml-4">
                  FAQ&apos;s
                </h2>
              </div>

              {/* Buttons */}
              <div className="flex items-center">
                <button
                  onClick={handlePrev}
                  className="bg-white text-black hover:bg-black hover:text-white p-2 rounded-md mr-2"
                >
                  &#8592;
                </button>
                <button
                  onClick={handleNext}
                  className="bg-white text-black hover:bg-black hover:text-white p-2 rounded-md"
                >
                  &#8594;
                </button>
              </div>
            </div>

            <hr className="my-4" />

            {/* FAQ Content */}
            <div>
              <h3 className="text-sm font-semibold">
                {faqs[currentFAQ].question}
              </h3>
              <p className="text-2xl font-bold mt-2 max-w-[300px]">
                {faqs[currentFAQ].answer}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Third box - Contact Form */}
        <motion.div
          className="p-5 md:p-10 bg-[#F5F5F5] flex-1 rounded-3xl"
          variants={boxVariant}
        >
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-4 pb-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-black">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 w-full py-3 px-4 text-sm text-black rounded-3xl"
                  placeholder="John Doe"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-black">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="mt-1 w-full py-3 px-4 text-sm text-black rounded-3xl"
                  placeholder="xyz@gmail.com"
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-4 pb-3">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-black">
                  Phone number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="mt-1 w-full py-3 px-4 text-sm text-black rounded-3xl"
                  placeholder="+1 86XXXXXX"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-black">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="mt-1 w-full py-3 px-4 text-sm text-black rounded-3xl"
                  placeholder="ex. Design project"
                />
              </div>
            </div>

            <div className="pb-3">
              <label className="block text-sm font-semibold text-black">
                Leave me a message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="mt-1 w-full h-28 py-3 px-4 text-sm text-black rounded-3xl"
                placeholder="Your message..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 text-sm font-semibold text-white bg-black rounded-3xl hover:bg-[#555]"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactForm;
