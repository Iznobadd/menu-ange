import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";
import Corne from "../../assets/desserts/corne.jpg";

const Dessert = () => {
  const { t } = useTranslation();
  const desserts = [
    {
      name: t("desserts.tiramisu-datte"),
      price: 60,
      image: Generique,
    },
    {
      name: t("desserts.tiramisu-citron"),
      price: 60,
      image: Generique,
    },
    {
      name: t("desserts.panna-pomme"),
      price: 60,
      image: Generique,
    },
    {
      name: t("desserts.panna-amlou"),
      price: 75,
      image: Generique,
    },
    {
      name: t("desserts.mousse"),
      price: 70,
      image: Generique,
    },
    {
      name: t("desserts.meli-melo"),
      price: 65,
      image: Generique,
    },
    {
      name: t("desserts.corne"),
      price: 30,
      image: Corne,
    },
    {
      name: t("desserts.biscuit"),
      price: 40,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2">{t("desserts.title")}</h2>
      <div className="grid grid-cols-2 gap-4">
        {desserts.map((dessert, index) => (
          <div key={index} className=" bg-white border border-gray-200 shadow">
            <img
              src={dessert.image}
              alt={dessert.name}
              className="w-full h-32 object-cover mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{dessert.name}</p>
              <p className="text-sm text-gray-600 mt-2">{dessert.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dessert;
