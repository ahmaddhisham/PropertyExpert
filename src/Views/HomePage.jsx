import { motion as Motion } from "framer-motion";

export default function HomePage() {
const propertyInfo = {
  id: 1,
  name: "Modern Family Home",
  location: "Cairo, Egypt",
  price: "$250,000",
};
    const PropertyImgs = [
      "/prop1.jpg",
      "/prop2.jpg",
     "/prop3.jpg",
    ];
  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/darkbeach.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl text-orange-200 font-bold mb-4">Find Your Dream Home</h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            Explore the best properties in your city with trusted real estate experts.
          </p>
          <Motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-lg px-6 py-4 rounded-xl bg-orange-200 text-black cursor-pointer hover:bg-orange-100">
            Browse Properties
          </Motion.button>
        </Motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-black px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-orange-200 font-bold">Why Choose Us?</h2>
          <p className="text-orange-100 mt-2">We make finding a home simple, fast, and stress-free.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {["Verified Listings", "Affordable Prices", "Expert Agents"].map((title, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-gray-900 p-8 rounded-2xl shadow-md hover:shadow-xl transition"
            >
              <h3 className="text-xl text-orange-200 font-semibold mb-2">{title}</h3>
              <p className="text-gray-200 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, ratione.
              </p>
            </Motion.div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-black px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-200">Featured Properties</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {PropertyImgs.map((src, idx) => (
            <Motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl overflow-hidden shadow-lg bg-gray-900"
            >
              <img
                src={src}
                alt={`Property ${idx + 1}`}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="text-lg text-orange-200 font-semibold mb-2">{propertyInfo.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{propertyInfo.location}</p>
                <p className="text-orange-200 font-bold text-lg mb-4">{propertyInfo.price}</p>
                <button className="w-full hover:text-orange-200 cursor-pointer">View Details</button>
              </div>
            </Motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
