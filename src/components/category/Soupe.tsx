import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Soupe = () => {
  const { t } = useTranslation();
  const soupes = [
    {
      name: t("soupes.potiron"),
      price: 50,
      image: Generique,
    },
    {
      name: t("soupes.asiatique"),
      price: 70,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("soupes.title")}</h2>
      <div className="grid grid-cols-2 gap-4">
        {soupes.map((soupe, index) => (
          <div key={index} className=" bg-white border border-gray-200 shadow">
            <img
              src={soupe.image}
              alt={soupe.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{soupe.name}</p>
              <p className="text-sm text-gray-600 mt-2">{soupe.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soupe;
