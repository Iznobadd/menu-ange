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
    </div>
  );
};

export default Menu;
