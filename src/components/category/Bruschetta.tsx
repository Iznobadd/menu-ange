import { useTranslation } from "react-i18next";
import Chevre from "../../assets/bruschettas/chevre.png";
import Guacamole from "../../assets/bruschettas/guacamole.png";
import Islandaise from "../../assets/bruschettas/islandaise.png";
import Jambon from "../../assets/bruschettas/jambon.png";
import Poivron from "../../assets/bruschettas/poivron.png";

const Bruschetta = () => {
  const { t } = useTranslation();
  const bruschettas = [
    {
      title: t("bruschettas.chevre.title"),
      desc: t("bruschettas.chevre.desc"),
      price: 75,
      image: Chevre,
    },
    {
      title: t("bruschettas.jambon.title"),
      desc: t("bruschettas.jambon.desc"),
      price: 75,
      image: Jambon,
    },
    {
      title: t("bruschettas.poivrons.title"),
      desc: t("bruschettas.poivrons.desc"),
      price: 85,
      image: Poivron,
    },
    {
      title: t("bruschettas.guacamole.title"),
      desc: t("bruschettas.guacamole.desc"),
      price: 90,
      image: Guacamole,
    },
    {
      title: t("bruschettas.islandaise.title"),
      desc: t("bruschettas.islandaise.desc"),
      price: 100,
      image: Islandaise,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("bruschettas.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("bruschettas.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {bruschettas.map((bruschetta, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={bruschetta.image}
              alt={bruschetta.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{bruschetta.title}</p>
              <p className="italic text-gray-500 text-[12px]">
                {bruschetta.desc}
              </p>
              <p className="text-[12px] text-gray-500 mt-2">
                {bruschetta.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bruschetta;
