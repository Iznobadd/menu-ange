import { useTranslation } from "react-i18next";
import ListFlags from "../components/ListFlags";
import Logo from "../assets/logo.png";
import Insta from "../assets/insta.png";
import Tiktok from "../assets/tiktok.png";

const Language = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-white">
      <div className="text-center">
        <img src={Logo} alt="logo" className="w-80 mx-auto" />
        <ListFlags />
        <h2 className="text-center font-bold">{t("language.choose")}</h2>
        <div className="px-8 mt-24 flex justify-between">
          <a
            href="https://www.instagram.com/lesanges_essaouira/"
            target="_blank"
            className="inline-block text-center"
          >
            <img src={Insta} alt="" className="max-w-40" />
          </a>
          <a
            href="https://www.tiktok.com/@lesanges_essaouira"
            target="_blank"
            className="inline-block text-center"
          >
            <img src={Tiktok} alt="" className="max-w-40" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Language;
