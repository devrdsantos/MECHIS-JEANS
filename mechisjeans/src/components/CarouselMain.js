import Carousel from 'react-bootstrap/Carousel';
import img1 from '../assets/img-5.jpg';
import img2 from '../assets/img-6.jpg';
import img4 from '../assets/img-4.jpg';
import '../styles/carousel.css';

function CarouselMain() {
  return (
    <Carousel fade >
      <Carousel.Item className="carousel-size">       
            <img src={img4} alt="img-description"
            className="d-block w-100 img-cover-carousel carousel-img-size"
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
          <h3>Shorts</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel-size">
        <img
          className="d-block w-100 img-cover-carousel"
          src={img1}
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

export default CarouselMain;