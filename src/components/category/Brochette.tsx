import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Brochette = () => {
  const { t } = useTranslation();
  const brochettes = [
    {
      name: t("brochettes.poulet"),
      price: 85,
      image: Generique,
    },
    {
      name: t("brochettes.kefta"),
      price: 85,
      image: Generique,
    },
    {
      name: t("brochettes.boeuf"),
      price: 120,
      image: Generique,
    },
    {
      name: t("brochettes.gambas"),
      price: 120,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("brochettes.title")}</h2>
      <p className="mb-6 text-gray-500">
        <i>{t("brochettes.desc")}</i>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brochettes.map((brochette, index) => (
          <div
            key={index}
            className=" bg-white border md:text-center border-gray-200 shadow"
          >
            <img
              src={brochette.image}
              alt={brochette.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{brochette.name}</p>
              <p className="text-sm text-gray-600 mt-2">
                {brochette.price} Dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brochette;
