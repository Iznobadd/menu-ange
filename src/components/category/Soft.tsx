import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Soft = () => {
  const { t } = useTranslation();
  const softs = [
    {
      title: t("soft.orange-gingembre.title"),
      desc: t("soft.orange-gingembre.desc"),
      price: 25,
      image: Generique,
    },
    {
      title: t("soft.orange-carotte.title"),
      desc: t("soft.orange-carotte.desc"),
      price: 35,
      image: Generique,
    },
    {
      title: t("soft.citron-gingembre.title"),
      desc: t("soft.citron-gingembre.desc"),
      price: 25,
      image: Generique,
    },
    {
      title: t("soft.citron-basilic.title"),
      desc: t("soft.citron-basilic.desc"),
      price: 35,
      image: Generique,
    },
    {
      title: t("soft.panache.title"),
      desc: t("soft.panache.desc"),
      price: 35,
      image: Generique,
    },
    {
      title: t("soft.avocat-orange.title"),
      desc: t("soft.avocat-orange.desc"),
      price: 35,
      image: Generique,
    },
    {
      title: t("soft.avocat-lait.title"),
      desc: t("soft.avocat-lait.desc"),
      price: 45,
      image: Generique,
    },
    {
      title: t("soft.virgin.title"),
      desc: t("soft.virgin.desc"),
      price: 40,
      image: Generique,
    },
    {
      title: t("soft.virgin-cafe.title"),
      desc: t("soft.virgin-cafe.desc"),
      price: 65,
      image: Generique,
    },
    {
      title: t("soft.coca.title"),
      desc: t("soft.coca.desc"),
      price: 70,
      image: Generique,
    },
    {
      title: t("soft.regular.title"),
      desc: t("soft.regular.desc"),
      price: 20,
      image: Generique,
    },
    {
      title: t("soft.sirop-eau.title"),
      desc: t("soft.sirop-eau.desc"),
      price: 35,
      image: Generique,
    },
    {
      title: t("soft.sirop-diabolo.title"),
      desc: t("soft.sirop-diabolo.desc"),
      price: 40,
      image: Generique,
    },
    {
      title: t("soft.eau.title"),
      desc: t("soft.eau.desc"),
      price: "10 Dhs / 25",
      image: Generique,
    },
    {
      title: t("soft.eau-petillante.title"),
      desc: t("soft.eau-petillante.desc"),
      price: "15 Dhs / 30",
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("soft.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("soft.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {softs.map((soft, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={soft.image}
              alt={soft.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{soft.title}</p>
              <p className="italic text-gray-500 text-[12px]">{soft.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">{soft.price} dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soft;
