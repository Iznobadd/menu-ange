import i18next from "../utils/i18n";
import ukFlag from "../assets/flags/uk.svg";
import itFlag from "../assets/flags/italy.svg";
import esFlag from "../assets/flags/spain.svg";
import grFlag from "../assets/flags/germany.svg";
import frFlag from "../assets/flags/france.svg";
import { useNavigate } from "react-router";
const ListFlags = () => {
  const navigate = useNavigate();
  const setLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    localStorage.setItem("language", lang);
    navigate("/menu");
  };
  return (
    <div className="flex justify-center gap-x-3 gap-y-6 flex-wrap px-8 my-8">
      <div className=" p-2 rounded">
        <img
          src={ukFlag}
          alt="English"
          onClick={() => setLanguage("en")}
          className="max-h-6 cursor-pointer"
        />
      </div>
      <div className=" p-2 rounded">
        <img
          src={frFlag}
          alt="English"
          onClick={() => setLanguage("fr")}
          className="max-h-6 cursor-pointer"
        />
      </div>
      <div className=" p-2 rounded">
        <img
          src={itFlag}
          alt="English"
          onClick={() => setLanguage("it")}
          className="max-h-6 cursor-pointer"
        />
      </div>
      <div className=" p-2 rounded">
        <img
          src={esFlag}
          alt="English"
          onClick={() => setLanguage("es")}
          className="max-h-6 cursor-pointer"
        />
      </div>
      <div className=" p-2 rounded">
        <img
          src={grFlag}
          alt="English"
          onClick={() => setLanguage("gr")}
          className="max-h-6 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ListFlags;
