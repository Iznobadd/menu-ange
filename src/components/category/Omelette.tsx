import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Omelette = () => {
  const { t } = useTranslation();
  const omelettes = [
    {
      name: t("omelettes.legume"),
      price: 50,
      image: Generique,
    },
    {
      name: t("omelettes.tomate"),
      price: 50,
      image: Generique,
    },
    {
      name: t("omelettes.parmesan"),
      price: 65,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("omelettes.title")}</h2>
      <p className="mb-6 text-gray-500">
        <i>{t("omelettes.desc")}</i>
      </p>
      <div className="grid grid-cols-2 gap-4">
        {omelettes.map((omelette, index) => (
          <div key={index} className=" bg-white border border-gray-200 shadow">
            <img
              src={omelette.image}
              alt={omelette.name}
              className="w-full h-32 object-cover mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{omelette.name}</p>
              <p className="text-sm text-gray-600 mt-2">{omelette.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Omelette;
