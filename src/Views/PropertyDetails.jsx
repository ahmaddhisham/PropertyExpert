import { useParams, useNavigate } from "react-router-dom";
import properties from "../data/properties";

export default function PropertyDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Find the property by ID
  const property = properties.find((p) => p.id === Number(id));

  if (!property) {
    return (
      <div className="min-h-screen bg-gray-900 text-white p-10 flex flex-col items-center justify-center">
        <h1 className="text-3xl mb-4">Property Not Found</h1>
        <button
          onClick={() => navigate("/")}
          className="bg-orange-200 text-black px-6 py-3 rounded-xl hover:bg-orange-100"
        >
          Go Back Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-20">

      {/* Hero Image */}
      <div
        className="w-full h-[60vh] bg-cover bg-center relative"
        style={{ backgroundImage: `url(${property.img})` }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-8 left-8 z-10 bg-black/50 text-white px-4 py-2 rounded-lg hover:bg-black/70"
        >
          ← Back
        </button>

        <div className="absolute bottom-10 left-10 z-10">
          <h1 className="text-4xl font-bold text-orange-200">{property.name}</h1>
          <p className="text-gray-300 mt-2">{property.location}</p>
          <p className="text-orange-200 font-semibold text-2xl mt-2">
            {property.price}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 mt-14">

        {/* Description */}
        <section className="mb-12">
          <h2 className="text-3xl text-orange-200 font-bold mb-4">About the Property</h2>
          <p className="text-gray-300 leading-7">{property.description}</p>
        </section>

        {/* Features */}
        <section className="mb-14">
          <h2 className="text-3xl text-orange-200 font-bold mb-6">Features</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {property.features.map((feature, idx) => (
              <li
                key={idx}
                className="bg-gray-800 p-4 rounded-xl border border-gray-700 text-gray-300"
              >
                ✓ {feature}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
