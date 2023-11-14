// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import MenusItem from "../MenusItem";

// Icons
import { MdOutlineCreateNewFolder } from "react-icons/md";

// Assets

const ReportsMenu = () => {
  return (
    <>
      <p className=" text-xs  text-blue-500 font-bold uppercase">Reports</p>
      {
        <MenusItem
          showicon={true}
          name="Add Report"
          link="/reports/new"
          icon={<MdOutlineCreateNewFolder size="22px" />}
        />
      }
      <hr class="h-px bg-gray-200 border-0 dark:bg-a-dark2"></hr>
    </>
  );
};

export default ReportsMenu;
