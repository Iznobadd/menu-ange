import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";
import React from "react";

const Enfant = () => {
  const { t } = useTranslation();
  const enfant = [
    {
      name: `${t("enfant.desc")} \n \n ${t("enfant.desc2")} \n \n ${t(
        "enfant.desc3"
      )}`,
      price: 90,
      image: Generique,
    },
  ];

  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("enfant.title")}</h2>
      <div className="grid grid-cols gap-4">
        {enfant.map((enfants, index) => (
          <div key={index} className="bg-white border border-gray-200 shadow">
            <img
              src={enfants.image}
              alt={enfants.name}
              className="w-full h-32 object-cover mb-4"
            />
            <div className="p-2">
              {/* Remplace les sauts de ligne par des <br /> */}
              <p className="font-bold text-md text-center">
                {enfants.name.split("\n").map((line, i) => (
                  <React.Fragment key={i}>
                    {line}
                    <br />
                  </React.Fragment>
                ))}
              </p>
              <p className="text-sm text-gray-600 mt-2 text-center">
                {enfants.price} Dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Enfant;
