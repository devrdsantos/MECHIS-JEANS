import Carousel from "react-bootstrap/Carousel";
import img2 from "../assets/img-6.jpg";
import img4 from "../assets/img-4.jpg";
import "../styles/carousel.css";

function CarouselMain() {
  return (
    <Carousel fade>
      {/* ITEM 1 del carousel */}
      <Carousel.Item className="carousel-size">
        <img src={img4} alt="img-description" className="d-block w-100" />
        <Carousel.Caption>
          <div d-flex align-items-start>
            <p className="aviso-linea-1-carousel">25, 26 y 27 DE SEPTIEMBRE</p>
            <p className="aviso-linea-2-carousel">
              ENVIOS GRATIS EN COMPRAS A PARTIR DE $20.000
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      {/* ITEM 2 del carousel */}
      <Carousel.Item className="carousel-size">
        <img className="d-block w-100" src={img2} alt="Second slide" />

        <Carousel.Caption>
          <div>
            <p className="aviso-linea-1-carousel">
              ACEPTAMOS TODAS LAS TARJETAS
            </p>
            <p className="aviso-linea-2-carousel">
              3 CUOTAS SIN INTERÉS CON TARJETAS DE CRÉDITO
            </p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselMain;
