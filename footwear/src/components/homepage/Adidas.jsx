import Card1 from "./Card";
import airjorden from "../images/Adidas/ADIDAS_PIXAR_TOY_STORY_SAMBA_OG_SHOES_Blue_LA3984_01_00_standard.avif";
import a1 from "../images/Adidas/ADIZERO_ADIOS_PRO_4_RUNNING_SHOES_Orange_KI4780_HM3_hover.avif";
import a2 from "../images/Adidas/Adizero_EVO_SL_Shoes_Silver_JR3419_01_00_standard.avif";
import a3 from "../images/Adidas/Campus_00s_Shoes_Black_JR7287_01_00_standard.avif";
import a4 from "../images/Adidas/Campus_00s_Shoes_Blue_H03471_01_standard.avif";
import a5 from "../images/Adidas/Campus_00s_Shoes_Red_H03474_01_00_standard.avif";
import a6 from "../images/Adidas/Samba_OG_Shoes_White_B75806_01_00_standard.avif";
import a7 from "../images/Adidas/Samoa_Shoes_Black_IG1817_01_standard.avif";
import a8 from "../images/Adidas/Samoa_Shoes_Green_JQ0048_01_00_standard.avif";
import a9 from "../images/Adidas/Swift_Run_1.0_Shoes_Black_IE7476_01_standard.avif";
import a10 from "../images/Adidas/Swift_Run_1.0_Shoes_White_IE7475_01_standard.avif";
import a11 from "../images/Adidas/TERREX_FREEHIKER_3_Ultra_GORE-TEX_Hiking_Shoes_Black_HP3481_HM3_hover.avif";
import a12 from "../images/Adidas/TERREX_FREEHIKER_3_Ultra_GORE-TEX_Hiking_Shoes_Green_KJ3874_01_00_standard.avif";
import a13 from "../images/Adidas/TERREX_FREEHIKER_3_Ultra_GORE-TEX_Hiking_Shoes_White_KH9896_01_00_standard.avif";

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
