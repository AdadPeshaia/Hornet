"use client";

import Image from "next/image";
import HeroImage from "@/public/Images/hero.jpg";

export default function Hero() {
  return (
    <section className="section-hero">
      <Image src={HeroImage} alt="Smörgåsar, fralla och mera som vi erbjuder" />
      <div className="container">
        <div className="hero-text">
          <h1>HÖRNET</h1>
          <p>
            Kom in och prova våra smörgåsar, baguetter och landgångar. Du kommer
            ej bli besviken!
          </p>
        </div>
      </div>
    </section>
  );
}
