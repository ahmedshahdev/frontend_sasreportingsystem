// React Import
import React, { useState } from "react";

// Other Libraries
import { Link } from "react-router-dom";
// import  {  } from ""


// Global Components

// Components

// Icons

// Assets

const MenusItem = ({ link, showicon, icon, name, isactivemenu }) => {
  // Menus State

  return (
    <Link
      to={link}
      className={`flex items-center gap-3 hover:opacity-70 text-a-gray ${
        isactivemenu && "bg-teal-100"
      }  py-3 px-3 rounded-md  cursor-pointer`}
    >
      {showicon && icon}
      {!showicon && <div className="ml-3"></div>}
      <p className="text-a-darkgray text-sm">{name}</p>
    </Link>
  );
};

export default MenusItem;
