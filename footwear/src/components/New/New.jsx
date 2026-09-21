import Card1 from "../homepage/Card";

// Nike
import nike1 from "../images/Nike/AIR+MAX+90+PRM.avif";
import nike2 from "../images/Nike/NIKE+AIR+MAX+95+BIG+BUBBLE.avif";
import nike3 from "../images/Nike/NIKE+DUNK+LOW+RETRO.avif";

// Adidas
import adidas1 from "../images/Adidas/ADIDAS_PIXAR_TOY_STORY_SAMBA_OG_SHOES_Blue_LA3984_01_00_standard.avif";
import adidas2 from "../images/Adidas/Adizero_EVO_SL_Shoes_Silver_JR3419_01_00_standard.avif";
import adidas3 from "../images/Adidas/Samba_OG_Shoes_White_B75806_01_00_standard.avif";

// Puma
import puma1 from "../images/Puma/All-Pro-NITRO™-2-Frost-Basketball-Shoes.avif";
import puma2 from "../images/Puma/Suede-XL-Sneakers.avif";
import puma3 from "../images/Puma/Speedcat-OG-Sneakers.avif";

// Skechers
import skechers1 from "../images/Skechers/183227_BBK_HERO_LG.avif";
import skechers2 from "../images/Skechers/205469_DKTP_HERO_LG.avif";
import skechers3 from "../images/Skechers/233290_CHOC_HERO_LG.avif";
function New() {
  return (
    <>
      <div className="new-heading">
        <h1>New Arrivals</h1>
        <p>Discover our latest shoes and fresh styles.</p>
      </div>

      <div className="maincard">

        <Card1
          image={nike1}
          text="Nike"
          title="AIR MAX 90 PRM"
          price="$170"
        />

        <Card1
          image={nike2}
          text="Nike"
          title="AIR MAX 95 BIG BUBBLE"
          price="$185"
        />

        <Card1
          image={nike3}
          text="Nike"
          title="DUNK LOW RETRO"
          price="$145"
        />

        <Card1
          image={adidas1}
          text="Adidas"
          title="SAMBA OG"
          price="$120"
        />

        <Card1
          image={adidas2}
          text="Adidas"
          title="ADIZERO EVO SL"
          price="$150"
        />

        <Card1
          image={adidas3}
          text="Adidas"
          title="SAMBA OG WHITE"
          price="$110"
        />

        <Card1
          image={puma1}
          text="Puma"
          title="ALL-PRO NITRO 2"
          price="$140"
        />

        <Card1
          image={puma2}
          text="Puma"
          title="SUEDE XL"
          price="$100"
        />

        <Card1
          image={puma3}
          text="Puma"
          title="SPEEDCAT OG"
          price="$115"
        />

        <Card1
          image={skechers1}
          text="Skechers"
          title="SKECHERS BBK"
          price="$95"
        />

        <Card1
          image={skechers2}
          text="Skechers"
          title="SKECHERS SPORT"
          price="$105"
        />

        <Card1
          image={skechers3}
          text="Skechers"
          title="SKECHERS CHOC"
          price="$110"
        />

      </div>
    </>
  );
}

export default New;