
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from "react-bootstrap/Button";

function ProductDetails() {
  const location = useLocation();
  const navigate = useNavigate();

  const { image, title, text, price } = location.state || {};

  // Product type
  const [type, setType] = useState("Adult");

  // Selected size
  const [selectedSize, setSelectedSize] = useState("");

  // Sizes according to type
  const sizes = {
    Adult: ["6", "7", "8", "9", "10", "11", "12"],
    "Little Kids": ["10C", "11C", "12C", "13C", "1Y", "2Y", "3Y"],
    Baby: ["1C", "2C", "3C", "4C", "5C", "6C", "7C"],
  };

  if (!location.state) {
    return (
      <div className="product-error">
        <h2>Product not found</h2>
        <Button onClick={() => navigate("/")}>
          Go Home
        </Button>
      </div>
    );
  }

  return (
    <div className="product-details">

      {/* Product Image */}
      <div className="product-image">
        <img src={image} alt={title} />
      </div>

      {/* Product Information */}
      <div className="product-info">

        <p className="product-category">{text}</p>

        <h1>{title}</h1>

        <h2>{price}</h2>

        <p>
          Premium quality footwear designed for comfort, style and everyday
          performance. This shoe features a modern design and comfortable fit.
        </p>

        {/* Type */}
        <div className="product-option">
          <h4>Type</h4>

          <div className="option-buttons">

            <button
              className={type === "Adult" ? "option active" : "option"}
              onClick={() => {
                setType("Adult");
                setSelectedSize("");
              }}
            >
              Adult
            </button>

            <button
              className={
                type === "Little Kids"
                  ? "option active"
                  : "option"
              }
              onClick={() => {
                setType("Little Kids");
                setSelectedSize("");
              }}
            >
              Little Kids
            </button>

            <button
              className={type === "Baby" ? "option active" : "option"}
              onClick={() => {
                setType("Baby");
                setSelectedSize("");
              }}
            >
              Baby
            </button>

          </div>
        </div>

        {/* Size */}
        <div className="product-option">
          <h4>Size</h4>

          <div className="size-buttons">
            {sizes[type].map((size) => (
              <button
                key={size}
                className={
                  selectedSize === size
                    ? "size active"
                    : "size"
                }
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Buttons */}
        <div className="product-buttons">

          <Button
            variant="dark"
            onClick={() => {
              if (!selectedSize) {
                alert("Please select a size");
                return;
              }

              alert(
                `Added to Cart!\nType: ${type}\nSize: ${selectedSize}`
              );
            }}
          >
            Add to Cart
          </Button>

          <Button
            variant="outline-dark"
            onClick={() => {
              if (!selectedSize) {
                alert("Please select a size");
                return;
              }

              alert(
                `Buy Now!\nType: ${type}\nSize: ${selectedSize}`
              );
            }}
          >
            Buy Now
          </Button>

        </div>

      </div>
    </div>
  );
}

export default ProductDetails;
