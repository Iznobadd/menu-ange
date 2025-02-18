import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";

const Salade = () => {
  const { t } = useTranslation();

  const salades = [
    {
      title: t("salades.quinoa.title"),
      desc: t("salades.quinoa.desc"),
      price: 85,
      image: Generique,
    },
    // {
    //   name: t("salades.buddha"),
    //   price: 90,
    //   image: Generique,
    // },
    // {
    //   name: t("salades.thai"),
    //   price: 95,
    //   image: Generique,
    // },
    // {
    //   name: t("salades.anges"),
    //   price: 110,
    //   image: Generique,
    // },
  ];

  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl mb-2 text-[#7ba7d3]">
        {t("salades.title")}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {salades.map((salade, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={salade.image}
              alt={salade.title}
              className="h-24 object-cover w-[39%]"
            />
            <div className="p-2 w-[60%]">
              <p className="font-semibold text-md">{salade.title}</p>
              <p className="italic text-gray-500 text-[12px]">{salade.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">
                {salade.price} Dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salade;
