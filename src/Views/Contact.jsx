import { motion as Motion } from "framer-motion";

export default function Contact() {
  const agents = [
    {
      id: 1,
      name: "Omar Hassan",
      role: "Senior Real Estate Agent",
      phone: "+20 111 222 3333",
      email: "omar@estatehub.com",
      img: "/agent1.png",
    },
    {
      id: 2,
      name: "Layla Mostafa",
      role: "Property Consultant",
      phone: "+20 122 444 5555",
      email: "layla@estatehub.com",
      img: "/agent2.png",
    },
    {
      id: 3,
      name: "Karim Adel",
      role: "Luxury Homes Specialist",
      phone: "+20 155 666 7777",
      email: "karim@estatehub.com",
      img: "/agent3.png",
    },
        {
      id: 4,
      name: "MO Azzam",
      role: "Senior Real Estate Agent",
      phone: "+20 111 222 3333",
      email: "moe@estatehub.com",
      img: "/agent4.png",
    },
    {
      id: 5,
      name: "Natalie Joseph",
      role: "Property Consultant",
      phone: "+20 122 444 5555",
      email: "Natalie@estatehub.com",
      img: "/agent5.png",
    },
    {
      id: 6,
      name: "Hatem Eldesouky",
      role: "Luxury Homes Specialist",
      phone: "+20 155 666 7777",
      email: "Hatem@estatehub.com",
      img: "/agent6.png",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-gray-900 text-white overflow-hidden">
      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/compressedbg.webp')" }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <Motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-4xl md:text-5xl text-orange-200 font-bold mb-4">
            Contact Our Agents
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Our professional agents are ready to help you find your perfect home.
          </p>
        </Motion.div>
      </section>

      {/* Agents Section */}
      <section className="py-20 bg-black px-6 md:px-16">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-orange-200">Meet Our Team</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {agents.map((agent, idx) => (
            <Motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-gray-900 p-6 rounded-2xl shadow-lg hover:shadow-xl transition will-change-transform text-center"
            >
              <img
                src={agent.img}
                alt={agent.name}
                loading="eager"
                className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-2 border-orange-200"
              />

              <h3 className="text-xl text-orange-200 font-semibold mb-1">{agent.name}</h3>
              <p className="text-gray-400 text-sm mb-2">{agent.role}</p>

              <p className="text-gray-300 text-sm mb-1">📞 {agent.phone}</p>
              <p className="text-gray-300 text-sm mb-4">✉️ {agent.email}</p>

              <button className="w-full px-4 py-2 bg-orange-200 text-black font-medium rounded-xl hover:bg-orange-100 cursor-pointer">
                Contact Agent
              </button>
            </Motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
