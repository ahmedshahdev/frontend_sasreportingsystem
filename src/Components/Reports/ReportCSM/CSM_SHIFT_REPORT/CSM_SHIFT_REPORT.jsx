// React Import
import React from "react";

// Other Libraries

// Global Components
import BreadCrumbs from "../../../Global/BreadCrumbs/BreadCrumbs";

// Components
import Table from "./Table_CSM_SHIFT_REPORT"

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const CSM_SHIFT_REPORT = () => {
  return (
    <div className="w-full">

      {/* Breadcrumb Basic */}
      <BreadCrumbs list={['Reports', 'CSM Report', 'CSM SHIFT REPORT']}/>

      {/* Table */}
      <div className="w-full  lg:overflow-x-scroll">
        <Table />
      </div>
    </div>
  );
};


export default CSM_SHIFT_REPORT;
