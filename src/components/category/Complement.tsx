import { useTranslation } from "react-i18next";

const Complement = () => {
  const { t } = useTranslation();
  const complements = [
    {
      name: t("complement.desc.title"),
      price: t("complement.desc.price"),
    },
    {
      name: t("complement.desc2.title"),
      price: t("complement.desc2.price"),
    },
    {
      name: t("complement.desc3.title"),
      price: t("complement.desc3.price"),
    },
    {
      name: t("complement.desc4.title"),
      price: t("complement.desc4.price"),
    },
    {
      name: t("complement.desc5.title"),
      price: t("complement.desc5.price"),
    },
    {
      name: t("complement.desc6.title"),
      price: t("complement.desc6.price"),
    },
    {
      name: t("complement.desc7.title"),
      price: t("complement.desc7.price"),
    },
    {
      name: t("complement.desc8.title"),
      price: t("complement.desc8.price"),
    },
    {
      name: t("complement.desc9.title"),
      price: t("complement.desc9.price"),
    },
    {
      name: t("complement.desc10.title"),
      price: t("complement.desc10.price"),
    },
    {
      name: t("complement.desc11.title"),
      price: t("complement.desc11.price"),
    },
    {
      name: t("complement.desc12.title"),
      price: t("complement.desc12.price"),
    },
    {
      name: t("complement.desc13.title"),
      price: t("complement.desc13.price"),
    },
    {
      name: t("complement.desc14.title"),
      price: t("complement.desc14.price"),
    },
    {
      name: t("complement.desc15.title"),
      price: t("complement.desc15.price"),
    },
    {
      name: t("complement.desc16.title"),
      price: t("complement.desc16.price"),
    },
    {
      name: t("complement.desc17.title"),
      price: t("complement.desc17.price"),
    },
  ];

  return (
    <div className="mb-4 mt-14">
      <h2 className="font-bold text-xl text-[#7ba7d3] px-4 my-4 !tracking-wide">
        {t("complement.title")}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {complements.map((complement, index) => (
          <div key={index} className="md:text-center">
            <div className="px-2 flex justify-between items-center">
              <p className="font-normal text-md text-left leading-tight">
                ▪ {complement.name}
              </p>
              <p className="text-[12px] text-gray-500">
                {complement.price} dhs
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Complement;
