import { useTranslation } from "react-i18next";
import Continental from "./Continental";
import Marocain from "./Marocain";
import Brunch from "./Brunch";

const PetitDej = () => {
  const { t } = useTranslation();

  return (
    <div className="my-4">
      <h2 className="font-bold text-[26px] text-[#7ba7d3] px-4 mt-16">
        {t("dej.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
      </div>
      <Continental />
      <Marocain />
      <Brunch />
    </div>
  );
};

export default PetitDej;
