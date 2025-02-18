import { useTranslation } from "react-i18next";
import Biscuit from "../../assets/desserts/biscuit.png";
import Corne from "../../assets/desserts/corne.png";
import Mousse from "../../assets/desserts/mousse.png";
import PannaAmlou from "../../assets/desserts/panna-amlou.png";
import PannaPomme from "../../assets/desserts/panna-pomme.png";
import TiramisuCitron from "../../assets/desserts/tiramisu-citron.png";
import TiramisuDatte from "../../assets/desserts/tiramisu-datte.png";
import MeliMelo from "../../assets/desserts/meli-melo.png";

const Dessert = () => {
  const { t } = useTranslation();
  const desserts = [
    {
      name: t("desserts.tiramisu-datte"),
      price: 60,
      image: TiramisuDatte,
    },
    {
      name: t("desserts.tiramisu-citron"),
      price: 60,
      image: TiramisuCitron,
    },
    {
      name: t("desserts.panna-pomme"),
      price: 60,
      image: PannaPomme,
    },
    {
      name: t("desserts.panna-amlou"),
      price: 75,
      image: PannaAmlou,
    },
    {
      name: t("desserts.mousse"),
      price: 70,
      image: Mousse,
    },
    {
      name: t("desserts.meli-melo"),
      price: 70,
      image: MeliMelo,
    },
    {
      name: t("desserts.corne"),
      price: 35,
      image: Corne,
    },
    {
      name: t("desserts.biscuit"),
      price: 40,
      image: Biscuit,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2 text-[#7ba7d3]">
        {t("desserts.title")}
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {desserts.map((dessert, index) => (
          <div key={index} className=" md:text-center">
            <img
              src={dessert.image}
              alt={dessert.name}
              className="w-full h-32 object-contain mb-4"
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
