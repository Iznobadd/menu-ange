import { useTranslation } from "react-i18next";
import Compote from "../../assets/crepes/compote.png";
import Sucre from "../../assets/crepes/sucre.png";
import Nutella from "../../assets/crepes/nutella.png";
import Banane from "../../assets/crepes/banane.png";
import Suzette from "../../assets/crepes/suzette.png";
import Miel from "../../assets/crepes/miel.png";
import Caramel from "../../assets/crepes/caramel.png";
import Amlou from "../../assets/crepes/amlou.png";
import ChocolatNoir from "../../assets/crepes/chocolat-noir.png";

const Crepe = () => {
  const { t } = useTranslation();
  const crepes = [
    {
      title: t("crepes.compote.title"),
      desc: t("crepes.compote.desc"),
      price: 40,
      image: Compote,
    },
    {
      title: t("crepes.sucre.title"),
      desc: t("crepes.sucre.desc"),
      price: 40,
      image: Sucre,
    },
    {
      title: t("crepes.nutella.title"),
      desc: t("crepes.nutella.desc"),
      price: 40,
      image: Nutella,
    },
    {
      title: t("crepes.banane.title"),
      desc: t("crepes.banane.desc"),
      price: 50,
      image: Banane,
    },
    {
      title: t("crepes.chocolat.title"),
      desc: t("crepes.chocolat.desc"),
      price: 50,
      image: ChocolatNoir,
    },
    {
      title: t("crepes.suzette.title"),
      desc: t("crepes.suzette.desc"),
      price: 50,
      image: Suzette,
    },
    {
      title: t("crepes.miel.title"),
      desc: t("crepes.miel.desc"),
      price: 55,
      image: Miel,
    },
    {
      title: t("crepes.caramel.title"),
      desc: t("crepes.caramel.desc"),
      price: 55,
      image: Caramel,
    },
    {
      title: t("crepes.amlou.title"),
      desc: t("crepes.amlou.desc"),
      price: 60,
      image: Amlou,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("crepes.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("crepes.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {crepes.map((crepe, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={crepe.image}
              alt={crepe.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{crepe.title}</p>
              <p className="italic text-gray-500 text-[12px]">{crepe.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">
                {crepe.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Crepe;
