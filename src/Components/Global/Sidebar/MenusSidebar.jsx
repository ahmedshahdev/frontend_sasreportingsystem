// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import ReportsMenu from "./MenusGroup/ReportsMenu";

// Icons

// Assets

const MenusSidebar = () => {
  return (
    <div className="mt-20 flex flex-col gap-5">
      {/* Reports Menu */}
      <ReportsMenu/>
    </div>
  );
};

export default MenusSidebar;
