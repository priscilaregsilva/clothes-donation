import iconDonation from "../assets/image/icon_donation.png";
import iconFamily from "../assets/image/icon_family.png";
import iconWorld from "../assets/image/icon_world.png";

export function About() {
  return (
    <main>
      <section className="about_top">
        <h1>Sobre o Projeto</h1>
        <p className="text_center">
          O intuito deste projeto é ajudar e conectar diversas pessoas de várias
          cidades, estados através de doações e sustentabilidade ambiental. <br/><br/>
          Tornando uma sociedade generosa e ajudando o meio ambiente. <br/><br/>
          Sabemos que uma peça de roupa leva anos para se decompor, e através deste
          projeto podemos ajudar a vida de muitas pessoa com um gesto simples,
          aquecendo corações de pessoas que não tem condições no momento em
          comprar uma peça de roupa, incentivando, orietando as próximas
          gerações de que podemos ajudar uns aos outros com pequenos gestos e o meio ambiente de 
          forma sustentavel através de doações.
        </p>
      </section>

      <section className="container_about">
        <div>
          <img src={iconDonation} alt="ilustração de doação de roupa" />
          <h2>Ajude outras pessoas</h2>
          <p>Doe suas roupas e ajude muitas pessoas com um simples ato.</p>
        </div>

        <div>
          <img src={iconFamily} alt="ilustração de doação de roupa" />
          <h2>Gestos que mudam vidas</h2>
          <p>Um pequeno gesto de doação pode mudar muitas vidas.</p>
        </div>

        <div>
          <img src={iconWorld} alt="ilustração de doação de roupa" />
          <h2>Mude o mundo com uma doação</h2>
          <p>Ajude a transformar o mundo em um lugar melhor.</p>
        </div>
      </section>
    </main>
  );
}
