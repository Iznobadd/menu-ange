import i18next from "../utils/i18n";
import ukFlag from "../assets/flags/uk.svg";
import itFlag from "../assets/flags/italy.svg";
import esFlag from "../assets/flags/spain.svg";
import grFlag from "../assets/flags/germany.svg";
import frFlag from "../assets/flags/france.svg";
const ListFlags = () => {
  const setLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    localStorage.setItem("language", lang);
  };
  return (
    <div className="grid grid-cols-3 gap-4">
      <img
        src={ukFlag}
        alt="English"
        onClick={() => setLanguage("en")}
        className="max-h-12"
      />
      <img
        src={frFlag}
        alt="English"
        onClick={() => setLanguage("fr")}
        className="max-h-12"
      />
      <img
        src={esFlag}
        alt="English"
        onClick={() => setLanguage("es")}
        className="max-h-12"
      />
      <img
        src={itFlag}
        alt="English"
        onClick={() => setLanguage("it")}
        className="max-h-12"
      />
      <img
        src={grFlag}
        alt="English"
        onClick={() => setLanguage("gr")}
        className="max-h-12"
      />
    </div>
  );
};

export default ListFlags;