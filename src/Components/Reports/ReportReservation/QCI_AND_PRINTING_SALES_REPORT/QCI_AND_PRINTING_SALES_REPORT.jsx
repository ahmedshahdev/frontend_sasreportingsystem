// React Import
import React from "react";

// Other Libraries

// Global Components
import BreadCrumbs from "../../../Global/BreadCrumbs/BreadCrumbs";

// Components
import Table from "./Table_QCI_AND_PRINTING_SALES_REPORT"

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const QCI_AND_PRINTING_SALES_REPORT = () => {
  return (
    <div className="w-full">

      {/* Breadcrumb Basic */}
      <BreadCrumbs list={['Reports', 'Reservation Report', 'QCI & Printing Sales']}/>

      {/* Table */}
      <div className="w-full  lg:overflow-x-scroll">
        <Table />
      </div>
    </div>
  );
};


export default QCI_AND_PRINTING_SALES_REPORT;
