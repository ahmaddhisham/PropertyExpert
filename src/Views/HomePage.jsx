import { motion } from "framer-motion";

export default function HomePage() {
    const PropertyImgs = [
      "/prop1.jpg",
      "/prop2.jpg",
     "/prop3.jpg",
    ];
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560185127-6ed189bf02ab?auto=format&fit=crop&q=80')" }}>
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Explore the best properties in your city with trusted real estate experts.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg px-6 py-4 rounded-xl bg-blue-600 hover:bg-blue-700"
          >
            Browse Properties
          </motion.button>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-950 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us?</h2>
          <p className="text-gray-400 mt-2">We make finding a home simple, fast, and stress-free.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Verified Listings", "Affordable Prices", "Expert Agents"].map((title, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p className="text-gray-400 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-gray-900 px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Properties</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {PropertyImgs.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-800"
            >
              <img
                src={src}
                alt={`Property ${idx + 1}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">Modern Family House</h3>
                <p className="text-gray-400 text-sm mb-4">Cairo, Egypt</p>
                <p className="text-green-400 font-bold text-lg mb-4">$250,000</p>
                <button className="w-full">View Details</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-10 text-center text-gray-400">
        <p>© 2025 RealEstateCo. All rights reserved.</p>
      </footer>
    </div>
  );
}
