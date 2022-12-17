import { useState } from "react";
import ReactModal from "react-modal";

ReactModal.setAppElement('body');

export function Donative() {

    const [isShow, setShow] = useState(false);


    function openModal(event) {
      event.preventDefault();
      setShow(true);

      const formdonate = document.getElementById('form_donate');
      formdonate.reset();
    }

    function closeModal() {
      setShow(false);
    }
  
  return (
    <main>

      <section className="donative_top">
        <h1>Doação</h1>
        <p className="text_center">
          Preencha o cadastro abaixo para fazer uma doação
        </p>
      </section>
      
      <form id="form_donate" action="/" onSubmit={openModal} >
        <section className="donative_form">
          <div>
            <input className="form_text" type="text" name="nome_completo" placeholder="Nome Completo* (Obrigatório)" required />
            <input className="form_text" type="text" name="telefone" placeholder="Telefone* (Obrigatório)" required/>
            <input className="form_text" type="email" name="email" placeholder="E-mail* (Obrigatório)" required/>
            <input className="form_text" type="text" name="endereco" placeholder="Endereço" />
            <input className="form_text" type="text" name="cep" placeholder="CEP" />
            <input className="form_text" type="text" name="bairro" placeholder="Bairro" />
            <input className="form_text" type="text" name="cidade" placeholder="Cidade* (Obrigatório)" required/>
            <input className="form_text" type="text" name="estado" placeholder="Estado" />
            <input className="form_text" type="text" name="roupas" placeholder="Quantidade de roupas a serem doadas" />
            <button className="form_button" type="submit" >Doar Roupa</button>
          </div>
        </section>
      </form>

      <ReactModal isOpen={isShow} 
        onRequestClose={closeModal} 
        contentLabel="Alerta" 
        className="modalAlert"
        overlayClassName="modalOverlay" >

        <h2>Doação</h2>
        <p>
          Sua mensagem de doação foi recebida. <br />
          Entraremos em contato para te ajudar a realizar a doação.
        </p>

        <div>
          <button className="form_button"  onClick={closeModal} >Ok</button>
        </div>
      </ReactModal>

    </main>
  );
}
