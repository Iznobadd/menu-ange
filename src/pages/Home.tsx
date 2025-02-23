import Brochette from "../components/category/Brochette";
import Bruschetta from "../components/category/Bruschetta";
import Burger from "../components/category/Burger";
import Camembert from "../components/category/Camembert";
import Chaud from "../components/category/Chaud";
import Couscous from "../components/category/Couscous";
import Crepe from "../components/category/Crepe";
import Croque from "../components/category/Croque";
import Dessert from "../components/category/Dessert";
import Enfant from "../components/category/Enfant";
import Glace from "../components/category/Glace";
import Jus from "../components/category/Jus";
import Milkshake from "../components/category/Milkshake";
import Omelette from "../components/category/Omelette";
import Panini from "../components/category/Panini";
import Pastilla from "../components/category/Pastilla";
import Pate from "../components/category/Pate";
import PetitDej from "../components/category/PetitDej";
import Salade from "../components/category/Salade";
import Soft from "../components/category/Soft";
import Soupe from "../components/category/Soupe";
import Wok from "../components/category/Wok";
import Footer from "../components/Footer";
import Menu from "../components/Menu";

const Home = () => {
  return (
    <div>
      <Menu />
      <div className="pt-[198px] px-2">
        <p className="italic text-[14px] text-center mb-7 px-4">
          “Là où le local rencontre l’excellence. Nous sélectionnons avec soin
          des produits de qualité pour vous offrir des créations maison,
          empreintes d'authenticité et de saveurs uniques”
        </p>
        <section id="salades">
          <Salade />
        </section>
        <section id="bruschettas">
          <Bruschetta />
        </section>
        <section id="camembert">
          <Camembert />
        </section>
        <section id="pates">
          <Pate />
        </section>
        <section id="burgers">
          <Burger />
        </section>
        <section id="paninis">
          <Panini />
        </section>
        <section id="croques">
          <Croque />
        </section>
        <section id="brochettes">
          <Brochette />
        </section>
        <section id="pastillas">
          <Pastilla />
        </section>
        <section id="woks">
          <Wok />
        </section>
        <section id="couscous">
          <Couscous />
        </section>
        <section id="omelettes">
          <Omelette />
        </section>
        <section id="soupes">
          <Soupe />
        </section>
        <section id="enfant">
          <Enfant />
        </section>
        <section id="dej">
          <PetitDej />
        </section>
        <section id="desserts">
          <Dessert />
        </section>
        <section id="crepes">
          <Crepe />
        </section>
        <section id="glaces">
          <Glace />
        </section>
        <section id="milkshakes">
          <Milkshake />
        </section>
        <section id="jus">
          <Jus />
        </section>
        <section id="soft">
          <Soft />
        </section>
        <section id="chaud">
          <Chaud />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
