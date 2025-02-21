import ListFlags from "../components/ListFlags";
import Logo from "../assets/logo.png";
import Insta from "../assets/insta.png";
import Tiktok from "../assets/tiktok.png";

const Language = () => {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <div className="text-center">
        <img src={Logo} alt="logo" className="w-80 mx-auto" />
        <ListFlags />
        <div className="px-8 mt-8 flex justify-between bottom-0 absolute text-center left-1/2 -translate-x-1/2">
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
