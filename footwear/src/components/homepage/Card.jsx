import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function Card1({ image, title, text, price }) {
  const navigate = useNavigate();

  const handleProductClick = () => {
    navigate("/product", {
      state: {
        image,
        title,
        text,
        price,
      },
    });
  };

  return (
    <Card className="shoe-card">

      {/* Heart */}
      <div
        className="heart"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        ♡
      </div>

      {/* Shoe Image */}
      <Card.Img
        variant="top"
        src={image}
        className="shoe-image"
        onClick={handleProductClick}
        style={{ cursor: "pointer" }}
      />

      <Card.Body className="shoe-body">

        {/* Product Details */}
        <div
          onClick={handleProductClick}
          style={{ cursor: "pointer" }}
        >
          <Card.Title className="shoe-title">
            {title}
          </Card.Title>

          <Card.Text className="shoe-text">
            {text}
          </Card.Text>
        </div>

        <div className="shoe-bottom">

          {/* Price */}
          <div className="shoe-price">
            {price}
          </div>

          {/* Cart */}
          <button
            className="cart-button icon-btn1 cart-wrap"
            onClick={(e) => {
              e.stopPropagation();
              alert("Added to Cart!");
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
          </button>

        </div>
      </Card.Body>
    </Card>
  );
}

export default Card1;