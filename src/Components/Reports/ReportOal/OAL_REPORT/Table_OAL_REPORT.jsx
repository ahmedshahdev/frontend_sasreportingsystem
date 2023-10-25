// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import TableRow from "./TableROW_OAL_REPORT";

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const Table_OAL_REPORT = () => {
    return (
      <table class="border-collapse  w-full  text-xs rounded-lg overflow-x-scroll lg:overflow-x-scroll mt-5">
        <thead className="bg-gradient-to-r from-a-pink to-a-blue text-black">
          <tr className="bg-zinc-100">
          <td class="border  border-slate-400 font-bold uppercase p-1 pl-2">
            {/* for action */}
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Added By (STAFF)
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              SL No
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              FLT NO
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">DEST</td>
            <td class="border border-slate-400 font-bold uppercase p-1">STD</td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              ATD
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              TOB ADULT
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">TOB INF</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Date</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Time</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Added Date</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Added Time</td>
           
          </tr>
        </thead>
        <tbody class="bg1a-gr2">

          <TableRow />
          
        </tbody>
      </table>
    );
  };

export default Table_OAL_REPORT;