import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar2";
import HeroSection from "../../components/HeroSection";

export default function About() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HeroSection */}
      <HeroSection title="About Us" backgroundImage="/1102.jpg" />

      {/* Main Section */}
      <div className="text-center bg-white px-4 md:px-32 pt-20 pb-32">
        <h1 className="font-heading text-5xl md:text-6xl tracking-wide text-center mb-6 text-green-600">
          About National Trucks Manufacturers Limited
        </h1>
        <p className="text-lg px-4 mb-24">
          National Trucks Manufacturers Limited (NTML) is a pioneer in Nigeria's
          automotive manufacturing sector. The company specializes in the
          assembly and production of heavy-duty trucks, cargo vehicles,
          agricultural tractors, and mass transit solutions. Located in Kano,
          Nigeria, NTML is dedicated to providing reliable transportation
          solutions that support key sectors such as logistics, construction,
          agriculture, and public transportation. Through innovation,
          engineering excellence, and a commitment to quality, NTML continues to
          support the growth of Nigeria's industrial and agricultural sectors.
        </p>

        {/* Vision Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 px-4">
          {/* Vision */}
          <div className="text-center">
            <img
              src="../vision.svg"
              alt="Vision"
              className="w-24 h-24 mt-12 mx-auto mb-4"
            />
            <h3 className="font-heading text-2xl mb-4 text-green-700">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To become one of the largest and most reliable automobile
              manufacturing companies in Africa
            </p>
            <hr className="mt-16 block md:hidden" />
          </div>

          {/* Our Mission */}
          <div className="text-center">
            <img
              src="../mission.svg"
              alt="Our Mission"
              className="w-24 h-24 mt-12 mx-auto mb-4"
            />
            <h3 className="font-heading text-2xl mb-4 text-green-700">
              Our Mission
            </h3>
            <p className="text-gray-700">
              <p>Promote local manufacturing and component sourcing.</p>
              <p>Deliver durable vehicles designed for African conditions.</p>
              <p>Support economic growth and industrial development.</p>
              <p>Create employment opportunities for Nigerian youth.</p>
            </p>
            <hr className="mt-16 block md:hidden" />
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative">
        {/* Background Image */}
        <img
          src="../1103.jpeg"
          alt="Brief History of National Trucks Manufacturers Limited"
          className="w-full h-[90vh] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Text Content */}
        <div className="absolute inset-0 md:p-20 p-6 md:pt-40">
          {/* Heading */}
          <h1 className="font-heading text-white text-4xl md:text-8xl uppercase">
            Brief History of NTML
          </h1>
          {/* Paragraph */}
          <p className="text-white text-justify md:text-2xl leading-relaxed">
            National Trucks Manufacturers Limited was established in 1975 as a
            joint venture between the Federal Government of Nigeria and Fiat
            Iveco of Italy. Commercial operations officially began in 1980,
            making NTML one of the earliest truck assembly plants in Nigeria.
            During the late 1980s, economic challenges led to the temporary
            closure of operations. In 2003, the company was privatized and
            placed under indigenous management, leading to the resumption of
            full commercial production in August 2004. Since then, NTML has
            continued to play a vital role in Nigeria's automotive industry by
            producing reliable vehicles designed for the nation's transportation
            and agricultural needs.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
