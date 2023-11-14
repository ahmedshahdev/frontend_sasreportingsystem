// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import TableRow from "./TableROW_QCI_AND_PRINTING_SALES_REPORT";

// Icons
import {
  MdOutlineAddCircleOutline,
  MdRemoveCircleOutline,
  MdOutlineControlPointDuplicate,
} from "react-icons/md";

// Assets

const Table_QCI_AND_PRINTING_SALES_REPORT = () => {
  return (
    <table class="border-collapse  w-full  text-xs rounded-lg overflow-x-scroll lg:overflow-x-scroll mt-5">
      <thead className="bg-gradient-to-r from-a-pink to-a-blue text-black">
        <tr className="bg-a-dark">
          <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
            Add
          </td>
          <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
            Date
          </td>
          <td class="border border-slate-400 font-bold uppercase p-1">
            Receipt No
          </td>
          <td class="border border-slate-400 font-bold uppercase p-1">No OF PAX/PRINT</td>
          <td class="border border-slate-400 font-bold uppercase p-1">Flight No</td>
          <td class="border border-slate-400 font-bold uppercase p-1">
            From
          </td>
          <td class="border border-slate-400 font-bold uppercase p-1">
            To
          </td>
          <td class="border border-slate-400 font-bold uppercase p-1">QCI Cash</td>
          <td class="border border-slate-400 font-bold uppercase p-1">QCI Card</td>
          <td class="border border-slate-400 font-bold uppercase p-1">
            Print Cash
          </td>
          <td class="border border-slate-400 font-bold uppercase p-1">
            Print Card
          </td>
          <td class="border border-slate-400 font-bold uppercase p-1">
            Amount
          </td>
        </tr>
      </thead>
      <tbody class="bg1a-gr2">
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
};

export default Table_QCI_AND_PRINTING_SALES_REPORT;
