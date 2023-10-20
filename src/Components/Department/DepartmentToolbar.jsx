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

const DepartmentToolbar = () => {
  // departments stats
  const [departmentsname, setdepartmentsname] = useState("");
  const [processinghandleadddepartment, setprocessinghandleadddepartment] =
    useState(false);

  // add department
  const handleAddDepartment = () => {
    setprocessinghandleadddepartment(true);

    // validation
    if (departmentsname === "") {
      toast.error("Department Name is required!", { autoClose: 2000 });
      setTimeout(() => {
        setprocessinghandleadddepartment(false);
      }, 1000);
      return false;
    }

    const data = {
      departmentsname,
    };

    // fetch
    fetch(`${Config["domains"]["serverside"]["development"]}/departments/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Specify that you're sending JSON data
      },
      body: JSON.stringify(data), // Set the JSON data as the request body
    })
      .then((e) => {
        return e.json();
      })
      .then((data) => {
        if (data.status === "success") {
          toast.success(data.alert, { autoClose: 2000 });
          setdepartmentsname("");
        } else {
          toast.error(data.alert, { autoClose: 2000 });
        }

        setTimeout(() => {
            setprocessinghandleadddepartment(false);
        }, 1000);
      });
  };

  return (
    <div className="bg-zinc-100 py-4  rounded-md flex flex-wrap lg:flex-nowrap gap-3 items-center px-5 w-full   h-auto">
      <input
        type="text"
        className="h-10 rounded-md px-3 text-sm "
        placeholder="Department Name"
        value={departmentsname}
        onChange={(e) => {
          setdepartmentsname(e.target.value);
        }}
      />
      <button
        onClick={handleAddDepartment}
        className="  bg-teal-400 hover:bg-teal-600 px-12 h-10 rounded-md text-white uppercase text-xs"
      >
        {processinghandleadddepartment && <MiniLoadingBar />}
        {!processinghandleadddepartment && "Add"}
      </button>
    </div>
  );
};

export default DepartmentToolbar;
