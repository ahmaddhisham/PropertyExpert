import { Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage";
import BuyProperties from "./Views/BuyProperties";
import Contact from "./Views/Contact";
import PropertyDetails from "./Views/PropertyDetails";
import Rent from "./Views/Rent";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/buy" element={<BuyProperties />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/property/:id" element={<PropertyDetails />} />
      <Route path="/rent" element={<Rent />} />
    </Routes>
  );
}
