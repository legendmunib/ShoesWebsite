import Puma from "../components/homepage/Puma";
import Jorden from "../components/homepage/Jorden";
import Adidas from "../components/homepage/Adidas";
import Nike from "../components/homepage/Nike";
import Skechers from "../components/homepage/Skechers";

function Shop() {
  return (
    <>
      <div className="shop-hero">
        <div className="shop-hero-content">
          <span>STEP INTO STYLE</span>

          <h1>Find Your Perfect Pair</h1>

          <p>
            Explore our latest collection of sneakers from your favorite brands.
            Find the perfect style for every step.
          </p>

          <button>EXPLORE COLLECTION</button>
        </div>
      </div>

      <div className="shop-heading">
        <h2>Shop Our Collection</h2>
        <p>Discover shoes from the world's most popular brands</p>
      </div>

      <Puma />
      <Jorden />
      <Adidas />
      <Nike />
      <Skechers />
    </>
  );
}

export default Shop;
