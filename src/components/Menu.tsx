import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import BgTop from "../assets/bg-top.png";
import Logo from "../assets/logo.png";
const Menu = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -200;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const topOffset = 250;
      if (rect.top <= topOffset && rect.bottom > topOffset) {
        setActiveSection(section.id);

        const activeButton = document.querySelector(
          `button[data-id="${section.id}"]`
        );
        if (activeButton && menuRef.current) {
          const buttonRect = (
            activeButton as HTMLElement
          ).getBoundingClientRect();
          const menuRect = menuRef.current.getBoundingClientRect();

          if (
            buttonRect.left < menuRect.left ||
            buttonRect.right > menuRect.right
          ) {
            activeButton.scrollIntoView({
              behavior: "smooth",
              inline: "center",
              block: "nearest",
            });
          }
        }
      }
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      <div className="fixed top-[75px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center z-50">
        <img src={Logo} className="w-[150px]" />
      </div>
      <div
        ref={menuRef}
        className="fixed top-0 h-auto w-full flex items-end gap-3 px-4 pt-[135px] overflow-x-auto whitespace-nowrap bg-contain bg-right"
        style={{ backgroundImage: `url(${BgTop})` }}
      >
        <button
          data-id="salade"
          onClick={() => scrollToSection("salade")}
          className={`py-2 px-2 text-white ${
            activeSection === "salade" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("salades.title")}
        </button>
        <button
          data-id="brochette"
          onClick={() => scrollToSection("brochette")}
          className={`py-2 px-2 text-white ${
            activeSection === "brochette"
              ? "text-[#7ba7d3] rounded"
              : " rounded"
          }`}
        >
          {t("brochettes.title")}
        </button>
        <button
          data-id="wok"
          onClick={() => scrollToSection("wok")}
          className={`py-2 px-2 text-white ${
            activeSection === "wok" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("woks.title")}
        </button>
        <button
          data-id="burger"
          onClick={() => scrollToSection("burger")}
          className={`py-2 px-2 text-white ${
            activeSection === "burger" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("burgers.title")}
        </button>
        <button
          data-id="bruschetta"
          onClick={() => scrollToSection("bruschetta")}
          className={`py-2 px-2 text-white ${
            activeSection === "bruschetta"
              ? "text-[#7ba7d3] rounded"
              : " rounded"
          }`}
        >
          {t("bruschettas.title")}
        </button>
        <button
          data-id="panini"
          onClick={() => scrollToSection("panini")}
          className={`py-2 px-2 text-white ${
            activeSection === "panini" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("paninis.title")}
        </button>
        <button
          data-id="pate"
          onClick={() => scrollToSection("pate")}
          className={`py-2 px-2 text-white ${
            activeSection === "pate" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("pates.title")}
        </button>
        <button
          data-id="pastilla"
          onClick={() => scrollToSection("pastilla")}
          className={`py-2 px-2 text-white ${
            activeSection === "pastilla" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("pastillas.title")}
        </button>
        <button
          data-id="omelette"
          onClick={() => scrollToSection("omelette")}
          className={`py-2 px-2 text-white ${
            activeSection === "omelette" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("omelettes.title")}
        </button>
        <button
          data-id="soupe"
          onClick={() => scrollToSection("soupe")}
          className={`py-2 px-2 text-white ${
            activeSection === "soupe" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("soupes.title")}
        </button>
        <button
          data-id="enfant"
          onClick={() => scrollToSection("enfant")}
          className={`py-2 px-2 text-white ${
            activeSection === "enfant" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("enfant.title")}
        </button>
        <button
          data-id="dessert"
          onClick={() => scrollToSection("dessert")}
          className={`py-2 px-2 text-white ${
            activeSection === "dessert" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("desserts.title")}
        </button>
        <button
          data-id="crepe"
          onClick={() => scrollToSection("crepe")}
          className={`py-2 px-2 text-white ${
            activeSection === "crepe" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("crepes.title")}
        </button>
        <button
          data-id="glace"
          onClick={() => scrollToSection("glace")}
          className={`py-2 px-2 text-white ${
            activeSection === "glace" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("glaces.title")}
        </button>
        <button
          data-id="milkshake"
          onClick={() => scrollToSection("milkshake")}
          className={`py-2 px-2 text-white ${
            activeSection === "milkshake"
              ? "text-[#7ba7d3] rounded"
              : " rounded"
          }`}
        >
          {t("milkshakes.title")}
        </button>
        <button
          data-id="soft"
          onClick={() => scrollToSection("soft")}
          className={`py-2 px-2 text-white ${
            activeSection === "soft" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("soft.title")}
        </button>
        <button
          data-id="chaud"
          onClick={() => scrollToSection("chaud")}
          className={`py-2 px-2 text-white ${
            activeSection === "chaud" ? "text-[#7ba7d3] rounded" : " rounded"
          }`}
        >
          {t("chaud.title")}
        </button>
      </div>
    </div>
  );
};

export default Menu;
