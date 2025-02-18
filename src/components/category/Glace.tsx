import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Glace = () => {
  const { t } = useTranslation();
  const glaces = [
    {
      name: t("glaces.une"),
      price: 20,
      image: Generique,
    },
    {
      name: t("glaces.deux"),
      price: 35,
      image: Generique,
    },
    {
      name: t("glaces.trois"),
      price: 50,
      image: Generique,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-xl mb-2 text-[#7ba7d3]">
        {t("glaces.title")}
      </h2>
      <p className="mb-6 text-gray-500">
        <i>{t("glaces.desc")}</i>
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {glaces.map((glace, index) => (
          <div key={index} className=" md:text-center">
            <img
              src={glace.image}
              alt={glace.name}
              className="w-full h-32 object-contain mb-4"
            />
            <div className="p-2">
              <p className="font-bold text-md">{glace.name}</p>
              <p className="text-sm text-gray-600 mt-2">{glace.price} Dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Glace;
