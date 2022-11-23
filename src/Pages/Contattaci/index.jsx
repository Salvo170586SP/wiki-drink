import "./style.css";
import { useState } from "react";
import ModalMail from "../../Components/ModalMail";

const Contattaci = () => {
  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [text, setText] = useState("");
  const [isShow, setIsShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if(nome && cognome && email && text){
      setIsShow(true)
    }else{
      setIsShow(false);
      alert('completa tutti i campi')
     } 
  };

  return (
    <section className="contattaci">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-12 text-center mt-5">
            <h1 className="text-light">Vorresti aggiungere un cocktail?</h1>
            <h5>
              Il nostro team è sempre disponibile per valutare possibili nuove
              ricette ed ad aggiungerle alla nostro database
            </h5>
          </div>
          <div className="col-12 my-5">
            <div className="contact-form-container container rounded-2 shadow p-5">
              <form className="contact-form container" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nome">Nome</label>
                  <input
                    type="text"
                    id="nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    name="nome"
                    className="input"
                  />
                  <hr />
                </div>
                <div className="form-group">
                  <label htmlFor="cognome">Cognome</label>
                  <input
                    type="text"
                    id="cognome"
                    name="cognome"
                    className="input"
                    value={cognome}
                    onChange={(e) => setCognome(e.target.value)}
                  />
                  <hr />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <hr />
                </div>
                <div className="form-group">
                  <label htmlFor="cellulare">Telefono</label>
                  <input
                    type="cel"
                    id="cellulare"
                    name="cellulare"
                    className="input"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                  />
                  <hr />
                </div>
                <div className="form-group">
                  <label htmlFor="ricetta">La tua ricetta</label>
                  <textarea
                    type="tel"
                    id="ricetta"
                    name="ricetta"
                    className="input"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                  ></textarea>
                </div>
                <div className="text-center">
                  <button className="btn btn-primary">Invia Ricetta</button>
                </div>
              </form>
              {
                isShow ? <ModalMail /> : ''
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contattaci;
