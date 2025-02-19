import { useTranslation } from "react-i18next";
import Quinoa from "../../assets/salades/quinoa.png";
import Buddha from "../../assets/salades/buddha.png";
import Thai from "../../assets/salades/thai.png";
import Anges from "../../assets/salades/anges.png";
const Salade = () => {
  const { t } = useTranslation();

  const salades = [
    {
      title: t("salades.quinoa.title"),
      desc: t("salades.quinoa.desc"),
      price: 85,
      image: Quinoa,
    },
    {
      title: t("salades.buddha.title"),
      desc: t("salades.buddha.desc"),
      price: 90,
      image: Buddha,
    },
    {
      title: t("salades.thai.title"),
      desc: t("salades.thai.desc"),
      price: 90,
      image: Thai,
    },
    {
      title: t("salades.anges.title"),
      desc: t("salades.anges.desc"),
      price: 110,
      image: Anges,
    },
  ];

  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4">
        {t("salades.title")}
      </h2>
      <div className="w-[10%] h-[3px] bg-[#7ba7d3] mt-1 mb-6 ml-4"></div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {salades.map((salade, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={salade.image}
              alt={salade.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{salade.title}</p>
              <p className="italic text-gray-500 text-[12px]">{salade.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">
                {salade.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Salade;
