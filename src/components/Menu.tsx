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
      className="fixed top-0 h-auto bg-gray-900 w-full py-8 flex items-center gap-8 px-6 overflow-x-auto whitespace-nowrap"
    >
      <button
        data-id="salade"
        onClick={() => scrollToSection("salade")}
        className={`text-white py-2 px-4 ${
          activeSection === "salade" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("salades.title")}
      </button>
      <button
        data-id="brochette"
        onClick={() => scrollToSection("brochette")}
        className={`text-white py-2 px-4 ${
          activeSection === "brochette" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("brochettes.title")}
      </button>
      <button
        data-id="wok"
        onClick={() => scrollToSection("wok")}
        className={`text-white py-2 px-4 ${
          activeSection === "wok" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("woks.title")}
      </button>
      <button
        data-id="burger"
        onClick={() => scrollToSection("burger")}
        className={`text-white py-2 px-4 ${
          activeSection === "burger" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("burgers.title")}
      </button>
      <button
        data-id="bruschetta"
        onClick={() => scrollToSection("bruschetta")}
        className={`text-white py-2 px-4 ${
          activeSection === "bruschetta" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("bruschettas.title")}
      </button>
      <button
        data-id="panini"
        onClick={() => scrollToSection("panini")}
        className={`text-white py-2 px-4 ${
          activeSection === "panini" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("paninis.title")}
      </button>
      <button
        data-id="pate"
        onClick={() => scrollToSection("pate")}
        className={`text-white py-2 px-4 ${
          activeSection === "pate" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("pates.title")}
      </button>
      <button
        data-id="pastilla"
        onClick={() => scrollToSection("pastilla")}
        className={`text-white py-2 px-4 ${
          activeSection === "pastilla" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("pastillas.title")}
      </button>
      <button
        data-id="omelette"
        onClick={() => scrollToSection("omelette")}
        className={`text-white py-2 px-4 ${
          activeSection === "omelette" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("omelettes.title")}
      </button>
      <button
        data-id="soupe"
        onClick={() => scrollToSection("soupe")}
        className={`text-white py-2 px-4 ${
          activeSection === "soupe" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("soupes.title")}
      </button>
      <button
        data-id="enfant"
        onClick={() => scrollToSection("enfant")}
        className={`text-white py-2 px-4 ${
          activeSection === "enfant" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("enfant.title")}
      </button>
      <button
        data-id="dessert"
        onClick={() => scrollToSection("dessert")}
        className={`text-white py-2 px-4 ${
          activeSection === "dessert" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("desserts.title")}
      </button>
      <button
        data-id="crepe"
        onClick={() => scrollToSection("crepe")}
        className={`text-white py-2 px-4 ${
          activeSection === "crepe" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("crepes.title")}
      </button>
      <button
        data-id="glace"
        onClick={() => scrollToSection("glace")}
        className={`text-white py-2 px-4 ${
          activeSection === "glace" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("glaces.title")}
      </button>
      <button
        data-id="milkshake"
        onClick={() => scrollToSection("milkshake")}
        className={`text-white py-2 px-4 ${
          activeSection === "milkshake" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("milkshakes.title")}
      </button>
      <button
        data-id="soft"
        onClick={() => scrollToSection("soft")}
        className={`text-white py-2 px-4 ${
          activeSection === "soft" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("soft.title")}
      </button>
      <button
        data-id="chaud"
        onClick={() => scrollToSection("chaud")}
        className={`text-white py-2 px-4 ${
          activeSection === "chaud" ? "bg-[#194697] rounded" : ""
        }`}
      >
        {t("chaud.title")}
      </button>
    </div>
  );
};

export default Menu;
