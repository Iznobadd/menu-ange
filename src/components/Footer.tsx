const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full bg-black/60 text-white text-[9px] text-center py-1 font-light tracking-wider">
      © {new Date().getFullYear()} Copyright | VB Digital all rights reserved
    </div>
  );
};

export default Footer;
