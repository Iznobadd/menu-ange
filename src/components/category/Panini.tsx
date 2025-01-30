import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Panini = () => {
  const { t } = useTranslation();
  const paninis = [
    {
      name: t("paninis.tomate"),
      price: 60,
      image: Generique,
    },
    {
      name: t("paninis.legume"),
      price: 70,
      image: Generique,
    },
    {
      name: t("paninis.vegan"),
      price: 75,
      image: Generique,
    },
    {
      name: t("paninis.epinard"),
      price: 80,
      image: Generique,
    },
    {
      name: t("paninis.marocain"),
      price: 70,
      image: Generique,
    },
    {
      name: t("paninis.poulet"),
      price: 80,
      image: Generique,
    },
    {
      name: t("paninis.burger"),
      price: 85,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("paninis.title")}</h2>
      <p className="mb-6 text-gray-500">
        <i>{t("paninis.desc")}</i>
      </p>
      <div className="grid grid-cols-2 gap-4">
        {paninis.map((panini, index) => (
          <div key={index} className=" bg-white border border-gray-200 shadow">
            <img
              src={panini.image}
              alt={panini.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{panini.name}</p>
              <p className="text-sm text-gray-600 mt-2">{panini.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Panini;
