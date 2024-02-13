import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hörnet Smörgåsfiket",
  description:
    "Söker du en god och prisvärd smörgåsrestaurang i Linköping? Hörnet är ditt rätta ställe! Vi erbjuder ett brett utbud av smörgåsar, smörgåstårtor, baguetter, frallar och sallader. Våra smörgåsar är alltid färska och nybakade, och vi använder oss av högkvalitativa råvaror.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="sv">
      <body className={inter.className}>
        <Header />
        <Toaster richColors />
        {children}
        <Footer />
      </body>
    </html>
  );
}
