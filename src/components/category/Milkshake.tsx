import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Milkshake = () => {
  const { t } = useTranslation();
  const milkshakes = [
    {
      name: t("milkshakes.chocolat"),
      price: 60,
      image: Generique,
    },
    {
      name: t("milkshakes.vanille"),
      price: 60,
      image: Generique,
    },
    {
      name: t("milkshakes.fraise"),
      price: 60,
      image: Generique,
    },
    {
      name: t("milkshakes.banane"),
      price: 65,
      image: Generique,
    },
    {
      name: t("milkshakes.fruit"),
      price: 70,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("milkshakes.title")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {milkshakes.map((milkshake, index) => (
          <div
            key={index}
            className=" bg-white border md:text-center border-gray-200 shadow"
          >
            <img
              src={milkshake.image}
              alt={milkshake.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{milkshake.name}</p>
              <p className="text-sm text-gray-600 mt-2">
                {milkshake.price} Dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milkshake;
