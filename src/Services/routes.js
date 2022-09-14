import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/index.js";
import DogPage from "../Pages/DogPages/index";

export default function Rotas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogpage" element={<DogPage />} />
      </Routes>
    </Router>
  );
}
