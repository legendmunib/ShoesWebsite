import Card1 from "./Card";
import airjorden from "../images/Nike/AIR+MAX+90+PRM.avif";
import a1 from "../images/Nike/AIR+FORCE+1+'07.avif";
import a2 from "../images/Nike/KOBE+AIR+FORCE+1+LOW.avif";
import a3 from "../images/Nike/NIKE+AIR+MAX+95+BIG+BUBBLE.avif";
import a4 from "../images/Nike/NIKE+AIR+MAX+EXCEE.avif";
import a5 from "../images/Nike/NIKE+AIR+MAX+JOGA+BONITO.avif";
import a6 from "../images/Nike/NIKE+AIR+MAX+PLUS+OG+PRM.avif";
import a7 from "../images/Nike/NIKE+DUNK+LOW+RETRO.avif";
import a8 from "../images/Nike/NIKE+P-6000+SE+LOS.avif";
import a9 from "../images/Nike/NIKE+REACTX+REJUVEN8+-+PRINT.avif";
import a10 from "../images/Nike/NIKE+SHOX+TL.avif";
import a11 from "../images/Nike/NIKE+V5+RNR.avif";
import a12 from "../images/Nike/NIKE+ZOOM+SKYLON+11.avif";
import a13 from "../images/Nike/NIKE+ZOOM+VOMERO+5.avif";

function Cards() {
  return (
    <>
      <div className="maincard">
        <Card1
          image={airjorden}
          text="Men's shoes"
          title="AIR MAX 90"
          price="$170"
        />

        <Card1 image={a1} text="Men's shoes" title="AIR FORCE1" price="$97" />

        <Card1
          image={a2}
          text="Men's shoes"
          title="AIR JORDAN1 MID SE"
          price="$135"
        />

        <Card1
          image={a3}
          text="Men's shoes"
          title="AIR JORDAN1 RETRO HIGH OG"
          price="$183"
        />

        <Card1
          image={a4}
          text="Men's shoes"
          title="IR JORDAN1 RETRO LOW OG"
          price="$162"
        />

        <Card1
          image={a5}
          text="Men's shoes"
          title="AIR JORDAN 3 RETRO OG"
          price="$130"
        />

        <Card1
          image={a6}
          text="Men's shoes"
          title="AIR JORDAN4 RETRO"
          price="$185"
        />

        <Card1
          image={a7}
          text="Men's shoes"
          title="AIR JORDAN6 RETRO"
          price="$145"
        />

        <Card1
          image={a8}
          text="Men's shoes"
          title="AIR JORDAN8 RETRO"
          price="$192"
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

export default Cards;
