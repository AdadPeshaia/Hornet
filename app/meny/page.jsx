import Image from "next/image";
import SubHeroImage from "@/public/Images/subhero.jpg";
import Menu from "./Menu";

export default function page() {
  const menuData = [
    {
      title: "Fralla",
      subtitle: "Välj mellan rosenbröd & solrosbräck",
      items: [
        {
          name: "Ost",
          price: 35,
          description: "",
        },
        {
          name: "Ost och Skinka",
          price: 39,
          description: "",
        },
      ],
    },
    {
      title: "Bagels",
      items: [
        {
          name: "Ost & Skinka",
          price: 49,
          description: "",
        },
        {
          name: "Kalkon",
          price: 49,
          description: "",
        },
        {
          name: "Stekt ägg & Bacon",
          price: 49,
          description: "",
        },
      ],
    },
    {
      title: "Sandwich",
      items: [
        {
          name: "Kycklingröra",
          price: 39,
        },
        {
          name: "Tonfiskröra",
          price: 39,
        },
        {
          name: "Ost & Skinka",
          price: 39,
        },
        {
          name: "Salami & Brieost",
          price: 39,
        },
        {
          name: "Skagenröra med Rostbiff",
          price: 45,
        },
      ],
    },
    {
      title: "Baguetter",
      subtitle: "välj mellan mörkt eller ljust bröd",
      items: [
        {
          name: "Skagenröra",
          price: 55,
          description: "",
        },
        {
          name: "Skinkröra",
          price: 55,
          description: "",
        },
        {
          name: "Kycklingröra",
          price: 55,
          description: "",
        },
        {
          name: "Ost & Skinka",
          price: 55,
          description: "",
        },
        {
          name: "Salami & Brieost",
          price: 55,
          description: "",
        },
        {
          name: "Ost & Brieost",
          price: 55,
          description: "",
        },
        {
          name: "Rödbetsallad & Kötbullar",
          price: 55,
          description: "",
        },
        {
          name: "Tonfiskröra",
          price: 55,
          description: "",
        },
        {
          name: "Kebabröra",
          price: 55,
          description: "",
        },
        {
          name: "Kyckling & Baconröra",
          price: "55",
          description: "",
        },
      ],
    },
    {
      title: "Sallader",
      subtitle: "Våra sallader tillkommer med pasta",
      items: [
        {
          name: "Kyckling sallad",
          price: 89,
          description: "",
        },
        {
          name: "Ost & Skinksallad",
          price: 89,
          description: "",
        },
        {
          name: "Räksallad",
          price: 99,
          description: "",
        },
        {
          name: "Grekisk sallad",
          price: 89,
          description: "",
        },
        {
          name: "Tonfisk sallad",
          price: 89,
          description: "",
        },
      ],
    },
    {
      title: "Hörnetspecial",
      subtitle:
        "Välj mellan skagenröra, tonfiskröra eller skinkröra med handskalade räkor",
      items: [
        {
          name: "Räkbomb",
          price: 149,
          description: "",
        },
        {
          name: "Helg runda",
          price: 129,
          description: "",
        },
        {
          name: "Lyxlänga (3-4 personer)",
          price: 189,
          description: "",
        },
      ],
    },
    {
      title: "Landgångar",
      items: [
        {
          name: "Räkor & kötbullar",
          price: 99,
          description: "",
        },
        {
          name: "Räkor & Lax",
          price: 109,
          description: "",
        },
      ],
    },
    {
      title: "Smörgåsar",
      items: [
        {
          name: "Räkmacka hålkaka",
          price: 89,
          description: "",
        },
        {
          name: "Räkmacka tekaka",
          price: 89,
          description: "",
        },
        {
          name: "Kötbullemacka hålkaka",
          price: 69,
          description: "",
        },
      ],
    },
    {
      title: "Smörgåstårta",
      items: [
        {
          name: "Orginal",
          price: 75,
          description: "",
        },
        {
          name: "Lax",
          price: 95,
          description: "",
        },
        {
          name: "Rostbiff",
          price: 85,
          description: "",
        },
      ],
    },
  ];

  return (
    <>
      <section className="section-subhero">
        <Image src={SubHeroImage} alt="Bild på fralla och räkmacka" />
        <div className="container">
          <div className="subhero-text">
            <h1 className="heading-primary">MENY</h1>
          </div>
        </div>
      </section>
      <Menu menuData={menuData} />
    </>
  );
}
