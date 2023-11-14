// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import TableRow from "./TableROW_REFUSAL_REPORT";

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const Table_REFUSAL_REPORT = () => {
    return (
      <table class="border-collapse  w-full  text-xs rounded-lg overflow-x-scroll lg:overflow-x-scroll mt-5">
        <thead className="bg-gradient-to-r from-a-pink to-a-blue text-black">
          <tr className="bg-a-dark">
          <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              FLT No
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              PNR
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              PAX Name
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">No OF PAX</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Dest</td>
            <td class="border border-slate-400 font-bold uppercase p-1">NAT</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Reasons</td>
            <td class="border border-slate-400 font-bold uppercase p-1">PAX Handled BY</td>

         
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

export default Table_REFUSAL_REPORT;