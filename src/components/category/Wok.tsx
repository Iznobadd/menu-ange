import { useTranslation } from "react-i18next";
import Legume from "../../assets/woks/legume.png";
import Poulet from "../../assets/woks/poulet.png";
import Boeuf from "../../assets/woks/boeuf.png";
import Crevette from "../../assets/woks/crevette.png";

const Wok = () => {
  const { t } = useTranslation();
  const woks = [
    {
      title: t("woks.legume.title"),
      desc: t("woks.legume.desc"),
      price: 70,
      image: Legume,
    },
    {
      title: t("woks.poulet.title"),
      desc: t("woks.poulet.desc"),
      price: 85,
      image: Poulet,
    },
    {
      title: t("woks.boeuf.title"),
      desc: t("woks.boeuf.desc"),
      price: 120,
      image: Boeuf,
    },
    {
      title: t("woks.crevette.title"),
      desc: t("woks.crevette.desc"),
      price: 120,
      image: Crevette,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("woks.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("woks.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {woks.map((wok, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={wok.image}
              alt={wok.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{wok.title}</p>
              <p className="italic text-gray-500 text-[12px]">{wok.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">{wok.price} dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wok;
