// React Import
import React from "react";

// Other Libraries

// Global Components

// Components

// Icons

// Assets

const BreadCrumbs = ({ list }) => {
  return (
    <div className="flex gap-3">
      {list.map((item, index) => {
        return (
          <div className="flex gap-3 text-sm">
            <div className={(index == list.length - 1) && 'text-teal-500 font-bold'}>{item}</div>
            <div className="">{!(index == list.length - 1) && '/'}</div>
          </div>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
