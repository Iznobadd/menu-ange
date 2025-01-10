import Brochette from "../components/category/Brochette";
import Bruschetta from "../components/category/Bruschetta";
import Burger from "../components/category/Burger";
import Panini from "../components/category/Panini";
import Salade from "../components/category/Salade";
import Wok from "../components/category/Wok";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <div>
      <Menu />
      <div className="pt-32 px-6">
        <section id="salade">
          <Salade />
        </section>
        <section id="brochette">
          <Brochette />
        </section>
        <section id="wok">
          <Wok />
        </section>
        <section id="burger">
          <Burger />
        </section>
        <section id="bruschetta">
          <Bruschetta />
        </section>
        <section id="panini">
          <Panini />
        </section>
      </div>
    </div>
  );
};

export default Home;
