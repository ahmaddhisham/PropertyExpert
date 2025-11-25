export default function Footer() {
  return (
    <footer className="w-full bg-black text-gray-300 py-10 px-6 md:px-16 border-t border-gray-800 ">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
        {/* Logo + About */}
        <div>
          <h2 className="text-2xl flex font-bold text-orange-200 mb-3">PropertXprt</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Discover premium homes, luxurious villas, and modern apartments across Egypt.
            We help you find the perfect property with ease and confidence.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold text-orange-200 mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li className="hover:text-orange-200 cursor-pointer"><a href="/">Home</a></li>
            <li className="hover:text-orange-200 cursor-pointer"><a href="/buy">Buy</a></li>
            <li className="hover:text-orange-200 cursor-pointer"><a href="/rent">Rent</a></li>
            <li className="hover:text-orange-200 cursor-pointer"><a href="/contact">contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-orange-200 mb-3">Contact Us</h3>
          <p className="text-gray-300 text-sm mb-1">📍 Cairo, Egypt</p>
          <p className="text-gray-300 text-sm mb-1">📞 +20 111 222 3333</p>
          <p className="text-gray-300 text-sm">✉️ support@estatehub.com</p>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center flex text-gray-500 text-sm mt-10 border-t border-gray-800 pt-6">
       <img src="/p-logo.png" alt="logo" className="w-8 h-8" /> © {new Date().getFullYear()} PropertyXprt. All Rights Reserved.
      </div>
      
    </footer>
  );
}