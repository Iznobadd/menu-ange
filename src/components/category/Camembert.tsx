import { useTranslation } from "react-i18next";
import Roti from "../../assets/camembert/camembert.png";
const Camembert = () => {
  const { t } = useTranslation();
  const camembert = [
    {
      title: t("camembert.roti.title"),
      desc: t("camembert.roti.desc"),
      price: 120,
      image: Roti,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("camembert.title")}
      </h2>
      <div className="flex items-center mb-4">
        <div className="w-[40px] h-[3px] bg-[#7ba7d3] mt-1 mb-4 ml-4"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-3">
          {t("camembert.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {camembert.map((camember, index) => (
          <div
            key={index}
            className=" md:text-center flex justify-between items-center"
          >
            <img
              src={camember.image}
              alt={camember.title}
              className="object-cover w-[36%]"
            />
            <div className="py-2 w-[60%]">
              <p className="font-semibold text-md">{camember.title}</p>
              <p className="italic text-gray-500 text-[12px]">
                {camember.desc}
              </p>
              <p className="text-[12px] text-gray-500 mt-2">
                {camember.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Camembert;
