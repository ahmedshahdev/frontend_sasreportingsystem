// React Import
import React from "react";

// Other Libraries

// Global Components

// Components
import TableRow from "./TableROW_CREDIT_CARD_REPORT";

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const Table_CREDIT_CARD_REPORT = () => {
    return (
      <table class="border-collapse  w-full  text-xs rounded-lg overflow-x-scroll lg:overflow-x-scroll mt-5">
        <thead className="bg-gradient-to-r from-a-pink to-a-blue text-black">
          <tr className="bg-zinc-100">
          <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              Till No
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
              Transaction No
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">
              Amount
            </td>
            <td class="border border-slate-400 font-bold uppercase p-1">Credit Card Type</td>
            <td class="border border-slate-400 font-bold uppercase p-1">Credit Card No</td>
         
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

export default Table_CREDIT_CARD_REPORT;