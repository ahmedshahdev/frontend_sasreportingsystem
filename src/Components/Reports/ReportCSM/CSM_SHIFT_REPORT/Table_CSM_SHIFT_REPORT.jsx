// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import TableRow from "./TableROW_CSM_SHIFT_REPORT";

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const Table_CSM_SHIFT_REPORT = () => {
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
              OTP within 0 Min
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              OTP within 15 Min
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              OTP Ground Service
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Total G9 Flights
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Total on time
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Delays Over 15 Min
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Total Delayed
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Total Accountable delays
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Total ABY PAX
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Total ABY Joining PAX
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Total ABY Inbounded PAX
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Totaal other airlines flights
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Total Other airlines pax
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">EBT</td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              LCD fees collections
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Hala service collection
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Online check in
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Arrival Immigration
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              New Terminal Security
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              East Terminal Security
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

export default Table_CSM_SHIFT_REPORT;