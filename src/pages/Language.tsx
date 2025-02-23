import ListFlags from "../components/ListFlags";
import Insta from "../assets/insta.png";
import Tiktok from "../assets/tiktok.png";
import Google from "../assets/google.png";
import Bg from "../assets/bg.png";
import Logo from "../assets/logo.png";

const Language = () => {
  return (
    <div className="flex h-[100svh] relative">
      <div className="min-w-[86%] h-full relative">
        <img src={Bg} className="w-full h-full" />
        <p className="absolute top-2 left-1/2 -translate-x-1/2 text-[14px] italic blinking">
          Choose your language
        </p>
        <img
          src={Logo}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3 w-2/3"
        />
        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 text-[14px] italic w-4/5 text-center">
          Un souffle d’épices, une lumière douce, le murmure de la médina… Ici,
          chaque assiette est une escapade, chaque moment une promesse.
          <br />
          <br />
          Prenez place, savourez, laissez-vous porter. Bienvenue aux Anges.
        </p>
        <div className="px-6 mt-8 flex justify-between items-center bottom-8 absolute text-center left-1/2 -translate-x-1/2 gap-4">
          {[Insta, Tiktok, Google].map((icon, index) => (
            <a
              key={index}
              href={
                index === 0
                  ? "https://www.instagram.com/lesanges_essaouira/"
                  : index === 1
                  ? "https://www.tiktok.com/@lesanges_essaouira"
                  : "https://g.co/kgs/PjDMbH8"
              }
              target="_blank"
              className="inline-block text-center"
            >
              <img src={icon} alt="" className="max-w-8" />
            </a>
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        <ListFlags />
      </div>
    </div>
  );
};

export default Language;
