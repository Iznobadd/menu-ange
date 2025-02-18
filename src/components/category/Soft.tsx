import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Soft = () => {
  const { t } = useTranslation();
  const softs = [
    {
      name: t("soft.presse"),
      price: 25,
      image: Generique,
    },
    {
      name: t("soft.orange-gingembre"),
      price: 35,
      image: Generique,
    },
    {
      name: t("soft.orange-carotte"),
      price: 25,
      image: Generique,
    },
    {
      name: t("soft.citron-gingembre"),
      price: 35,
      image: Generique,
    },
    {
      name: t("soft.citron-basilic"),
      price: 35,
      image: Generique,
    },
    {
      name: t("soft.panache"),
      price: 35,
      image: Generique,
    },
    {
      name: t("soft.avocat-orange"),
      price: 45,
      image: Generique,
    },
    {
      name: t("soft.avocat-lait"),
      price: 40,
      image: Generique,
    },
    {
      name: t("soft.virgin"),
      price: 65,
      image: Generique,
    },
    {
      name: t("soft.virgin-cafe"),
      price: 70,
      image: Generique,
    },
    {
      name: t("soft.regular"),
      price: 20,
      image: Generique,
    },
    {
      name: t("soft.sirop-eau"),
      price: 35,
      image: Generique,
    },
    {
      name: t("soft.sirop-diabolo"),
      price: 40,
      image: Generique,
    },
    {
      name: t("soft.eau"),
      price: "10 Dhs / 25",
      image: Generique,
    },
    {
      name: t("soft.eau-petillante"),
      price: "15 Dhs / 30",
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2 text-[#7ba7d3]">
        {t("soft.title")}
      </h2>
      <p className="mb-6 text-gray-500">
        <i>{t("soft.desc")}</i>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {softs.map((soft, index) => (
          <div key={index} className=" md:text-center">
            <img
              src={soft.image}
              alt={soft.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{soft.name}</p>
              <p className="text-sm text-gray-600 mt-2">{soft.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soft;
