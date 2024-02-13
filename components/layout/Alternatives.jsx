import Image from "next/image";
import Link from "next/link";
import SmörgåsImage from "@/public/Images/sandwich-1.jpg";
import BaguetterImage from "@/public/Images/sandwich-2.jpg";
import SalladerImage from "@/public/Images/salad-2.jpg";

export default function Alternatives() {
  return (
    <section className="section-cards">
      <div className="container">
        <span className="subheading">Meny</span>
        <div className="cards-link">
          <h2 className="heading-secondary">Mumsiga val att utforska</h2>
          <Link className="btn btn--form" href={"/meny"}>
            Meny
          </Link>
        </div>
      </div>
      <div className="container">
        <div className="cards">
          <div className="card">
            <Image src={SmörgåsImage} alt="Smörgåsar" />
            <h2>Smörgåsar</h2>
          </div>
          <div className="card">
            <Image src={BaguetterImage} alt="Baguetter" />
            <h2>Baguetter</h2>
          </div>
          <div className="card">
            <Image src={SalladerImage} alt="Sallader" />
            <h2>Sallader</h2>
          </div>
        </div>
      </div>
    </section>
  );
}
