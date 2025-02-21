import ListFlags from "../components/ListFlags";
import Logo from "../assets/logo.png";
import Insta from "../assets/insta.png";
import Tiktok from "../assets/tiktok.png";
import Google from "../assets/google.png";
import BgTop from "../assets/bg-top.png";

const Language = () => {
  return (
    <div>
      <div className="flex mb-16">
        <div
          className="h-64 w-[85%] bg-cover bg-center"
          style={{ backgroundImage: `url(${BgTop})` }}
        ></div>
        <div className="w-[15%] bg-[#7ba7d3] h-56"></div>
      </div>
      <div className="text-center">
        <img src={Logo} alt="logo" className="w-80 mx-auto" />
        <ListFlags />
        <div className="px-8 mt-8 flex justify-between items-center bottom-0 absolute text-center left-1/2 -translate-x-1/2 gap-4">
          <a
            href="https://www.instagram.com/lesanges_essaouira/"
            target="_blank"
            className="inline-block text-center"
          >
            <img src={Insta} alt="" className="max-w-10" />
          </a>
          <a
            href="https://www.tiktok.com/@lesanges_essaouira"
            target="_blank"
            className="inline-block text-center"
          >
            <img src={Tiktok} alt="" className="max-w-10" />
          </a>
          <a
            href="https://g.co/kgs/PjDMbH8"
            target="_blank"
            className="inline-block text-center"
          >
            <img src={Google} alt="" className="max-w-8" />
          </a>
        </div>
      </div>
    </div>
    // <div className="flex items-center justify-center w-screen h-screen bg-white flex-wrap">
    //   <div className="text-center">
    //     00
    //     <img src={Logo} alt="logo" className="w-80 mx-auto" />
    //     <h1 className="text-3xl">BIENTÔT DISPONIBLE</h1>
    //   </div>
    // </div>
  );
};

export default Language;
