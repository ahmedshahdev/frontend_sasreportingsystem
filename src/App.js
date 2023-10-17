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

          {/* Departments */}
          <Route path="/actions/department" element={<p> Departments </p>} />
          <Route path="/actions/userroles" element={<p> User Roles </p>} />
          <Route path="/actions/reports" element={<p> Reports </p>} />
          <Route path="/actions/users" element={<p> Users </p>} />
        </Routes>
      </div>

      {/* Sidebar */}
      <Sidebar />
    </div>
  );
}

export default App;
