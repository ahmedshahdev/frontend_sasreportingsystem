// React Import
import React from "react";

// Other Libraries

// Global Components

// Components

// Icons
import {
  MdOutlineAddCircleOutline,
  MdRemoveCircleOutline,
  MdOutlineControlPointDuplicate,
} from "react-icons/md";

// Assets

const TableRow_HALA_XSUMMARY_REPORT = () => {
  return (
    <tr>
      <td class="border border-slate-400 uppercase  ">
        <div className="flex items-center justify-left gap-1 px-1 w-full h-full cursor-pointer">
          <MdOutlineAddCircleOutline className="text-lg" />
          <MdRemoveCircleOutline className="text-lg" />
          <MdOutlineControlPointDuplicate className="text-lg" />
        </div>
      </td>
      <td class="border border-slate-400 uppercase ">
        <input
          type="text"
          className="px-2  text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1 "
        />
      </td>
      <td class="border border-slate-400 uppercase">
        <input
          type="text"
          className="px-2 w-24  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-slate-400 uppercase">
        <input
          type="text"
          className="px-2 w-28  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-slate-400 uppercase">
        <input
          type="text"
          className="px-2 w-28  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-slate-400 uppercase">
        <input
          type="text"
          className="px-2 w-28  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-slate-400 uppercase">
        <input
          type="text"
          className="px-2 w-28  box-border text-black rounded-none border-2 border-transparent focus:border-teal-400 border-solid  outline-none py-1  "
        />
      </td>
   
    </tr>
  );
};

export default TableRow_HALA_XSUMMARY_REPORT;
