import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img-1.jpg';
import img2 from '../assets/img-2.jpg';
import img4 from '../assets/img-4.jpg';
import '../styles/carousel.css';

function CarouselFadeExample() {
  return (
    <Carousel fade >
      <Carousel.Item className="carousel-size">
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Jeans</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-size">
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Shortsasd</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-size">
        <img
          className="d-block w-100 img-cover-carousel"
          src={img4}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Camperas</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;