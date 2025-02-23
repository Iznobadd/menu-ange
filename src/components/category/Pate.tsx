import { useTranslation } from "react-i18next";

import Bolo from "../../assets/pates/bolo.png";
import Creme from "../../assets/pates/creme.png";
import Mer from "../../assets/pates/mer.png";
import Pesto from "../../assets/pates/pesto.png";
import Puttanesca from "../../assets/pates/puttanesca.png";
import Carbo from "../../assets/pates/carbo.png";

const Pate = () => {
  const { t } = useTranslation();
  const pates = [
    {
      title: t("pates.pesto.title"),
      desc: t("pates.pesto.desc"),
      price: 70,
      image: Pesto,
    },
    {
      title: t("pates.creme.title"),
      desc: t("pates.creme.desc"),
      price: 85,
      image: Creme,
    },
    {
      title: t("pates.carbo.title"),
      desc: t("pates.carbo.desc"),
      price: 90,
      image: Carbo,
    },
    {
      title: t("pates.puttanesca.title"),
      desc: t("pates.puttanesca.desc"),
      price: 90,
      image: Puttanesca,
    },
    {
      title: t("pates.mer.title"),
      desc: t("pates.mer.desc"),
      price: 95,
      image: Mer,
    },
    {
      title: t("pates.bolo.title"),
      desc: t("pates.bolo.desc"),
      price: 90,
      image: Bolo,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("pates.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("pates.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {/* <div className="text-center">
          <img src={Accompagnement} className="w-2/3 inline-block" />
        </div> */}
        {pates.map((pate, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={pate.image}
              alt={pate.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{pate.title}</p>
              <p className="italic text-gray-500 text-[12px]">{pate.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">{pate.price} dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pate;
