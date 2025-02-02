import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";
const Crepe = () => {
  const { t } = useTranslation();
  const crepes = [
    {
      name: t("crepes.sucre"),
      price: 40,
      image: Generique,
    },
    {
      name: t("crepes.nutella"),
      price: 40,
      image: Generique,
    },
    {
      name: t("crepes.banane"),
      price: 50,
      image: Generique,
    },
    {
      name: t("crepes.chocolat"),
      price: 50,
      image: Generique,
    },
    {
      name: t("crepes.suzette"),
      price: 50,
      image: Generique,
    },
    {
      name: t("crepes.miel"),
      price: 55,
      image: Generique,
    },
    {
      name: t("crepes.caramel"),
      price: 55,
      image: Generique,
    },
    {
      name: t("crepes.amlou"),
      price: 60,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("crepes.title")}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {crepes.map((crepe, index) => (
          <div
            key={index}
            className=" bg-white border md:text-center border-gray-200 shadow"
          >
            <img
              src={crepe.image}
              alt={crepe.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{crepe.name}</p>
              <p className="text-sm text-gray-600 mt-2">{crepe.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crepe;
