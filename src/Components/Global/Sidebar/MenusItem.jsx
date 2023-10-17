// React Import
import React from "react";

// Other Libraries
import { Link } from "react-router-dom"; 

// Global Components

// Components

// Icons
// import { BiUser } from "react-icons/bi";
// import {IoMdSettings} from "react-icons/io"
// import {BsGrid} from "react-icons/bs";

// Assets

const MenusItem = ({link, showicon, icon, name}) => {
  return (
    <Link
      to={link}
      className={
        "flex items-center gap-3 hover:opacity-70 text-a-gray  cursor-pointer"
      }
    >
      {showicon && icon}
      {!showicon && <div className="ml-3"></div>}
      <p className="text-a-darkgray text-sm">{name}</p>
    </Link>
  );
};

export default MenusItem;
