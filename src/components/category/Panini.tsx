import { useTranslation } from "react-i18next";

import Tomate from "../../assets/paninis/tomate.png";
import Legume from "../../assets/paninis/legume.png";
import Vegan from "../../assets/paninis/vegan.png";
import Epinard from "../../assets/paninis/epinard.png";
import Marocain from "../../assets/paninis/marocain.png";
import Poulet from "../../assets/paninis/poulet.png";
import Burger from "../../assets/paninis/burger.png";

const Panini = () => {
  const { t } = useTranslation();
  const paninis = [
    {
      title: t("paninis.tomate.title"),
      desc: t("paninis.tomate.desc"),
      price: 65,
      image: Tomate,
    },
    {
      title: t("paninis.legume.title"),
      desc: t("paninis.legume.desc"),
      price: 70,
      image: Legume,
    },
    {
      title: t("paninis.vegan.title"),
      desc: t("paninis.vegan.desc"),
      price: 75,
      image: Vegan,
    },
    {
      title: t("paninis.epinard.title"),
      desc: t("paninis.epinard.desc"),
      price: 85,
      image: Epinard,
    },
    {
      title: t("paninis.marocain.title"),
      desc: t("paninis.marocain.desc"),
      price: 75,
      image: Marocain,
    },
    {
      title: t("paninis.poulet.title"),
      desc: t("paninis.poulet.desc"),
      price: 80,
      image: Poulet,
    },
    {
      title: t("paninis.burger.title"),
      desc: t("paninis.burger.desc"),
      price: 90,
      image: Burger,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("paninis.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("paninis.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {paninis.map((panini, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={panini.image}
              alt={panini.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{panini.title}</p>
              <p className="italic text-gray-500 text-[12px]">{panini.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">
                {panini.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panini;
