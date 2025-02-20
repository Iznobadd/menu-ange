import { useTranslation } from "react-i18next";
import Citron from "../../assets/jus/citron.png";
import CitronGingembre from "../../assets/jus/citron-gingembre.png";
import CitronBasilic from "../../assets/jus/citron-basilic.png";
import AvocatLait from "../../assets/jus/avocat-lait.png";
import AvocatOrange from "../../assets/jus/avocat-orange.png";
import Panache from "../../assets/jus/panache.png";
import Generique from "../../assets/salades/generique.jpg";

const Jus = () => {
  const { t } = useTranslation();
  const jus = [
    {
      title: t("jus.orange-presse.title"),
      desc: t("jus.orange-presse.desc"),
      price: 25,
      image: Generique,
    },
    {
      title: t("jus.orange-carotte.title"),
      desc: t("jus.orange-carotte.desc"),
      price: 30,
      image: Generique,
    },
    {
      title: t("jus.orange-gingembre.title"),
      desc: t("jus.orange-gingembre.desc"),
      price: 35,
      image: Generique,
    },
    {
      title: t("jus.citron-presse.title"),
      desc: t("jus.citron-presse.desc"),
      price: 30,
      image: Citron,
    },
    {
      title: t("jus.citron-gingembre.title"),
      desc: t("jus.citron-gingembre.desc"),
      price: 35,
      image: CitronGingembre,
    },
    {
      title: t("jus.citron-basilic.title"),
      desc: t("jus.citron-basilic.desc"),
      price: 40,
      image: CitronBasilic,
    },
    {
      title: t("jus.avocat-lait.title"),
      desc: t("jus.avocat-lait.desc"),
      price: 40,
      image: AvocatLait,
    },
    {
      title: t("jus.avocat-orange.title"),
      desc: t("jus.avocat-orange.desc"),
      price: 45,
      image: AvocatOrange,
    },
    {
      title: t("jus.panache.title"),
      desc: t("jus.panache.desc"),
      price: 40,
      image: Panache,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("jus.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">{t("jus.desc")}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {jus.map((ju, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={ju.image}
              alt={ju.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{ju.title}</p>
              <p className="italic text-gray-500 text-[12px]">{ju.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">{ju.price} dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Jus;
