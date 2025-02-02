import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Wok = () => {
  const { t } = useTranslation();
  const woks = [
    {
      name: t("woks.legume"),
      price: 70,
      image: Generique,
    },
    {
      name: t("woks.poulet"),
      price: 80,
      image: Generique,
    },
    {
      name: t("woks.boeuf"),
      price: 120,
      image: Generique,
    },
    {
      name: t("woks.crevette"),
      price: 120,
      image: Generique,
    },
    {
      name: t("woks.anges"),
      price: 120,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-6">{t("woks.title")}</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {woks.map((wok, index) => (
          <div
            key={index}
            className=" bg-white border md:text-center border-gray-200 shadow"
          >
            <img
              src={wok.image}
              alt={wok.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{wok.name}</p>
              <p className="text-sm text-gray-600 mt-2">{wok.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wok;
