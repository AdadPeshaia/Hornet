import Image from "next/image";
import PhoneOne from "@/public/Images/Iphone-1.png";
import PhoneTwo from "@/public/Images/Iphone-2.png";
import PhoneThree from "@/public/Images/Iphone-3.png";

export default function HowItWorks() {
  return (
    <section className="section-how">
      <div className="container">
        <span className="subheading">Hur fungerar det?</span>
        <h2 className="heading-secondary">Catering med 3 enkla steg</h2>
      </div>

      <div className="container grid grid--2-cols grid--center-v">
        <div className="step-text-box">
          <p className="step-number">01</p>
          <h3 className="heading-tertiary">Berätta vad du gillar (och inte)</h3>
          <p className="step-description">
            Slösa aldrig mer tid på att tänka på vad du ska äta! Hos oss på
            Hörnet skapar vi en plan bara för dig. Vi ser till att ni får era
            smörgåsar levererade veckovis
          </p>
        </div>

        <div className="step-img-box">
          <Image
            className="step-img"
            src={PhoneOne}
            alt="Välj ingredienser"
            height={400}
          />
        </div>
        <div className="step-img-box">
          <Image
            className="step-img"
            src={PhoneTwo}
            alt="Kontrollera din beställning"
            height={400}
          />
        </div>
        <div className="step-text-box">
          <p className="step-number">02</p>
          <h3 className="heading-tertiary">Bekräfta din beställning</h3>
          <p className="step-description">
            Bekräfta din beställning i god tid(Helst dagen innan). Du kan byta
            ingridientser, hela måltider eller till och med lägga till egna
            recept.
          </p>
        </div>
        <div className="step-text-box">
          <p className="step-number">03</p>
          <h3 className="heading-tertiary">Leverans vid lämplig tidspunkt</h3>
          <p className="step-description">
            Din beställning levereras vid en lämplig tidpunkt nästa dag. Om du
            inte är hemma kan vi lämna leveransen utanför dörren.
          </p>
        </div>
        <div className="step-img-box">
          <Image
            className="step-img"
            src={PhoneThree}
            alt="Leverans dag"
            height={400}
          />
        </div>
      </div>
    </section>
  );
}
