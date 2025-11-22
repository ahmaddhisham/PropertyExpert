import { motion as Motion } from "framer-motion";
import { Link } from "react-router-dom";
import properties from "../data/properties";



export default function BuyProperties() {

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/modern.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl text-orange-200 font-bold mb-4">
            Properties for Sale
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-6">
            Browse our premium collection of homes tailored to your lifestyle.
          </p>
        </Motion.div>
      </section>

      {/* Properties Grid */}
      <section className="py-20 bg-black px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-200">
            Available Properties
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {properties.map((prop) => (
            <Motion.div
              key={prop.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-900 will-change-transform"
            >
              <img
                src={prop.img}
                alt={prop.name}
                loading="lazy"
                className="w-full h-56 object-cover"
              />

              <div className="p-5">
                <h3 className="text-lg text-orange-200 font-semibold mb-2">
                  {prop.name}
                </h3>
                <p className="text-gray-400 text-sm mb-2">{prop.location}</p>
                <p className="text-orange-200 font-bold text-lg mb-4">
                  {prop.price}
                </p>
                <Link to={`/property/${prop.id}`}>
                  <button className="w-full cursor-pointer hover:text-orange-200">
                    View Details
                  </button>
                </Link>
              </div>
            </Motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}