// React Import
import React from "react";

// Other Libraries

// Global Components
import BreadCrumbs from "../../../Global/BreadCrumbs/BreadCrumbs";

// Components
import Table from "./Table_OAL_INADP_REPORT";

// Icons
import {
  MdOutlineAddCircleOutline,
  MdRemoveCircleOutline,
  MdOutlineControlPointDuplicate,
} from "react-icons/md";

// Assets

const REPORT_INIT = ({ report }) => {
  return (
    <div className="w-full">
      {/* Breadcrumb Basic */}
      <BreadCrumbs list={["Reports", "OAL Report", "INAD PASSENGER"]} />

      {/*  */}

      {/* Table */}
      <div className="w-full  lg:overflow-x-scroll">
        <Table report={report} />
      </div>
    </div>
  );
};

export default REPORT_INIT;
