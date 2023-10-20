// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import DepartmentToolbar from "./DepartmentToolbar";
import DepartmentDisplayTable from "./DepartmentDisplayTable";

// Icons

// Assets

const Department = () => {
  return (
    <div>
      {/* Department Toolbar */}
      <DepartmentToolbar />

      {/*  */}
      <DepartmentDisplayTable/>
    </div>
  );
};

export default Department;
