// React Import

// Other Libraries
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

// Global Components
import Sidebar from "./Components/Global/Sidebar/Sidebar";

// Components
// import NewReport from "./Components/Reports/NewReport/NewReport";

// Icons

// Assets
import "react-toastify/dist/ReactToastify.css";

import "./App.css";
import Department from "./Components/Department/Department";

function App() {
  return (
    <div className="flex">
       <ToastContainer />

      {/* lg:ml-52 */}
      <div className="p-5 w-full  ml-52 relative h-screen text-a-gray">
        <Routes>
          <Route path="/reports/new" element={ <p>New Report</p> } />

          {/* Departments */}
          <Route path="/actions/department" element={<Department/>} />
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
