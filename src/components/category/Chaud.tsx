import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Chaud = () => {
  const { t } = useTranslation();
  const chauds = [
    {
      name: t("chaud.the-menthe"),
      price: 20,
      image: Generique,
    },
    {
      name: t("chaud.the-corne"),
      price: 40,
      image: Generique,
    },
    {
      name: t("chaud.the-royal"),
      price: 30,
      image: Generique,
    },
    {
      name: t("chaud.the-earl"),
      price: 30,
      image: Generique,
    },
    {
      name: t("chaud.chocolat"),
      price: 30,
      image: Generique,
    },
    {
      name: t("chaud.nouss"),
      price: 25,
      image: Generique,
    },
    {
      name: t("chaud.cafe-epice"),
      price: 30,
      image: Generique,
    },
    {
      name: t("chaud.expresso"),
      price: 25,
      image: Generique,
    },
    {
      name: t("chaud.double"),
      price: 45,
      image: Generique,
    },
    {
      name: t("chaud.capuccino"),
      price: 35,
      image: Generique,
    },
    {
      name: t("chaud.latte"),
      price: 35,
      image: Generique,
    },
    {
      name: t("chaud.cafe-glace"),
      price: 35,
      image: Generique,
    },
    {
      name: t("chaud.cafe-frappe"),
      price: 50,
      image: Generique,
    },
    {
      name: t("chaud.supplement"),
      price: 20,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("soft.title")}</h2>
      <p className="mb-6 text-gray-500">
        <i>{t("soft.desc")}</i>
      </p>
      <div className="grid grid-cols-2 gap-4">
        {chauds.map((chaud, index) => (
          <div key={index} className=" bg-white border border-gray-200 shadow">
            <img
              src={chaud.image}
              alt={chaud.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{chaud.name}</p>
              <p className="text-sm text-gray-600 mt-2">{chaud.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chaud;
