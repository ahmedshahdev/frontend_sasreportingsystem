// React Import
import React from "react";
// Other Libraries

// Global Components

// Components
import ReportsMenu from "./MenusGroup/ReportsMenu";
import ActionsMenu from "./MenusGroup/ActionsMenu";

// Icons

// Assets

const MenusSidebar = () => {
  return (
    <div className="mt-20 flex flex-col gap-5">
      {/* Reports Menu */}
      <ReportsMenu />
      {/* Reports Menu */}
      {/* <ActionsMenu /> */}
    </div>
  );
};

export default MenusSidebar;
