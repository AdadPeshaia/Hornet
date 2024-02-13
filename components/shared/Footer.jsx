import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/Images/logo.png";
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Footer() {
  const Links = [
    { title: "Startsida", href: "/" },
    { title: "Meny", href: "/meny" },
    { title: "Om oss", href: "/om" },
  ];

  return (
    <footer className="section-footer">
      <div className="container">
        <div className="grid">
          <div className="footer-box">
            <h2 className="heading-primary">Smakfulla skapelser</h2>
            <h3 className="subheading">
              Smakexplosion i varje tugga. Upptäck våra mumsiga mästerverk - en
              smakresa du inte vill missa!
            </h3>
            <Link className="btn btn--form space-y" href="tel:+46735808675">
              Kontakta oss
            </Link>
            <p className="copyright">
              &#169;
              <span className="year"></span>
              HÖRNET LINKÖPING
            </p>
          </div>
          <div className="footer-links">
            <Link href="/">
              <Image src={Logo} alt="Hörnet logga" width={200} />
            </Link>
            <nav>
              <ul className="footer-nav">
                {Links.map((link, index) => (
                  <li key={index}>
                    <Link key={link.title} href={link.href}>
                      {link.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav>
              <ul className="footer-social">
                <li>
                  <Link href="/" target="_blank" aria-label="Facebook sida">
                    <FaFacebook size={30} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.instagram.com/hornetebbepark/"
                    target="_blank"
                    aria-label="Instagram sida"
                  >
                    <FaInstagram size={30} />
                  </Link>
                </li>
                <li>
                  <Link href="/" target="_blank" aria-label="LinkedIn sida">
                    <FaLinkedin size={30} />
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
