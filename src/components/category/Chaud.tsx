import { useTranslation } from "react-i18next";
import Generique from "../../assets/salades/generique.jpg";
import Supplement from "../../assets/chaud/supplement.png";
const Chaud = () => {
  const { t } = useTranslation();
  const chauds = [
    {
      title: t("chaud.the-menthe.title"),
      desc: t("chaud.the-menthe.desc"),
      price: 20,
      image: Generique,
    },
    {
      title: t("chaud.the-corne.title"),
      desc: t("chaud.the-corne.desc"),
      price: 45,
      image: Generique,
    },
    {
      title: t("chaud.the-royal.title"),
      desc: t("chaud.the-royal.desc"),
      price: 30,
      image: Generique,
    },
    {
      title: t("chaud.the-earl.title"),
      desc: t("chaud.the-earl.desc"),
      price: 30,
      image: Generique,
    },
    {
      title: t("chaud.chocolat.title"),
      desc: t("chaud.chocolat.desc"),
      price: 30,
      image: Generique,
    },
    {
      title: t("chaud.nouss.title"),
      desc: t("chaud.nouss.desc"),
      price: 25,
      image: Generique,
    },
    {
      title: t("chaud.cafe-epice.title"),
      desc: t("chaud.cafe-epice.desc"),
      price: 30,
      image: Generique,
    },
    {
      title: t("chaud.expresso.title"),
      desc: t("chaud.expresso.desc"),
      price: 25,
      image: Generique,
    },
    {
      title: t("chaud.double.title"),
      desc: t("chaud.double.desc"),
      price: 45,
      image: Generique,
    },
    {
      title: t("chaud.capuccino.title"),
      desc: t("chaud.capuccino.desc"),
      price: 35,
      image: Generique,
    },
    {
      title: t("chaud.latte.title"),
      desc: t("chaud.latte.desc"),
      price: 35,
      image: Generique,
    },
    {
      title: t("chaud.cafe-glace.title"),
      desc: t("chaud.cafe-glace.desc"),
      price: 35,
      image: Generique,
    },
    {
      title: t("chaud.cafe-frappe.title"),
      desc: t("chaud.cafe-frappe.desc"),
      price: 50,
      image: Generique,
    },
    {
      title: t("chaud.cafe-illy.title"),
      desc: t("chaud.cafe-illy.desc"),
      price: 50,
      image: Generique,
    },
    {
      title: t("chaud.supplement.title"),
      desc: t("chaud.supplement.desc"),
      price: 20,
      image: Supplement,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("chaud.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("chaud.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {chauds.map((chaud, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={chaud.image}
              alt={chaud.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{chaud.title}</p>
              <p className="italic text-gray-500 text-[12px]">{chaud.desc}</p>
              <p className="text-[12px] text-gray-500 mt-2">
                {chaud.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chaud;
