import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Pastilla = () => {
  const { t } = useTranslation();
  const pastillas = [
    {
      name: t("pastillas.legume"),
      price: 80,
      image: Generique,
    },
    {
      name: t("pastillas.poulet"),
      price: 90,
      image: Generique,
    },
    {
      name: t("pastillas.mer"),
      price: 110,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("pastillas.title")}</h2>
      <p className="mb-6 text-gray-500">
        <i>{t("pastillas.desc")}</i>
      </p>
      <div className="grid grid-cols-2 gap-4">
        {pastillas.map((pastilla, index) => (
          <div key={index} className=" bg-white border border-gray-200 shadow">
            <img
              src={pastilla.image}
              alt={pastilla.name}
              className="w-full h-32 object-cover mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{pastilla.name}</p>
              <p className="text-sm text-gray-600 mt-2">{pastilla.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pastilla;
