import Carousel from "react-bootstrap/Carousel";
import shoeImage2 from "../images/sneaker.jpg";
import shoeImage3 from "../images/pexels-introspectivedsgn-4228206.jpg";
import shoeImage4 from "../images/Nike/Screenshot 2026-08-26 191609.png";

function Carosual() {
  return (
    <Carousel
      data-bs-theme="light"
      className="mainC custom-carousel"
      interval={4000}
    >
      <Carousel.Item>
        <img
          className="d-block w-100 height"
          src={shoeImage3}
          alt="Nike Collection"
        />

        <Carousel.Caption>
          <div className="carousel-text">
            <span>NEW COLLECTION</span>
            <h1>Step Into Your Style</h1>
            <p>
              Discover the latest Nike sneakers designed for comfort,
              performance and everyday style.
            </p>

            <button className="carousel-btn">SHOP NIKE</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 height"
          src={shoeImage2}
          alt="Premium Shoes"
        />

        <Carousel.Caption>
          <div className="carousel-text">
            <span>FIND YOUR PERFECT PAIR</span>
            <h1>Walk With Confidence</h1>
            <p>
              Premium footwear made to match your style and every adventure.
            </p>

            <button className="carousel-btn">EXPLORE SHOES</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100 height"
          src={shoeImage4}
          alt="Sports Shoes"
        />

        <Carousel.Caption>
          <div className="carousel-text">
            <span>SPORTS COLLECTION</span>
            <h1>Run. Move. Repeat.</h1>
            <p>
              Get ready to move with lightweight and comfortable sports shoes.
            </p>

            <button className="carousel-btn">VIEW COLLECTION</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carosual;
