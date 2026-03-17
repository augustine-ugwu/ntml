import { Roboto, Bebas_Neue } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "400", "500", "700"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "National Trucks Manufacturers Ltd",
  description:
    "National Trucks Manufacturers Limited (NTML) is a pioneer in the Nigerian automotive industry, specializing in the assembly and manufacturing of heavy-duty trucks and agricultural tractors. Based in Kano, we are committed to driving Nigeria’s industrial growth by providing rugged, high-quality vehicles tailored for the African terrain.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${bebasNeue.variable} font-sans antialiased bg-gray-50 text-gray-800`}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
