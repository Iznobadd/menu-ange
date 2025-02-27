import { useTranslation } from "react-i18next";
import Steak from "../../assets/enfant/steak.png";
import Brochette from "../../assets/enfant/brochette.png";
import React from "react";

const Enfant = () => {
  const { t } = useTranslation();
  const enfant = [
    {
      name: `▪ ${t("enfant.desc")} \n \n ▪ ${t("enfant.desc2")} \n \n ▪ ${t(
        "enfant.desc3"
      )}`,
      price: 90,
    },
  ];

  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("enfant.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex justify-between md:order-2">
          <img src={Steak} alt="Steak" className="w-full h-32 object-contain" />
          <img
            src={Brochette}
            alt="Brochette"
            className="w-full h-32 object-contain"
          />
        </div>

        {enfant.map((enfants, index) => (
          <div key={index}>
            <div className="p-2">
              <p className="font-normal text-md leading-tight">
                {enfants.name.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <p className="text-[12px] text-gray-500 mt-2">
                {enfants.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enfant;
