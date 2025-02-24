import { useTranslation } from "react-i18next";
import GlaceImg from "../../assets/glaces/glace.png";

const Glace = () => {
  const { t } = useTranslation();
  const pglace = {
    name: t("glaces.une"),
    price: 20,
  };

  const glaces = [
    {
      name: t("glaces.deux"),
      price: 35,
    },
    {
      name: t("glaces.trois"),
      price: 50,
    },
  ];
  return (
    <div className="my-4">
      <h2 className="font-bold text-3xl text-[#7ba7d3] px-4 mt-16">
        {t("glaces.title")}
      </h2>
      <div className="flex items-start">
        <div className="w-[40px] min-w-[40px] h-[3px] bg-[#7ba7d3] mb-4 ml-4 mt-1"></div>
        <p className="px-4 text-[#7ba7d3] text-[13px] -mt-1">
          {t("glaces.desc")}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className=" md:text-center flex justify-between items-center">
          <img src={GlaceImg} alt="Glace" className="object-cover w-[40%]" />
          <div className="py-2 w-[55%]">
            <div className="flex justify-start gap-8 items-center">
              <p className="font-semibold text-md">{pglace.name}</p>
              <p className="text-[12px] text-gray-500 text-right pl-[6px]">
                {pglace.price} dhs
              </p>
            </div>
            {glaces.map((glace, index) => (
              <div
                className="flex justify-start gap-8 items-center"
                key={index}
              >
                <p className="font-semibold text-md">{glace.name}</p>
                <p className="text-[12px] text-gray-500 ">{glace.price} dhs</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Glace;
