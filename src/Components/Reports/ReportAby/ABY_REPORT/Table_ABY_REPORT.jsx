// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import TableRow from "./TableROW_ABY_REPORT";

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const Table_ABY_REPORT = () => {
    return (
      <table class="border-collapse  w-full  text-xs rounded-lg overflow-x-scroll lg:overflow-x-scroll mt-5">
        <thead className="bg-gradient-to-r from-a-pink to-a-blue text-black">
          <tr className="bg-zinc-100">
          <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              FLT No
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              DEST
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              STD
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">Joining ADULT</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Joining INF</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Inbound ADULT</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Inbound INF</td>
            <td class="border border-slate-400 font-bold uppercase p-1">TOB Adult</td>
            <td class="border border-slate-400 font-bold uppercase p-1">TOB INF</td>
            <td class="border border-slate-400 font-bold uppercase p-1">NREC</td>
            <td class="border border-slate-400 font-bold uppercase p-1">WEB</td>
            <td class="border border-slate-400 font-bold uppercase p-1">KIOSK</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Counter Refusal</td>
            <td class="border border-slate-400 font-bold uppercase p-1">DNB</td>
         
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

export default Table_ABY_REPORT;