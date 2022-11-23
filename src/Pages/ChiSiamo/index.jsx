import "./style.css";
import data from "../../cards";
import { useState } from "react";

const ChiSiamo = () => {
  const [cards, setCards] = useState(data);

  return (
    <>
      <section className="chiSiamo">
        <div className="overlay h-100">
          <div className="container h-100">
            <div className="row h-100">
              <div className="col-12 d-flex align-items-center justify-content-center">
                <div className="title-about">
                  <h1>
                    "Grande è la fortuna di colui che possiede una buona
                    bottiglia, un buon libro, un buon amico."
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="edu">
        <div className="container">
          <div className="row">
            <div className="col-12 my-4 text-center">
              {" "}
              <h2 className="text-primary">Il nostro progetto</h2>
            </div>
            <div className="col-12 my-3 d-flex justify-content-around flex-wrap my-4">

              {cards.map((c, id) => {
                return (
                  <div key={id} className="card text-center my-1">
                    <h6>{c.title}</h6>
                    <div>
                      <p>{c.icon}</p>
                    </div>
                    <p>{c.descrizione}</p>
                  </div>
                );
              })}

            </div>
          </div>
        </div>
      </section>
      <section className="team">
      </section>
    </>
  );
};

export default ChiSiamo;
