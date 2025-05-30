import i18next from "../utils/i18n";
import ukFlag from "../assets/flags/uk.svg";
import itFlag from "../assets/flags/italy.svg";
import esFlag from "../assets/flags/spain.svg";
import grFlag from "../assets/flags/germany.svg";
import frFlag from "../assets/flags/france.svg";
import arFlag from "../assets/flags/morocco.png";

import { useNavigate } from "react-router";
const ListFlags = () => {
  const navigate = useNavigate();
  const setLanguage = (lang: string) => {
    i18next.changeLanguage(lang);
    localStorage.setItem("language", lang);
    navigate("/menu");
  };
  return (
    <div className="flex justify-center items-center gap-x-3 flex-wrap my-8 px-[2px] gap-y-8">
      <div className="rounded">
        <img
          src={frFlag}
          alt="Français"
          onClick={() => setLanguage("fr")}
          className="max-h-6 cursor-pointer md:max-h-16"
        />
      </div>

      <div className="rounded">
        <img
          src={ukFlag}
          alt="English"
          onClick={() => setLanguage("en")}
          className="max-h-6 cursor-pointer md:max-h-16"
        />
      </div>

      <div className="rounded">
        <img
          src={itFlag}
          alt="Italiano"
          onClick={() => setLanguage("it")}
          className="max-h-6 cursor-pointer md:max-h-16"
        />
      </div>
      <div className="rounded">
        <img
          src={esFlag}
          alt="Español"
          onClick={() => setLanguage("es")}
          className="max-h-6 cursor-pointer md:max-h-16"
        />
      </div>
      <div className="rounded">
        <img
          src={grFlag}
          alt="Deutsch"
          onClick={() => setLanguage("gr")}
          className="max-h-6 cursor-pointer md:max-h-16"
        />
      </div>
      <div className="rounded">
        <img
          src={arFlag}
          alt="Morocco"
          onClick={() => setLanguage("ar")}
          className="max-h-7 cursor-pointer md:max-h-20"
        />
      </div>
    </div>
  );
};

export default ListFlags;
