import { BoxClothes } from "../components/BoxClothes";
import json from "../assets/json/clothes.json";


export function Receivedonation() {

  return (
    <main>

      <section className="receivedonation_top">
        <h1>Receber Doação</h1>
      </section>  

      <section className="receivedonation_container">
        <h2 className="text_center">Roupas Disponíveis</h2>
        <p className="text_center">
          Está precisando de doação de roupas ? <br />
          Escolha uma roupa para receber doação
        </p>

        <div className="container_in_clothes">
          {
            json.map((value, index) => {
              return(
                <BoxClothes clothes={value} key={index} />
              )
            }) 
          }
        </div>

      </section>

    </main>
  );
}
