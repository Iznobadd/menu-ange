import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Bruschetta = () => {
  const { t } = useTranslation();
  const bruschettas = [
    {
      name: t("bruschettas.chevre"),
      price: 70,
      image: Generique,
    },
    {
      name: t("bruschettas.jambon"),
      price: 70,
      image: Generique,
    },
    {
      name: t("bruschettas.poivrons"),
      price: 80,
      image: Generique,
    },
    {
      name: t("bruschettas.guacamole"),
      price: 85,
      image: Generique,
    },
    {
      name: t("bruschettas.islandaise"),
      price: 95,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("bruschettas.title")}</h2>
      <p className="mb-6 text-gray-500">
        <i>{t("bruschettas.desc")}</i>
      </p>
      <div className="grid grid-cols-2 gap-4">
        {bruschettas.map((bruschetta, index) => (
          <div key={index} className=" bg-white border border-gray-200 shadow">
            <img
              src={bruschetta.image}
              alt={bruschetta.name}
              className="w-full h-32 object-cover mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{bruschetta.name}</p>
              <p className="text-sm text-gray-600 mt-2">
                {bruschetta.price} Dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bruschetta;
