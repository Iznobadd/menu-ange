const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-black/60 text-white text-[9px] text-center py-1 font-light tracking-wider">
      © {new Date().getFullYear()} Copyright |
      <a href="mailto:contact@nomaado.com" className="px-2">
        NOMAADŌ
      </a>
      All Rights Reserved
    </div>
  );
};

export default Footer;
