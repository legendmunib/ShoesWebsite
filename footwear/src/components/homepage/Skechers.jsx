import Card1 from "./Card";
import airjorden from "../images/Skechers/183227_BBK_HERO_LG.avif";
import a1 from "../images/Skechers/183223_TAN_HERO_LG.avif";
import a2 from "../images/Skechers/205469_DKTP_HERO_LG.avif";
import a3 from "../images/Skechers/205795_TPE_HERO_LG.avif";
import a4 from "../images/Skechers/210606_NVY_HERO_LG.avif";
import a5 from "../images/Skechers/211262_GRY_HERO_LG.avif";
import a6 from "../images/Skechers/211428_TPE_HERO_LG.avif";
import a7 from "../images/Skechers/233197_WNVR_HERO_LG.avif";
import a8 from "../images/Skechers/233290_CHOC_HERO_LG.avif";
import a9 from "../images/Skechers/233291_SLT_HERO_LG.avif";
import a10 from "../images/Skechers/233294_WNV_HERO_LG.avif";
import a11 from "../images/Skechers/246210_NVAQ_HERO_LG.avif";
import a12 from "../images/Skechers/246215_BKOR_HERO_LG.avif";
import a13 from "../images/Skechers/256202_BKGR_HERO_LG.avif";

function Skechers() {
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

export default Skechers;
