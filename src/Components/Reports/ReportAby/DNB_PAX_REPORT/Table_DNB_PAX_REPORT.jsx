// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import TableRow from "./TableROW_DNB_PAX_REPORT";

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const Table_DNB_PAX_REPORT = () => {
    return (
      <table class="border-collapse  w-full  text-xs rounded-lg overflow-x-scroll lg:overflow-x-scroll mt-5">
        <thead className="bg-gradient-to-r from-a-pink to-a-blue text-black">
          <tr className="bg-zinc-100">
          <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              S.NO
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              PNR
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Original Flt No
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">Rebook / Norec FLT NO</td>
            <td class="border border-slate-400 font-bold uppercase p-1">No. of PAX</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Reason For DNB</td>

         
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

export default Table_DNB_PAX_REPORT;