import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/page.tsx";
import Home from "./pages/home/page.tsx";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
