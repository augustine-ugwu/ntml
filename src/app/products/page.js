import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar2";
import HeroSection from "../../components/HeroSection";

export default function Products() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HeroSection */}
      <HeroSection
        title="Our Products and Services"
        backgroundImage="/0002.jpg"
      />

      {/* Main Section */}
      <div className="text-center bg-white px-4 md:px-32 pt-20 pb-32">
        <h1 className="font-heading text-italic text-5xl md:text-6xl tracking-wide text-center mb-6 text-green-600">
          Coming Soon
        </h1>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
