import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import CardDrink from "../../Components/CardDrink";
import useFetch from "../../useFetch";
import "./style.css";

const HomePage = () => {
  const [query, setQuery] = useState("negroni");
  const { data, count, isLoading, isError } = useFetch(`s=${query}`);
  const [input, setInput] = useState(query);
  
  const searchCocktails = () => {
    setQuery(input);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCocktails(input);
  };

  return (
    <>
      <section className="presentation">
        <div className="presentation-overlay">
          <div className="container-fluid h-100">
            <div className="row align-items-center h-100">
              <div className="col-12 col-md-6 d-flex justify-content-center my-3 ">
                <div className="titleHome text-start">
                  <div className="home-title ">
                    <h2 className="brand-color"> WIKI DRINK</h2>
                    <h4>Tutti i cocktail del mondo a portata di click</h4>
                  </div>
                  <p>
                    Wiki Drink è un database internazionale che mette a tua
                    disposizione, in maniera
                    <span className="brand-color">Gratuita</span>, le ricette
                    dei più importanti e diffusi cocktail al mondo.
                  </p>
                  <Link className="btn btn-primary scopri" to="/chisiamo">
                    Scopri di più
                  </Link>
                </div>
              </div>
              <div className="col-12 col-md-6 d-flex justify-content-center">
                <div className="home-hero-img"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="drinks">
        <div className="container">
          <div className="row">
            <div className="col-12 my-5 d-flex justify-content-between align-items-center">
              <div className="search d-flex justify-content-between align-items-center">
                <form
                  onSubmit={handleSubmit}
                  className="d-flex align-items-center justify-content-center"
                >
                  <input
                    className="form-control form-control-sm rounded-5"
                    type="text"
                    id="inputCocktail"
                    aria-label=".form-control-sm example"
                    placeholder={query}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <button type="submit" className="btn">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </form>
              </div>
              <div className="results">
                <p>{data ? count : 0} risulati</p>
              </div>
            </div>
            <div className="col-12 d-flex text-center  align-items-center flex-wrap">
              {!isLoading && !data ? (
                <div className="text-center w-100">
                  <h1>Non ci sono risultati</h1>
                </div>
              ) : !isLoading && data ? (
                data.map((c, id) => {
                  return (
                    <CardDrink
                      key={id}
                      id={c.idDrink}
                      name={c.strDrink}
                      img={c.strDrinkThumb}
                    />
                  );
                })
              ) : (
                <div className="w-100 text-center">
                  <h1>Caricamento...</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
