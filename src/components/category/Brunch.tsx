import { useTranslation } from "react-i18next";
import BrunchImg from "../../assets/dej/brunch.png";
import React from "react";

const Brunch = () => {
  const { t } = useTranslation();
  const brunchs = [
    {
      name: `▪ ${t("brunch.desc")} \n ▪ ${t("brunch.desc2")}  \n ▪ ${t(
        "brunch.desc3"
      )} \n ▪ ${t("brunch.desc4")} \n ▪ ${t("brunch.desc5")} \n ▪ ${t(
        "brunch.desc3"
      )} \n ▪ ${t("brunch.desc6")} \n ▪ ${t("brunch.desc7")} \n ▪ ${t(
        "brunch.desc3"
      )} \n ▪ ${t("brunch.desc8")} \n ▪ ${t("brunch.desc9")}`,
      price: 60,
    },
  ];

  return (
    <div className="mb-4 mt-14">
      <h2 className="font-bold text-xl text-[#7ba7d3] px-4 my-4 !tracking-wide">
        {t("brunch.title")}
        <span className="!text-[17px] pl-4"> 140 dhs</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex justify-between">
          <img
            src={BrunchImg}
            alt="Steak"
            className="w-full h-48 object-contain"
          />
        </div>

        {brunchs.map((brunch, index) => (
          <div key={index} className="md:text-center">
            <div className="p-2">
              <p className="font-normal text-md text-left leading-tight">
                {brunch.name.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                    <br />
                  </React.Fragment>
                ))}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brunch;
