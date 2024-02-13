import Image from "next/image";
import AwardImage from "@/public/Images/award.svg";

export default function Award() {
  return (
    <section className="section-award">
      <div className="container">
        <span className="subheading">Vinster</span>
        <h2 className="heading-secondary">Vår höjdpunkt 2023</h2>
        <div className="grid grid--center">
          <Image
            src={AwardImage}
            className="award-img"
            alt="Branchvinnare 2023"
          />
        </div>
      </div>
    </section>
  );
}
