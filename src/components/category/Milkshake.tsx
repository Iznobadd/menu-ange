import { useTranslation } from "react-i18next";
import Chocolat from "../../assets/milkshakes/chocolat.png";
import Vanille from "../../assets/milkshakes/vanille.png";
import Banane from "../../assets/milkshakes/banane.png";
import Fraise from "../../assets/milkshakes/fraise.png";

const Milkshake = () => {
  const { t } = useTranslation();
  const milkshakes = [
    {
      title: t("milkshakes.chocolat.title"),
      desc: t("milkshakes.chocolat.desc"),
      price: 60,
      image: Chocolat,
    },
    {
      title: t("milkshakes.vanille.title"),
      desc: t("milkshakes.vanille.desc"),
      price: 60,
      image: Vanille,
    },
    {
      title: t("milkshakes.fraise.title"),
      desc: t("milkshakes.fraise.desc"),
      price: 60,
      image: Fraise,
    },
    {
      title: t("milkshakes.banane.title"),
      desc: t("milkshakes.banane.desc"),
      price: 65,
      image: Banane,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("milkshakes.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("milkshakes.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {milkshakes.map((milkshake, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={milkshake.image}
              alt={milkshake.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{milkshake.title}</p>
              <p className="italic text-gray-500 text-[12px]">
                {milkshake.desc}
              </p>
              <p className="text-[12px] text-gray-500 mt-2">
                {milkshake.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Milkshake;
