import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Salade = () => {
  const { t } = useTranslation();

  const salades = [
    {
      name: t("salades.trilogie"),
      price: 70,
      image: Generique,
    },
    {
      name: t("salades.taboule"),
      price: 75,
      image: Generique,
    },
    {
      name: t("salades.buddha"),
      price: 90,
      image: Generique,
    },
    {
      name: t("salades.thai"),
      price: 90,
      image: Generique,
    },
    {
      name: t("salades.anges"),
      price: 110,
      image: Generique,
    },
  ];

  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-6">{t("salades.title")}</h2>
      <div className="grid grid-cols-2 gap-4">
        {salades.map((salade, index) => (
          <div key={index} className=" bg-white border border-gray-200 shadow">
            <img
              src={salade.image}
              alt={salade.name}
              className="w-full h-32 object-cover mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{salade.name}</p>
              <p className="text-sm text-gray-600 mt-2">{salade.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salade;
