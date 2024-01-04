// React Import
import React, { useState } from "react";

// Other Libraries
import { toast } from "react-toastify";

// Global Components
import { MiniLoadingBar } from "../Global/Loader/LoadingBar";

// Components

// Icons

// Assets
import Config from "../../Json/config.json";

const DepartmentDisplayTable = () => {
  return (
    <div className="mt-5">
      <DepartmentTable />
    </div>
  );
};

const DepartmentTable = ({}) => {
  return (
    <table class="border-collapse  w-full text-sm rounded-lg overflow-x-scroll    ">
      <thead className="bg-gradient-to-r rounded-md from-a-pink to-a-blue  bg-red-500 text-white">
        <tr className="bg-a-dark">
          <td class=" border border-slate-300  p-4 py-2 font-bold  ">Departments</td>
          <td class=" border border-slate-300  p-4 py-2 font-bold">Actions</td>
        </tr>
      </thead>
      <tbody class=" text-white">
      <TableRow  />
      <TableRow  />
      <TableRow  />
        {/* {logslist.map((log) => {
            return <TableRow log={log}  />;
          })} */}
      </tbody>
    </table>
  );
};

const TableRow = ({ log }) => {
  return (
    <tr>
      <td class="border border-slate-300  p-4 py-2  text-a-darkgray">
        Department 
      </td>
      <td class="border border-slate-300  p-4 py-2  text-a-darkgray">
        Actions
      </td>
    </tr>
  );
};

export default DepartmentDisplayTable;
