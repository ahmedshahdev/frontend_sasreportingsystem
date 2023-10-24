// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import TableRow from "./TableROW_RANDOM_CHECK_FORMAT_REPORT";

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const RANDOM_CHECK_FORMAT_REPORT = () => {
    return (
      <table class="border-collapse  w-full  text-xs rounded-lg overflow-x-scroll lg:overflow-x-scroll mt-5">
        <thead className="bg-gradient-to-r from-a-pink to-a-blue text-black">
          <tr className="bg-zinc-100">
          <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              FLT No
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              Sector
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Seq NBR
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">PNR</td>
            <td class="border border-slate-400 font-bold uppercase p-1">FBA</td>
            <td class="border border-slate-400 font-bold uppercase p-1">System WT</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Actual WT</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Remarks</td>

         
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

export default RANDOM_CHECK_FORMAT_REPORT;