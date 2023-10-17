// React Import

// Other Libraries
import { Route, Routes } from "react-router-dom";

// Global Components
import Sidebar from "./Components/Global/Sidebar/Sidebar";

// Components
import NewReport from "./Components/Reports/NewReport/NewReport";

// Icons

// Assets
import "./App.css";

function App() {
  return (
    <div className="flex">
      {/*  */}
      <div className="p-5 w-full  lg:ml-52 relative h-screen text-a-gray">
        <Routes>
          <Route path="/reports/new" element={<NewReport />} />
        </Routes>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default App;
