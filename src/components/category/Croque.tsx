import { useTranslation } from "react-i18next";
import Parmesan from "../../assets/omelettes/parmesan.png";
import Tomate from "../../assets/omelettes/tomate.png";
import Legume from "../../assets/omelettes/legume.png";
import Accompagnement from "../../assets/accompagnement2.png";

const Croque = () => {
  const { t } = useTranslation();
  const croques = [
    {
      title: t("croques.tomate.title"),
      desc: t("croques.tomate.desc"),
      price: 50,
      image: Tomate,
    },
    {
      title: t("croques.parmesan.title"),
      desc: t("croques.parmesan.desc"),
      price: 65,
      image: Parmesan,
    },
    {
      title: t("croques.legume.title"),
      desc: t("croques.legume.desc"),
      price: 50,
      image: Legume,
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
