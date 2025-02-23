import ListFlags from "../components/ListFlags";
import Insta from "../assets/insta.png";
import Tiktok from "../assets/tiktok.png";
import Google from "../assets/google.png";
/* 
import BgTop from "../assets/bg-top.png";
import { motion } from "motion/react"; */
import Bg from "../assets/bg.png";

const Language = () => {
  return (
    <div className="flex h-screen relative">
      <img src={Bg} className="w-[90%]" />
      <div className="flex flex-col justify-between">
        <ListFlags />
        <div className="px-1 flex justify-between items-center flex-wrap text-center gap-4 mb-8">
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
              <img src={icon} alt="" className="max-w-full" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Language;
