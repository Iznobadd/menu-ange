import { useTranslation } from "react-i18next";
import Poulet from "../../assets/couscous/poulet.png";
const Couscous = () => {
  const { t } = useTranslation();
  const couscous = [
    {
      title: t("couscous.vege.title"),
      desc: t("couscous.vege.desc"),
      price: 80,
      image: Poulet,
    },
    {
      title: t("couscous.poulet.title"),
      desc: t("couscous.poulet.desc"),
      price: 90,
      image: Poulet,
    },
    {
      title: t("couscous.boeuf.title"),
      desc: t("couscous.boeuf.desc"),
      price: 100,
      image: Poulet,
    },
    {
      title: t("couscous.agneau.title"),
      desc: t("couscous.agneau.desc"),
      price: 120,
      image: Poulet,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("couscous.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("couscous.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {couscous.map((couscou, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={couscou.image}
              alt={couscou.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{couscou.title}</p>
              <p className="italic text-gray-500 text-[12px]">{couscou.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">
                {couscou.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Couscous;
