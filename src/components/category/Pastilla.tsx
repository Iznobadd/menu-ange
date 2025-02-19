import { useTranslation } from "react-i18next";
import Legume from "../../assets/pastillas/legume.png";
import Poulet from "../../assets/pastillas/poulet.png";
import Mer from "../../assets/pastillas/mer.png";
const Pastilla = () => {
  const { t } = useTranslation();
  const pastillas = [
    {
      title: t("pastillas.legume.title"),
      desc: t("pastillas.legume.desc"),
      price: 80,
      image: Legume,
    },
    {
      title: t("pastillas.poulet.title"),
      desc: t("pastillas.poulet.desc"),
      price: 90,
      image: Poulet,
    },
    {
      title: t("pastillas.mer.title"),
      desc: t("pastillas.mer.desc"),
      price: 110,
      image: Mer,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("pastillas.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("pastillas.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {pastillas.map((pastilla, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={pastilla.image}
              alt={pastilla.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{pastilla.title}</p>
              <p className="italic text-gray-500 text-[12px]">
                {pastilla.desc}
              </p>
              <p className="text-[12px] text-gray-500 mt-2">
                {pastilla.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pastilla;
