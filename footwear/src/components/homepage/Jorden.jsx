import Card1 from "./Card";
import airjorden from "../images/AIR+JORDAN+3+RETRO+LASER.avif";
import a1 from "../images/Air Jordan 3 Retro.avif";
import a2 from "../images/AIR+JORDAN+1+MID+SE.avif";
import a3 from "../images/AIR+JORDAN+1+RETRO+HIGH+OG.avif";
import a4 from "../images/AIR+JORDAN+1+RETRO+LOW+OG.avif";
import a5 from "../images/AIR+JORDAN+3+RETRO+OG.avif";
import a6 from "../images/AIR+JORDAN+4+RETRO.avif";
import a7 from "../images/AIR+JORDAN+6+RETRO.avif";
import a8 from "../images/AIR+JORDAN+8+RETRO.avif";
import a9 from "../images/AIR+JORDAN+11+RETRO+LOW.avif";
import a10 from "../images/AIR+JORDAN+13+RETRO.avif";
import a11 from "../images/CAITLIN+1.avif";
import a12 from "../images/JORDAN+SON+OF+MARS+LOW.avif";
import a13 from "../images/JORDAN+SPIZIKE+LOW.avif";

function Adidas() {
  return (
    <>
      <div className="maincard">
        <Card1
          image={airjorden}
          text="Men's shoes"
          title="NIKE AIR MAX"
          price="$100"
        />

        <Card1
          image={a1}
          text="Men's shoes"
          title="AIR JORDEN 3 RETRO"
          price="$87"
        />

        <Card1
          image={a2}
          text="Men's shoes"
          title="AIR JORDAN1 MID SE"
          price="$98"
        />

        <Card1
          image={a3}
          text="Men's shoes"
          title="AIR JORDAN1 RETRO HIGH OG"
          price="$143"
        />

        <Card1
          image={a4}
          text="Men's shoes"
          title="IR JORDAN1 RETRO LOW OG"
          price="$62"
        />

        <Card1
          image={a5}
          text="Men's shoes"
          title="AIR JORDAN 3 RETRO OG"
          price="$110"
        />

        <Card1
          image={a6}
          text="Men's shoes"
          title="AIR JORDAN4 RETRO"
          price="$145"
        />

        <Card1
          image={a7}
          text="Men's shoes"
          title="AIR JORDAN6 RETRO"
          price="$135"
        />

        <Card1
          image={a8}
          text="Men's shoes"
          title="AIR JORDAN8 RETRO"
          price="$162"
        />
        <Card1
          image={a9}
          text="Men's shoes"
          title="AIR JORDAN11 RETRO LOW"
          price="$187"
        />
        <Card1
          image={a10}
          text="Men's shoes"
          title="AIR JORDAN13 RETRO"
          price="$162"
        />
        <Card1 image={a11} text="Sport's shoes" title="CAITLIN1" price="$148" />
        <Card1
          image={a12}
          text="Men's shoes"
          title="JORDAN SON OF MARS LOW"
          price="$192"
        />
        <Card1
          image={a13}
          text="Men's shoes"
          title="JORDAN SPIZIKE LOW"
          price="$172"
        />
      </div>
    </>
  );
}

export default Adidas;
