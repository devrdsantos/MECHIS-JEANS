import React from "react";
import Logo from "../assets/logoloanafooter.png";
import "../styles/footer.css";
import "../index.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row p-5 pb-2 background-black text-footer-color ">
          <div className="col-xs-12 col-md-6 col-lg-3">
            <img className="img-size-logo-footer" src={Logo} alt="logo" />
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h4 border-bottom-footer ">Productos</p>
            <div className="mb-2">
              <Link
                to="/jeans"
                className="text-footer-color text-decoration-none"
              >
                Jeans
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to="/shorts"
                className="text-footer-color text-decoration-none"
              >
                Shorts
              </Link>
            </div>
            <div className="mb-2">
              <Link
                to="/camperas"
                className="text-footer-color text-decoration-none"
              >
                Camperas
              </Link>
            </div>
            <div class="mb-2">
              <Link
                to="/ofertas"
                className="text-footer-color text-decoration-none"
              >
                Ofertas
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h4 border-bottom-footer ">Contacto</p>
            <div className="mb-2">
              <Link to="/" className="text-footer-color text-decoration-none">
                Av, San Martin 1587, CABA, <br /> Buenos Aires
              </Link>
            </div>
            <div className="mb-2">
              <Link to="/" className="text-footer-color text-decoration-none">
                (+54) 9 11-5674-1599
              </Link>
            </div>
          </div>
          <div className="col-xs-12 col-md-6 col-lg-3">
            <p className="h4 border-bottom-footer ">Seguinos</p>
            <div className="mb-2">
              <Link to="/" className="text-footer-color text-decoration-none">
                Instagram
              </Link>
            </div>
            <div className="mb-2">
              <Link to="/" className="text-footer-color text-decoration-none">
                Facebook
              </Link>
            </div>
          </div>
          <div className="col-xs-12 pt-4">
            <p className="mt-3 copyright-color text-center">
              © Loana Jeans 2020 - 2022. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
