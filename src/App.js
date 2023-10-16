// React Import

// Other Libraries
import {
  Route,
  Routes,
} from "react-router-dom";

// Global Components
import Sidebar from "./Components/Global/Sidebar/Sidebar";

// Components

// Icons

// Assets
import "./App.css";

function App() {
  return (
    <div>
      {/*  */}
      <Routes>
        <Route path="/" element={<p> Home </p>} />
        <Route path="/about" element={<p> About </p>} />
        <Route path="/contact" element={<p> Contact </p>} />
        <Route path="/account" element={<p> Account </p>} />
      </Routes>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default App;
