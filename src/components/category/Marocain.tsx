import { useTranslation } from "react-i18next";
import MarocainImg from "../../assets/dej/marocain.png";
import React from "react";

const Marocain = () => {
  const { t } = useTranslation();
  const marocain = [
    {
      name: `${t("dej-marocain.desc")} \n ${t("dej-marocain.desc2")}  \n ${t(
        "dej-marocain.desc3"
      )}`,
      price: 60,
    },
  ];

  return (
    <div className="mb-4">
      <h2 className="font-bold text-xl text-[#7ba7d3] px-4 my-4 !tracking-wide">
        {t("dej-marocain.title")}
        <span className="!text-[17px] pl-4"> 65 dhs</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="flex justify-between">
          <img
            src={MarocainImg}
            alt="Steak"
            className="w-full h-48 object-contain"
          />
        </div>

        {marocain.map((marocains, index) => (
          <div key={index} className="md:text-center">
            <div className="p-2">
              <p className="font-normal text-md text-left leading-tight">
                {marocains.name.split("\n").map((line, i) => (
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

export default Marocain;
