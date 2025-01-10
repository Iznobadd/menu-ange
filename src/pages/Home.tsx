import Brochette from "../components/category/Brochette";
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
      </div>
    </div>
  );
};

export default Home;
