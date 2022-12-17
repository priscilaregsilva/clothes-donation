import { Link } from "react-router-dom";
import womandonate from "../assets/image/woman-sorting-clothes-for-donation.jpg";
import { BoxClothes } from "../components/BoxClothes";
import json from "../assets/json/clothes.json";

export function Home() {
  return (
    <main>
      <section className="home_top">
        <img className="imagewoman" src={womandonate} />
        <div>
          <h1>"Doe Com Amor"</h1>
          <p>Que tal ajudar o próximo hoje com uma simples ato ?</p> 
          <p>
            Quer ajudar uma pessoa? <br/><br/>
            No momento não esta em condições financeiras? <br/> <br/>
            Que tal doar uma peça de roupa em bom estado ? A qual esta no seu guarda-roupa a meses ou anos
            parada sem utilização. <br/> <br/>
            Através deste simples gesto pode transforma a vida de pessoas, começando por sua cidade.<br/><br/>
            Seja uma doadora voluntária, tranformando a vida de uma pessoa com um simples gesto. <br/><br/>
            Doe suas roupas e ajude outras pessoas com um pequeno gesto de amor. <br/><br/>
            Faça a diferença na vida de alguém, começando agora. Clique no botão abaixo, transforme vidas:
          </p>
          <Link className="button_donate" to="/donative">
            Faça sua doação de roupa
          </Link>
        </div>
      </section>

      <section className="container_clothes">
        <h2>Roupas Disponíveis</h2>
        <p>
          Está precisando de doação de roupas ? <br />
          Escolha uma roupa para receber doação
        </p>

        <div className="container_in_clothes">
          <BoxClothes clothes={json[0]} />
          <BoxClothes clothes={json[1]} />
          <BoxClothes clothes={json[2]} />
          <BoxClothes clothes={json[3]} />
        </div>
      </section>
    </main>
  );
}
