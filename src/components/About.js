export default function About() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto text-center md:py-24 pt-20 pb-12 p-6">
        <h2 className="font-heading text-2xl mb-8 text-green-600">
          WHO WE ARE
        </h2>
        <h1 className="font-heading md:text-6xl text-4xl text-green-600">
          National Trucks Manufacturers Ltd
        </h1>
        <p className="text-lg py-4 px-4 md:px-20">
          National Trucks Manufacturers Limited (NTML) is a pioneer in Nigeria's
          automotive manufacturing sector. We specialize in the assembly and
          production of heavy-duty trucks, cargo vehicles, agricultural
          tractors, and mass transit solutions. Located in Kano, Nigeria. NTML
          is dedicated to providing reliable transportation solutions that
          support key sectors such as logistics, construction, agriculture, and
          public transportation.
        </p>
        {/* Two-column layout with 7/12 and 5/12 proportions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
          {/* Column 1: Occupies 7/12 */}
          <div className="md:col-span-7">
            <img src="../1101.jpg" />
          </div>
          {/* Column 2: Occupies 5/12 */}
          <div className="md:col-span-5 flex flex-col h-full">
            <h2 className="font-heading text-2xl text-start mb-2 text-green-600">
              Brief about us
            </h2>
            <p className="text-base text-justify mb-6">
              National Trucks Manufacturers Limited (NTML) is one of Nigeria's
              pioneering automobile manufacturing companies, specializing in the
              assembly of heavy-duty trucks, cargo vehicles, agricultural
              tractors, and mass transit solutions. Based in Kano, Nigeria, NTML
              is committed to delivering durable and reliable vehicles designed
              specifically for the African environment. With decades of industry
              experience, the company supports key sectors such as logistics,
              construction, agriculture, and public transportation. NTML plays a
              significant role in Nigeria's industrial development through local
              manufacturing, job creation, and the promotion of technical
              expertise. By combining engineering excellence with a deep
              understanding of local needs, the company continues to provide
              practical and efficient transportation solutions across the
              country.
            </p>
            <button className="self-start mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white bg-green-600 px-4 py-2 rounded hover:bg-green-800 group transition duration-300">
              <a href="/about" className="flex items-center">
                <span>Read More</span>
                <span className="transform group-hover:translate-x-1 transition duration-300 pl-2">
                  →
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
