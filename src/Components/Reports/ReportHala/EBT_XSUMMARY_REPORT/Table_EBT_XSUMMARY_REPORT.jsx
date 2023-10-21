// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import TableRow from "./TableROW_EBT_XSUMMARY_REPORT";

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const Table_EBT_XSUMMARY_REPORT = () => {
    return (
      <table class="border-collapse  w-full  text-xs rounded-lg overflow-x-scroll lg:overflow-x-scroll mt-5">
        <thead className="bg-gradient-to-r from-a-pink to-a-blue text-black">
          <tr>
          <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              Service Code
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              Service Name
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Quantity
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">Amount</td>
            <td class="border border-slate-400 font-bold uppercase p-1">NET</td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              VAT
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Total
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

export default Table_EBT_XSUMMARY_REPORT;