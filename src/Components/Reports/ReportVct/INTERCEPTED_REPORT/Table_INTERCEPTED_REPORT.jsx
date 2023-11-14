// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import TableRow from './TableROW_INTERCEPTED_REPORT'

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const Table_INTERCEPTED_REPORT = () => {
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
              Name
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">From</td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              To
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">Staff Intercepted</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Accepted BY</td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              PNR
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Nationality
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Hotel
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Amount
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Meal
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Impropriety
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Caption
            </td>
            
          </tr>
        </thead>
        <tbody class="bg1a-gr2">

          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          <TableRow />
          
        </tbody>
      </table>
    );
  };

export default Table_INTERCEPTED_REPORT;