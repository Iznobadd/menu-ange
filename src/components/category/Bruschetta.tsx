import { useTranslation } from "react-i18next";
import Chevre from "../../assets/bruschettas/chevre.png";
import Guacamole from "../../assets/bruschettas/guacamole.png";
import Islandaise from "../../assets/bruschettas/islandaise.png";
import Jambon from "../../assets/bruschettas/jambon.png";
import Poivron from "../../assets/bruschettas/poivron.png";

const Bruschetta = () => {
  const { t } = useTranslation();
  const bruschettas = [
    {
      name: t("bruschettas.chevre"),
      price: 75,
      image: Chevre,
    },
    {
      name: t("bruschettas.jambon"),
      price: 75,
      image: Jambon,
    },
    {
      name: t("bruschettas.poivrons"),
      price: 85,
      image: Poivron,
    },
    {
      name: t("bruschettas.guacamole"),
      price: 90,
      image: Guacamole,
    },
    {
      name: t("bruschettas.islandaise"),
      price: 100,
      image: Islandaise,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("bruschettas.title")}</h2>
      <p className="mb-6 text-gray-500">
        <i>{t("bruschettas.desc")}</i>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {bruschettas.map((bruschetta, index) => (
          <div
            key={index}
            className=" bg-white border md:text-center border-gray-200 shadow"
          >
            <img
              src={bruschetta.image}
              alt={bruschetta.name}
              className="w-full h-32 object-contain mb-4"
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
