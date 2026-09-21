import Buttons from "./Buttons";
import { useState } from "react";
import { Link } from "react-router-dom";

function Trend() {
  const [selected, setSelected] = useState("All");
  return (
    <>
      <div className="trend">
        <h5>
          <b>TRENDING SHOES</b>
        </h5>
      </div>

      <div className="allbuttons">
        <Link to="/">
          <Buttons name="All" selected={selected} setSelected={setSelected} />
        </Link>

        <Link to="/Nike">
          <Buttons name="Nike" selected={selected} setSelected={setSelected} />
        </Link>

        <Link to="/Adidas">
          <Buttons
            name="Adidas"
            selected={selected}
            setSelected={setSelected}
          />
        </Link>

        <Link to="/Puma">
          <Buttons name="Puma" selected={selected} setSelected={setSelected} />
        </Link>
        <Link to="/Jorden">
          <Buttons
            name="Jorden"
            selected={selected}
            setSelected={setSelected}
          />
        </Link>
        <Link to="/Skechers">
          {" "}
          <Buttons
            name="Skechers"
            selected={selected}
            setSelected={setSelected}
          />
        </Link>
      </div>
    </>
  );
}

export default Trend;
