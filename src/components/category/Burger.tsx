import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Burger = () => {
  const { t } = useTranslation();
  const burgers = [
    {
      name: t("burgers.vegetarien"),
      price: 80,
      image: Generique,
    },
    {
      name: t("burgers.poulet"),
      price: 90,
      image: Generique,
    },
    {
      name: t("burgers.boeuf"),
      price: 100,
      image: Generique,
    },
    {
      name: t("burgers.poisson"),
      price: 110,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("burgers.title")}</h2>
      <p className="mb-6 text-gray-500">
        <i>{t("burgers.desc")}</i>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {burgers.map((burger, index) => (
          <div
            key={index}
            className=" bg-white border md:text-center border-gray-200 shadow"
          >
            <img
              src={burger.image}
              alt={burger.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{burger.name}</p>
              <p className="text-sm text-gray-600 mt-2">{burger.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Burger;
