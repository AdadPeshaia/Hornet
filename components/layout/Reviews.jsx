import Image from "next/image";
import Avatar from "@/public/Images/portait-1.jpg";
import Guests from "@/public/Images/food.jpg";

/* 
This component is currently not in use. Later we will allow google reviews 
to pass through as the paragraf as well as setting the titles for each
review that there is. We will try to grab the persons image and set it as the avatar.
*/

export default function Reviews() {
  return (
    <section className="section-testimonial">
      <div className="container">
        <div className="grid grid--2-cols grid--center grid--center-v">
          <div className="testimonial-feedback">
            <Image className="testimonial-avatar" src={Avatar} alt="avatar" />
            <div className="testimonial-description">
              <h2 className="subheading">William Andersson</h2>
              <p>
                Tack vare Hörnet blev vår personalfest en succé! Smörgåsarna var
                en smakexplosion, presenterade med elegans. Proffsig och vänlig
                personal höjde upplevelsen. Ser fram emot framtida samarbeten –
                ni överträffade verkligen våra förväntningar!
              </p>
            </div>
          </div>
          <Image
            className="testimonial-img"
            src={Guests}
            alt="Gäster i restaurangen"
          />
        </div>
      </div>
    </section>
  );
}
