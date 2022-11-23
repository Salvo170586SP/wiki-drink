import { Link } from "react-router-dom";
import "./style.css";

const Navbar = () => {
  return (
    <header className="shadow position-fixed  w-100 bg-light py-2">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-center">
            <h3>WIKI DRINK</h3>
          </div>
          <div className="col-12 col-md-4 d-flex align-items-center justify-content-between">
            <Link className="btn fw-bold page" to="/">
              <i className="fa-solid fa-house i-p text-primary"></i>{" "}
              <h6>Home</h6>
            </Link>
            <Link className="btn fw-bold page" to="/ChiSiamo">
              <i className="fa-solid fa-person i-p text-primary"></i>{" "}
              <h6>Chi Siamo</h6>
            </Link>
            <Link className="btn fw-bold page" to="/Contattaci">
              <i className="fa-solid fa-message i-p text-primary"></i>
              <h6>Contattaci</h6>
            </Link>
          </div>
          <div className="col-12 d-flex  justify-content-center col-md-4 d-flex align-items-center justify-content-end">
            <a className="social" href="">
              <i className="fa-brands fa-square-facebook fa-2x mx-3"></i>
            </a>
            <a className="social" href="">
              <i className="fa-brands fa-square-twitter fa-2x mx-3"></i>
            </a>
            <a className="social" href="">
              <i className="fa-brands fa-square-youtube fa-2x mx-3"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
