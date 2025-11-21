import { Routes, Route } from "react-router-dom";
import HomePage from "./Views/HomePage";


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}
