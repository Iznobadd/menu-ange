import { useTranslation } from "react-i18next";
import Biscuit from "../../assets/desserts/biscuit.png";
import Corne from "../../assets/desserts/corne.png";
import Mousse from "../../assets/desserts/mousse.png";
import PannaAmlou from "../../assets/desserts/panna-amlou.png";
import PannaPomme from "../../assets/desserts/panna-pomme.png";
import TiramisuCitron from "../../assets/desserts/tiramisu-citron.png";
import TiramisuDatte from "../../assets/desserts/tiramisu-datte.png";
import MeliMelo from "../../assets/desserts/meli-melo.png";
import Brioche from "../../assets/desserts/brioche.png";

const Dessert = () => {
  const { t } = useTranslation();
  const desserts = [
    {
      title: t("desserts.tiramisu-datte.title"),
      desc: t("desserts.tiramisu-datte.desc"),
      price: 60,
      image: TiramisuDatte,
    },
    {
      title: t("desserts.tiramisu-citron.title"),
      desc: t("desserts.tiramisu-citron.desc"),
      price: 60,
      image: TiramisuCitron,
    },
    {
      title: t("desserts.panna-pomme.title"),
      desc: t("desserts.panna-pomme.desc"),
      price: 60,
      image: PannaPomme,
    },
    {
      title: t("desserts.panna-amlou.title"),
      desc: t("desserts.panna-amlou.desc"),
      price: 75,
      image: PannaAmlou,
    },
    {
      title: t("desserts.mousse.title"),
      desc: t("desserts.mousse.desc"),
      price: 70,
      image: Mousse,
    },
    {
      title: t("desserts.meli-melo.title"),
      desc: t("desserts.meli-melo.desc"),
      price: 70,
      image: MeliMelo,
    },
    {
      title: t("desserts.brioche.title"),
      desc: t("desserts.brioche.desc"),
      price: 75,
      image: Brioche,
    },
    {
      title: t("desserts.corne.title"),
      desc: t("desserts.corne.desc"),
      price: 35,
      image: Corne,
    },
    {
      title: t("desserts.biscuit.title"),
      desc: t("desserts.biscuit.desc"),
      price: 40,
      image: Biscuit,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("desserts.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("desserts.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {desserts.map((dessert, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={dessert.image}
              alt={dessert.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{dessert.title}</p>
              <p className="italic text-gray-500 text-[12px]">{dessert.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">
                {dessert.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dessert;
