import { useState, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const Menu = () => {
  const { t } = useTranslation();
  const [activeSection, setActiveSection] = useState<string>("");
  const menuRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -100;
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const topOffset = 150;
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
    <div
      ref={menuRef}
      className="fixed top-0 h-auto bg-white w-full py-4 flex items-center gap-8 px-6 overflow-x-auto whitespace-nowrap"
    >
      <button
        data-id="salade"
        onClick={() => scrollToSection("salade")}
        className={`text-black py-2 px-4 ${
          activeSection === "salade"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("salades.title")}
      </button>
      <button
        data-id="brochette"
        onClick={() => scrollToSection("brochette")}
        className={`text-black py-2 px-4 ${
          activeSection === "brochette"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("brochettes.title")}
      </button>
      <button
        data-id="wok"
        onClick={() => scrollToSection("wok")}
        className={`text-black py-2 px-4 ${
          activeSection === "wok"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("woks.title")}
      </button>
      <button
        data-id="burger"
        onClick={() => scrollToSection("burger")}
        className={`text-black py-2 px-4 ${
          activeSection === "burger"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("burgers.title")}
      </button>
      <button
        data-id="bruschetta"
        onClick={() => scrollToSection("bruschetta")}
        className={`text-black py-2 px-4 ${
          activeSection === "bruschetta"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("bruschettas.title")}
      </button>
      <button
        data-id="panini"
        onClick={() => scrollToSection("panini")}
        className={`text-black py-2 px-4 ${
          activeSection === "panini"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("paninis.title")}
      </button>
      <button
        data-id="pate"
        onClick={() => scrollToSection("pate")}
        className={`text-black py-2 px-4 ${
          activeSection === "pate"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("pates.title")}
      </button>
      <button
        data-id="pastilla"
        onClick={() => scrollToSection("pastilla")}
        className={`text-black py-2 px-4 ${
          activeSection === "pastilla"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("pastillas.title")}
      </button>
      <button
        data-id="omelette"
        onClick={() => scrollToSection("omelette")}
        className={`text-black py-2 px-4 ${
          activeSection === "omelette"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("omelettes.title")}
      </button>
      <button
        data-id="soupe"
        onClick={() => scrollToSection("soupe")}
        className={`text-black py-2 px-4 ${
          activeSection === "soupe"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("soupes.title")}
      </button>
      <button
        data-id="enfant"
        onClick={() => scrollToSection("enfant")}
        className={`text-black py-2 px-4 ${
          activeSection === "enfant"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("enfant.title")}
      </button>
      <button
        data-id="dessert"
        onClick={() => scrollToSection("dessert")}
        className={`text-black py-2 px-4 ${
          activeSection === "dessert"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("desserts.title")}
      </button>
      <button
        data-id="crepe"
        onClick={() => scrollToSection("crepe")}
        className={`text-black py-2 px-4 ${
          activeSection === "crepe"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("crepes.title")}
      </button>
      <button
        data-id="glace"
        onClick={() => scrollToSection("glace")}
        className={`text-black py-2 px-4 ${
          activeSection === "glace"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("glaces.title")}
      </button>
      <button
        data-id="milkshake"
        onClick={() => scrollToSection("milkshake")}
        className={`text-black py-2 px-4 ${
          activeSection === "milkshake"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("milkshakes.title")}
      </button>
      <button
        data-id="soft"
        onClick={() => scrollToSection("soft")}
        className={`text-black py-2 px-4 ${
          activeSection === "soft"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("soft.title")}
      </button>
      <button
        data-id="chaud"
        onClick={() => scrollToSection("chaud")}
        className={`text-black py-2 px-4 ${
          activeSection === "chaud"
            ? "bg-green-400 rounded"
            : "bg-gray-200 rounded"
        }`}
      >
        {t("chaud.title")}
      </button>
    </div>
  );
};

export default Menu;
