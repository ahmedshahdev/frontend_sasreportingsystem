// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import MenusItem from "../MenusItem";


// Icons
import { AiOutlineUser, AiOutlineApartment } from "react-icons/ai";
import {BsGrid} from "react-icons/bs";
import {TbReportAnalytics} from "react-icons/tb"

// Assets

const ActionsMenu = () => {
  return (
    <>
      <p className=" text-xs  text-red-500 font-bold uppercase">Actions</p>

      {
        <MenusItem
          showicon={true}
          name="Departments"
          link="/actions/department"
          icon={<BsGrid size="22px" />}
        />
      }

      {
        <MenusItem
          showicon={true}
          name="Users Roles"
          link="/actions/userroles"
          icon={<AiOutlineApartment size="22px" />}
        />
      }

      {
        <MenusItem
          showicon={true}
          name="Reports"
          link="/actions/reports"
          icon={<TbReportAnalytics size="22px" />}
        />
      }

      {
        <MenusItem
          showicon={true}
          name="Users"
          link="/actions/users"
          icon={<AiOutlineUser size="22px" />}
        />
      }

<hr class="h-px  bg-gray-200 border-0 dark:bg-a-dark2"></hr>
    </>
  );
};

export default ActionsMenu;
