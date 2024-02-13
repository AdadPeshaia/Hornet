import Image from "next/image";
import Lokal from "@/public/Images/lokal.jpg";
import { FaPhoneAlt, FaMailBulk } from "react-icons/fa";
import Card from "@/components/shared/Card";
import ContactForm from "@/components/ContactForm";
import Ashor from "@/public/Images/ashor.jpg";
import Juliana from "@/public/Images/juliana.jpg";

export default function page() {
  const employees = [
    { name: "Ashor", avatar: Ashor },
    {
      name: "Juliana",
      avatar: Juliana,
    },
  ];

  return (
    <>
      <section className="section-subhero">
        <Image src={Lokal} alt="Bild på lokalen" />
        <div className="container">
          <div className="subhero-text">
            <h1 className="heading-primary">OM OSS</h1>
          </div>
        </div>
      </section>
      <section className="section-about">
        <div className="container">
          <div className="grid grid--1-cols">
            <h2 className="heading-primary">
              Välkommen till Hörnet - <br />
              Där smak och gemenskap möts!
            </h2>
            <div className="step-description">
              <p>
                Efter att ha drivit Johannelunds kafé, öppnade vi Hörnet i
                Ebbepark, en ny början med utökad verksamhet från bara catering
                till ett fullskaligt kafé. Här serverar vi allt från kalla och
                varma dryck till hemgjorda mackor, samtidigt som vi fortsätter
                med vår catering. Hörnet kombinerar en mysig atmosfär med
                passionerad personal, vilket gör det till mer än bara ett kafé –
                det är en mötesplats för communityn. Vår meny är en blandning av
                tradition och innovation, och vi välkomnar dig att bli en del av
                vår historia.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section-about">
        <div className="container">
          <div className="grid grid--2-cols grid--center">
            {employees.map((employee) => (
              <div className="employee" key={employee.name}>
                <Card avatar={employee.avatar} name={employee.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="section-about">
        <div className="container">
          <div className="grid grid--2-cols">
            <div>
              <h2 className="heading-tertiary">Dela dina tankar med oss!</h2>
              <h3 className="subheading">
                Vi ser fram emot att höra från dig – vi svarar snabbt!
              </h3>
              <div className="about-description">
                <p>
                  Tack för att du tar dig tid att kontakta oss och dela dina
                  tankar. Vi värdesätter varje meddelande vi får och ser fram
                  emot att höra från dig. För att underlätta vår snabba respons.
                  Vi vill att du ska veta att ditt meddelande är viktigt för
                  oss, och vi kommer att göra vårt bästa för att svara så snabbt
                  som möjligt.
                </p>
                <p className="cta-icon subheading">
                  <span>
                    <FaPhoneAlt size={30} />
                  </span>
                  <span>013 - 12 53 40</span>
                </p>
                <p className="cta-icon subheading">
                  <span>
                    <FaMailBulk size={30} />
                  </span>
                  <span>hornetebbepark@hotmail.com</span>
                </p>
              </div>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <section className="section-about">
        <div className="container">
          <h2 className="heading-primary">Var vi befinner oss</h2>
          <h3 className="heading-tertiary">
            Wahlbecksgatan 14 Linköping, Östergötland
          </h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2090.39883135315!2d15.60223491370153!3d58.4035361740716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46596f16734c5ad1%3A0x278b054b22a90e1a!2sWahlbecksgatan%2014%2C%20582%2013%20Link%C3%B6ping!5e0!3m2!1sen!2sse!4v1698275511352!5m2!1sen!2sse"
            width="100%"
            height="400"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </>
  );
}
