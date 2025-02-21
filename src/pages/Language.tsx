import ListFlags from "../components/ListFlags";
import Logo from "../assets/logo.png";
import Insta from "../assets/insta.png";
import Tiktok from "../assets/tiktok.png";
import Google from "../assets/google.png";
import BgTop from "../assets/bg-top.png";
import { motion } from "motion/react";

const Language = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="flex mb-16">
        <motion.div
          className="h-64 w-[85%] bg-cover bg-center"
          style={{ backgroundImage: `url(${BgTop})` }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <div className="w-[15%] bg-[#7ba7d3] h-56"></div>
      </div>
      <div className="text-center">
        <motion.img
          src={Logo}
          alt="logo"
          className="w-80 mx-auto"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        />
        <ListFlags />
        <div className="px-8 mt-8 flex justify-between items-center bottom-0 absolute text-center left-1/2 -translate-x-1/2 gap-4">
          {[Insta, Tiktok, Google].map((icon, index) => (
            <a
              key={index}
              href={
                index === 0
                  ? "https://www.instagram.com/lesanges_essaouira/"
                  : index === 1
                  ? "https://www.tiktok.com/@lesanges_essaouira"
                  : "https://g.co/kgs/PjDMbH8"
              }
              target="_blank"
              className="inline-block text-center"
            >
              <img src={icon} alt="" className="max-w-10" />
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Language;
