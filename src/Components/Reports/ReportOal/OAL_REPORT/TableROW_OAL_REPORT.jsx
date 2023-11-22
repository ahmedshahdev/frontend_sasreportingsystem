// React Import
import React from "react";

// Other Libraries
import { toast } from "react-toastify";

// Global Components

// Components

// Icons
import {
  MdOutlineAddCircleOutline,
  MdRemoveCircleOutline,
  MdOutlineControlPointDuplicate,
} from "react-icons/md";

// Assets
import Config from "../../../../Json/config.json";

const TableRow_OAL_REPORT = ({ report, key, updateReportInState }) => {

  

  const handleUpdateReport = (reportId, key, value) => {
    const data = {
      reportId,
      key,
      value,
    };

    fetch(
      `${Config["domains"]["serverside"]["development"]}/report/oalreport/update`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify that you're sending JSON data
        }, 
        body: JSON.stringify(data), // Set the JSON data as the request body
      }
    )
      .then((e) => {
        return e.json();
      })
      .then((data) => {
        if (data.status === "success") {
          toast.success(data.alert, { autoClose: 2000 });
          updateReportInState(reportId, key, value)
          // setTimeout(() => {
          //   toast.error(data.alert, { autoClose: 2000 });

          //   // setallreports(data.payloaddata);
          //   // console.log(data.payloaddata);
          //   // setprocessingallreports(false);
          // }, 0);
        } else {
          // setprocessingallreports(false);
          toast.error(data.alert, { autoClose: 2000 });
        }

        // setTimeout(() => {

        // }, 300);
      });
  };

  return (
    <tr key={key}>
      <td class="border border-a-dark2 uppercase  ">
        <div className="flex items-center justify-center gap-1 px-1 w-full h-full cursor-pointer">
          {/* <MdOutlineAddCircleOutline className="text-lg" /> */}
          <MdRemoveCircleOutline className="text-lg" />
          {/* <MdOutlineControlPointDuplicate className="text-lg" /> */}{" "}
          {/* Not important to add for now */}
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
          defaultValue={report.FLT_NO}
          onChange={(e) => {
            handleUpdateReport(report._id, "FLT_NO", e.target.value);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          defaultValue={report.DEST}
          onChange={(e) => {
            handleUpdateReport(report._id, "DEST", e.target.value);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        {/* {report.STD} */}
        <input
          type="date"
          defaultValue={new Date(report.STD).toISOString().split("T")[0]}
          onChange={(e) => {
            handleUpdateReport(report._id, "STD", e.target.value);
          }}
          className="px-2 w-24  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="date"
          defaultValue={new Date(report.ATD).toISOString().split("T")[0]}
          onChange={(e) => {
            handleUpdateReport(report._id, "ATD", e.target.value);
          }}
          className="px-2 w-24  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          defaultValue={report.TOB_ADULT.toString()}
          onChange={(e) => {
            handleUpdateReport(
              report._id,
              "TOB_ADULT",
              parseInt(e.target.value)
            );
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          defaultValue={report.TOB_INF.toString()}
          onChange={(e) => {
            handleUpdateReport(report._id, "TOB_INF", parseInt(e.target.value));
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          defaultValue={new Date(report.DATE).toISOString().split("T")[0]}
          type="date"
          onChange={(e) => {
            handleUpdateReport(report._id, "DATE", e.target.value);
          }}
          className="px-2 w-24  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        {/* {report.TIME} */}
        <input
          type="time"
          defaultValue={report.TIME}
          // defaultValue={new Date(report.TIME).toISOString().split('T')[0]}
          onChange={(e) => {
            handleUpdateReport(report._id, "TIME", e.target.value);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="date"
          defaultValue={new Date(report.ADDED_DATE).toISOString().split("T")[0]}
          onChange={(e) => {
            handleUpdateReport(report._id, "ADDED_DATE", e.target.value);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="time"
          defaultValue={report.ADDED_TIME}
          // defaultValue={new Date(report.TIME).toISOString().split('T')[0]}
          onChange={(e) => {
            handleUpdateReport(report._id, "ADDED_TIME", e.target.value);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
    </tr>
  );
};

export default TableRow_OAL_REPORT;
