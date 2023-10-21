// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import Table from "./Table_SEAT_SALES_REPORT"

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const SEAT_SALES_REPORT = () => {
  return (
    <div className="w-full">
      {/* Table */}
      <div className="w-full  lg:overflow-x-scroll">
        <Table />
      </div>
    </div>
  );
};


export default SEAT_SALES_REPORT;
