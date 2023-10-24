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
              Add
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              Date
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Receipt No
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">PNR</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Staff</td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Voucher No
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Flight No
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">From</td>
            <td class="border border-slate-400 font-bold uppercase p-1">To</td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              No OF Seat
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Amount Cash
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Amount Card
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Payment Details
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

export default Table_OAL_REPORT;