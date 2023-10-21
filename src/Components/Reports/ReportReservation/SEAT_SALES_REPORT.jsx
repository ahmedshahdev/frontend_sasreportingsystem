// React Import
import React from "react";

// Other Libraries

// Global Components

// Components

// Icons
import {MdOutlineAddCircleOutline, MdRemoveCircleOutline, MdOutlineControlPointDuplicate} from 'react-icons/md'

// Assets

const SEAT_SALES_REPORT = () => {
  return (
    <div className="w-full">
      {/* Table */}
      <div className="w-full  lg:overflow-x-scroll">
        <Table />
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <table class="border-collapse  w-full  text-xs rounded-lg overflow-x-scroll lg:overflow-x-scroll mt-5">
      <thead className="bg-gradient-to-r from-a-pink to-a-blue text-black">
        <tr>
        <td class="border border-slate-400 font-bold uppercase p-1 pl-2">
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
        {/* {spmsRecordBreakdown.map((staff, index) => {
       
        return <TableBreakDownRow setstaffid={setstaffid} staff={staff} key={index} setLoadingBar={setLoadingBar} setApplyFilter={setApplyFilter} settempstaffid={settempstaffid} />;
      })} */}
        <TableRow />
        <TableRow />
        <TableRow />
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

const TableRow = () => {
  return (
    <tr>
      <td class="border border-slate-400 uppercase  ">
        <div className="flex items-center justify-center gap-1 px-1 w-full h-full cursor-pointer">
          <MdOutlineAddCircleOutline className="text-lg"/>
          <MdRemoveCircleOutline className="text-lg"/>
          <MdOutlineControlPointDuplicate className="text-lg"/>
        </div>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="date" className="px-2 text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1 "/>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="text" className="px-2  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "/>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="text" className="px-2  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "/>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="text" className="px-2  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "/>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="text" className="px-2  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "/>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="text" className="px-2  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "/>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="text" className="px-2  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "/>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="text" className="px-2  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "/>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="text" className="px-2  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "/>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="text" className="px-2  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "/>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="text" className="px-2  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "/>
      </td>
      <td class="border border-slate-400 uppercase">
        <input type="text" className="px-2  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "/>
      </td>
    </tr>
  );
};

export default SEAT_SALES_REPORT;
