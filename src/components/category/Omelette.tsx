import { useTranslation } from "react-i18next";
import Parmesan from "../../assets/omelettes/parmesan.png";
import Tomate from "../../assets/omelettes/tomate.png";
import Legume from "../../assets/omelettes/legume.png";

const Omelette = () => {
  const { t } = useTranslation();
  const omelettes = [
    {
      title: t("omelettes.tomate.title"),
      desc: t("omelettes.tomate.desc"),
      price: 50,
      image: Tomate,
    },
    {
      title: t("omelettes.parmesan.title"),
      desc: t("omelettes.parmesan.desc"),
      price: 65,
      image: Parmesan,
    },
    {
      title: t("omelettes.legume.title"),
      desc: t("omelettes.legume.desc"),
      price: 50,
      image: Legume,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("omelettes.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("omelettes.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {omelettes.map((omelette, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={omelette.image}
              alt={omelette.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{omelette.title}</p>
              <p className="italic text-gray-500 text-[12px]">
                {omelette.desc}
              </p>
              <p className="text-[12px] text-gray-500 mt-2">
                {omelette.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Omelette;
