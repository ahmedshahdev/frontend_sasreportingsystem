// React Import
import React from "react";

// Other Libraries

// Global Components
import BreadCrumbs from "../../../Global/BreadCrumbs/BreadCrumbs";

// Components
import Table from "./Table_INAD_ABY_REPORT"

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const INAD_ABY_REPORT = () => {
  return (
    <div className="w-full">

      {/* Breadcrumb Basic */}
      <BreadCrumbs list={['Reports', 'VCT Report', 'INAD ABY Report']}/>

      {/* Table */}
      <div className="w-full  lg:overflow-x-scroll">
        <Table />
      </div>
    </div>
  );
};


export default INAD_ABY_REPORT;
