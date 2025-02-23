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
              block: "center",
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
        className="fixed top-0 h-[175px] w-full flex items-end gap-3 pt-[135px] overflow-x-auto whitespace-nowrap bg-contain bg-right px-4"
        style={{ backgroundImage: `url(${BgTop})` }}
      >
        {[
          "salades",
          "bruschettas",
          "camembert",
          "pates",
          "burgers",
          "paninis",
          "croques",
          "brochettes",
          "pastillas",
          "woks",
          "couscous",
          "omelettes",
          "soupes",
          "enfant",
          "dej",
          "desserts",
          "crepes",
          "glaces",
          "milkshakes",
          "jus",
          "soft",
          "chaud",
        ].map((item) => (
          <button
            key={item}
            data-id={item}
            onClick={() => scrollToSection(item)}
            className={`px-2 pt-2 pb-1 text-white ${
              activeSection === item ? "!text-[#7ba7d3] rounded" : " rounded"
            }`}
          >
            {t(`${item}.title`)}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Menu;
