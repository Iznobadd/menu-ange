import { useTranslation } from "react-i18next";
import Boeuf from "../../assets/brochettes/boeuf.png";
import Gambas from "../../assets/brochettes/gambas.png";
import Poulet from "../../assets/brochettes/poulet.png";
import Kefta from "../../assets/brochettes/kefta.png";
import Accompagnement from "../../assets/accompagnement4.png";

const Brochette = () => {
  const { t } = useTranslation();
  const brochettes = [
    {
      title: t("brochettes.poulet.title"),
      desc: t("brochettes.poulet.desc"),
      price: 85,
      image: Poulet,
    },
    {
      title: t("brochettes.kefta.title"),
      desc: t("brochettes.kefta.desc"),
      price: 85,
      image: Kefta,
    },
    {
      title: t("brochettes.boeuf.title"),
      desc: t("brochettes.boeuf.desc"),
      price: 120,
      image: Boeuf,
    },
    {
      title: t("brochettes.gambas.title"),
      desc: t("brochettes.gambas.desc"),
      price: 120,
      image: Gambas,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("brochettes.title")}
      </h2>
      <div className="flex items-start mb-4">
        <div className="w-[40px] min-w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-1">
          {t("brochettes.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center">
          <img src={Accompagnement} className="w-2/3 inline-block" />
        </div>

        {brochettes.map((brochette, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={brochette.image}
              alt={brochette.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{brochette.title}</p>
              <p className="italic text-gray-500 text-[12px]">
                {brochette.desc}
              </p>
              <p className="text-[12px] text-gray-500 mt-2">
                {brochette.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brochette;
