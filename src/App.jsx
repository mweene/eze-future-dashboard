import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Sites from "./components/pages/Sites";
import SitePlans from "./components/pages/SitePlans";
import Sales from "./components/pages/Sales";
import Reports from "./components/pages/Reports";
import Documents from "./components/pages/Documents";
import Navigation from "./components/Navigation";
import "./App.css";

export default function App() {
  return (
    <div className="App p-4 grid">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sites" element={<Sites />} />
        <Route path="/sitePlans" element={<SitePlans />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/documents" element={<Documents />} />
      </Routes>
    </div>
  );
}
