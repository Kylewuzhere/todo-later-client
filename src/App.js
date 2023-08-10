import Homepage from "./pages/Homepage";
import Demopage from "./pages/Demopage.js";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/demo" element={<Demopage />} />
      </Routes>
    </div>
  );
}

export default App;
