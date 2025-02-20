import { useTranslation } from "react-i18next";
import Coca from "../../assets/soft/coca.png";
import Biere from "../../assets/soft/biere.png";
import IceTea from "../../assets/soft/ice-tea.png";
import Monin from "../../assets/soft/monin.png";
import Schweppes from "../../assets/soft/schweppes.png";
import Sprite from "../../assets/soft/sprite.png";
import BlueVirgin from "../../assets/soft/blue-virgin.png";
import VirginCafe from "../../assets/soft/virgin-cafe.png";
import Eau from "../../assets/soft/eau.png";
import Petillant from "../../assets/soft/petillant.png";

const Soft = () => {
  const { t } = useTranslation();
  const softs = [
    {
      title: t("soft.virgin.title"),
      desc: t("soft.virgin.desc"),
      price: 65,
      image: BlueVirgin,
    },
    {
      title: t("soft.virgin-cafe.title"),
      desc: t("soft.virgin-cafe.desc"),
      price: 70,
      image: VirginCafe,
    },
    {
      title: t("soft.coca.title"),
      desc: t("soft.coca.desc"),
      price: 20,
      image: Coca,
    },
    {
      title: t("soft.sprite.title"),
      desc: t("soft.sprite.desc"),
      price: 20,
      image: Sprite,
    },
    {
      title: t("soft.schweppes.title"),
      desc: t("soft.schweppes.desc"),
      price: 20,
      image: Schweppes,
    },
    {
      title: t("soft.ice-tea.title"),
      desc: t("soft.ice-tea.desc"),
      price: 20,
      image: IceTea,
    },
    {
      title: t("soft.biere.title"),
      desc: t("soft.biere.desc"),
      price: 50,
      image: Biere,
    },
    {
      title: t("soft.sirop-eau.title"),
      desc: t("soft.sirop-eau.desc"),
      price: 35,
      image: Monin,
    },
    {
      title: t("soft.sirop-diabolo.title"),
      desc: t("soft.sirop-diabolo.desc"),
      price: 40,
      image: Monin,
    },
    {
      title: t("soft.eau.title"),
      desc: t("soft.eau.desc"),
      price: "10 dhs / 25",
      image: Eau,
    },
    {
      title: t("soft.eau-petillante.title"),
      desc: t("soft.eau-petillante.desc"),
      price: "15 dhs / 30",
      image: Petillant,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("soft.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("soft.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {softs.map((soft, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={soft.image}
              alt={soft.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{soft.title}</p>
              <p className="italic text-gray-500 text-[12px]">{soft.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">{soft.price} dhs</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Soft;
