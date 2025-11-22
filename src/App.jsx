import { Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage";
import BuyProperties from "./Views/buyProperties";
import Contact from "./Views/Contact";
import PropertyDetails from "./Views/PropertyDetails";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buy" element={<BuyProperties />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
    </Routes>
  );
}
