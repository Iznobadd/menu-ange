import { useTranslation } from "react-i18next";
import Legume from "../../assets/soupes/legume.png";
import Poisson from "../../assets/soupes/poisson.png";

const Soupe = () => {
  const { t } = useTranslation();
  const soupes = [
    {
      title: t("soupes.potiron.title"),
      desc: t("soupes.potiron.desc"),
      price: 60,
      image: Legume,
    },
    {
      title: t("soupes.poisson.title"),
      desc: t("soupes.poisson.desc"),
      price: 100,
      image: Poisson,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("soupes.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("soupes.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {soupes.map((soupe, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={soupe.image}
              alt={soupe.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{soupe.title}</p>
              <p className="italic text-gray-500 text-[12px]">{soupe.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">
                {soupe.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soupe;
