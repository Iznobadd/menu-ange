import { useTranslation } from "react-i18next";
import ListFlags from "../components/ListFlags";

const Language = () => {
  const { t } = useTranslation();
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <div className="text-center">
        <ListFlags />
        <h2 className="text-center">{t("language.choose")}</h2>
      </div>
    </div>
  );
};

export default Language;
