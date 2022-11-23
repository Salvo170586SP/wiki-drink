import "./style.css";
import { useParams, Link } from "react-router-dom";
import useFetch from "../../useFetch";
import SingleDrink from "../../Components/SingleDrink";

const DetailCocktail = () => {
  const { id } = useParams();
  const { data } = useFetch(`i=${id}`, true);

  return (
    <section className="Dettagli ">
      <div className="container">
        <div className="row">
          <div className="col-12 my-5">
            <Link className="btn btn-primary" to="/">Torna alla Home</Link>
          </div>
          <div className="col-12 d-flex justify-content-center align-items-center">
            {data.map((c, id) => {
              return (
                <SingleDrink
                  key={id}
                  istruzioni={c.strInstructionsIT}
                  img={c.strDrinkThumb}
                  nome={c.strDrink}
                  categoria={c.strCategory}
                  tipo={c.strAlcoholic}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailCocktail;
