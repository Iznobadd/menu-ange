import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Pate = () => {
  const { t } = useTranslation();
  const pates = [
    {
      name: t("pates.pesto"),
      price: 70,
      image: Generique,
    },
    {
      name: t("pates.creme"),
      price: 80,
      image: Generique,
    },
    {
      name: t("pates.puttanesca"),
      price: 80,
      image: Generique,
    },
    {
      name: t("pates.mer"),
      price: 95,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("pates.title")}</h2>
      <p className="mb-6 text-gray-500">
        <i>{t("pates.desc")}</i>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {pates.map((pate, index) => (
          <div
            key={index}
            className=" bg-white border md:text-center border-gray-200 shadow"
          >
            <img
              src={pate.image}
              alt={pate.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{pate.name}</p>
              <p className="text-sm text-gray-600 mt-2">{pate.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pate;
