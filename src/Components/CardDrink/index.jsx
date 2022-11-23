import "./style.css";
import { Link } from "react-router-dom";

const CardDrink = (props) => {
  return (
    <div className="drink m-1 shadow rounded">
      <img className="imgDrink" src={props.img} alt={props.name}/>
      <div className="textDrink d-flex justify-content-between">
        <p>{props.name}</p>
        <Link className="link-detail" to={`/cocktail/${props.id}`}>Ricetta <i className="fa-solid fa-clipboard-list"></i></Link>
      </div>
    </div>
  );
};

export default CardDrink;
