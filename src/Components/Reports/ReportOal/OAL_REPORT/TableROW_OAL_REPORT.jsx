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

const TableRow_OAL_REPORT = ({report}) => {
  return (
    <tr>
      <td class="border border-a-dark2 uppercase  ">
        <div className="flex items-center justify-center gap-1 px-1 w-full h-full cursor-pointer">
          {/* <MdOutlineAddCircleOutline className="text-lg" /> */}
          <MdRemoveCircleOutline className="text-lg" />
          {/* <MdOutlineControlPointDuplicate className="text-lg" /> */} {/* Not important to add for now */}
        </div>
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
      <input
          type="time"
          className="px-2 w-24  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
      <input
          type="time"
          className="px-2 w-24  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td> 
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td> 
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td> 
      <td class="border border-a-dark2 uppercase">
        <input
          type="date"
          className="px-2 w-24  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td> 
      <td class="border border-a-dark2 uppercase">
        <input
          type="time"
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td> 
      <td class="border border-a-dark2 uppercase">
        <input
          type="date"
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td> 
      <td class="border border-a-dark2 uppercase">
        <input
          type="time"
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td> 
    </tr>
  );
};

export default TableRow_OAL_REPORT;
