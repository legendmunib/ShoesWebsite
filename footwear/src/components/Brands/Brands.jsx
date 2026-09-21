import { Link } from "react-router-dom";

import nike from "../images/logos/nike-logo.png";
import adidas from "../images/logos/adidas-logo.png";
import puma from "../images/logos/puma-logo.jpg";
import jordan from "../images/logos/Air-Jordan-Logo.png";
import skechers from "../images/logos/skechers-logo.jpg";

function Brands() {
  const brands = [
    {
      name: "Nike",
      logo: nike,
      path: "/Nike",
    },
    {
      name: "Adidas",
      logo: adidas,
      path: "/Adidas",
    },
    {
      name: "Puma",
      logo: puma,
      path: "/Puma",
    },
    {
      name: "Jordan",
      logo: jordan,
      path: "/Jorden",
    },
    {
      name: "Skechers",
      logo: skechers,
      path: "/Skechers",
    },
  ];

  return (
    <div className="brands-page">
      <div className="brands-heading">
        <span>OUR BRANDS</span>
        <h1>Choose Your Brand</h1>
        <p>Explore the latest shoes from your favorite brands.</p>
      </div>

      <div className="brands-list">
        {brands.map((brand) => (
          <Link to={brand.path} className="brand-card" key={brand.name}>
            <div className="brand-logo">
              <img src={brand.logo} alt={brand.name} />
            </div>

            <h3>{brand.name}</h3>

            <span className="brand-explore">Explore →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Brands;
