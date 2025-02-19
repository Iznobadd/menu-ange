import { useTranslation } from "react-i18next";

import Boeuf from "../../assets/burgers/boeuf.png";
import Poisson from "../../assets/burgers/poisson.png";
import Poulet from "../../assets/burgers/poulet.png";
import Vegan from "../../assets/burgers/vegan.png";
const Burger = () => {
  const { t } = useTranslation();
  const burgers = [
    {
      title: t("burgers.vegetarien.title"),
      desc: t("burgers.vegetarien.desc"),
      price: 80,
      image: Vegan,
    },
    {
      title: t("burgers.poulet.title"),
      desc: t("burgers.poulet.desc"),
      price: 95,
      image: Poulet,
    },
    {
      title: t("burgers.boeuf.title"),
      desc: t("burgers.boeuf.desc"),
      price: 100,
      image: Boeuf,
    },
    {
      title: t("burgers.poisson.title"),
      desc: t("burgers.poisson.desc"),
      price: 120,
      image: Poisson,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("burgers.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("burgers.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {burgers.map((burger, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={burger.image}
              alt={burger.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{burger.title}</p>
              <p className="italic text-gray-500 text-[12px]">{burger.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">
                {burger.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Burger;
