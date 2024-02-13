import Image from "next/image";
import Link from "next/link";
import KycklingSallad from "@/public/Images/salad-1.jpg";

export default function Diet() {
  return (
    <section className="section-diet">
      <div className="container">
        <div className="diet-titles">
          <h2 className="subheading">Måltider</h2>
          <h3 className="heading-secondary">Hittar du ej rätt måltid?</h3>
        </div>
        <div className="grid grid--3-cols">
          <div className="diet-img">
            <Image src={KycklingSallad} alt="Kycklingsallad" />
          </div>
          <div className="diet-description">
            <h2 className="heading-tertiary">Såhär gör du!</h2>
            <p>
              Om du ej hittar rätt måltid i vår meny kan du alltid ta kontakt
              med personalen. Vi hjälper dig att hitta den rätta mumsiga måltid
              som du kan strävar efter
            </p>
            <Link className="btn--underline" href={"/om#contact"}>
              Kontakta oss
            </Link>
            <p className="subheading">OBS! Kontakta peronalen vid allergier</p>
          </div>
        </div>
      </div>
    </section>
  );
}
