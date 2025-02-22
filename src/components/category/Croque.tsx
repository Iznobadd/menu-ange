import { useTranslation } from "react-i18next";
import Grison from "../../assets/croques/grison.png";
import Brie from "../../assets/croques/brie.png";
import Poulet from "../../assets/croques/poulet.png";
import Accompagnement from "../../assets/accompagnement2.png";

const Croque = () => {
  const { t } = useTranslation();
  const croques = [
    {
      title: t("croques.grison.title"),
      desc: t("croques.grison.desc"),
      price: 100,
      image: Grison,
    },
    {
      title: t("croques.brie.title"),
      desc: t("croques.brie.desc"),
      price: 80,
      image: Brie,
    },
    {
      title: t("croques.poulet.title"),
      desc: t("croques.poulet.desc"),
      price: 85,
      image: Poulet,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("croques.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("croques.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="text-center">
          <img src={Accompagnement} className="w-full inline-block" />
        </div>
        {croques.map((croque, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={croque.image}
              alt={croque.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{croque.title}</p>
              <p className="italic text-gray-500 text-[12px]">{croque.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">
                {croque.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Croque;
