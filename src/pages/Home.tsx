import Brochette from "../components/category/Brochette";
import Bruschetta from "../components/category/Bruschetta";
import Burger from "../components/category/Burger";
import Chaud from "../components/category/Chaud";
import Crepe from "../components/category/Crepe";
import Dessert from "../components/category/Dessert";
import Enfant from "../components/category/Enfant";
import Glace from "../components/category/Glace";
import Milkshake from "../components/category/Milkshake";
import Omelette from "../components/category/Omelette";
import Panini from "../components/category/Panini";
import Pastilla from "../components/category/Pastilla";
import Pate from "../components/category/Pate";
import Salade from "../components/category/Salade";
import Soft from "../components/category/Soft";
import Soupe from "../components/category/Soupe";
import Wok from "../components/category/Wok";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <div>
      <Menu />
      <div className="pt-20 px-6">
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
        <section id="pate">
          <Pate />
        </section>
        <section id="pastilla">
          <Pastilla />
        </section>
        <section id="omelette">
          <Omelette />
        </section>
        <section id="soupe">
          <Soupe />
        </section>
        <section id="enfant">
          <Enfant />
        </section>
        <section id="dessert">
          <Dessert />
        </section>
        <section id="crepe">
          <Crepe />
        </section>
        <section id="glace">
          <Glace />
        </section>
        <section id="milkshake">
          <Milkshake />
        </section>
        <section id="soft">
          <Soft />
        </section>
        <section id="chaud">
          <Chaud />
        </section>
      </div>
    </div>
  );
};

export default Home;
