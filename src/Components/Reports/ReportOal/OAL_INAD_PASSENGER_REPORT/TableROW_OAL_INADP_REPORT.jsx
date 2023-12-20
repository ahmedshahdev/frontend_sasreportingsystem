// React Import
import React, { useState } from "react";

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

const TableRow_OAL_REPORT = ({
  report,
  key,
  updateReportInState,
  handleDeleteReport,
  handleDeleteReportInState,
  index
}) => {
  const handleUpdateReport = (reportId, key, value) => {
    const data = {
      reportId,
      key,
      value,
    };

    fetch(
      `${Config["domains"]["serverside"]["development"]}/report/oalinadpreport/update`,
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
          updateReportInState(reportId, key, value);
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

  const handleDateExceedValidity = (reportDateStr) => {
    // Convert the report date string to a Date object
    const reportDate = new Date(reportDateStr);

    // Current date
    const currentDate = new Date();

    // Calculate the difference in milliseconds
    const dateDifference = currentDate - reportDate;

    // Calculate the difference in days
    const daysDifference = Math.floor(dateDifference / (1000 * 60 * 60 * 24));

    // Check if the difference is greater than or equal to two days
    return daysDifference >= 2;
  };

  return (
    <tr
      key={report._id}
      className={`hover:bg-a-dark bg-black${handleDateExceedValidity(report.DATE) ? " blanking__popup" : ""}`}

    >
      <td class="border border-a-dark2 uppercase  ">
        <div className="flex items-center justify-center gap-1 px-1 w-full h-full cursor-pointer">
          {/* <MdOutlineAddCircleOutline className="text-lg" /> */}
          <MdRemoveCircleOutline
            className="text-lg"
            onClick={() => {
              handleDeleteReport(report._id);
            }}
          />
          {/* <MdOutlineControlPointDuplicate className="text-lg" /> */}{" "}
          {/* Not important to add for now */}
        </div>
      </td>
      <td class="border border-a-dark2 uppercase text-center bg-a-dark">
        {/* <input
          type="text"
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        /> */}
        {index + 1}
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        {/* {console.clear()} */}
        {/* {console.log(report.INITIAL_REPORT_TEMPLATE)} */}
        <input
          type="text"
          defaultValue={report.INITIAL_REPORT_TEMPLATE.SHIFT_MANAGER && report.INITIAL_REPORT_TEMPLATE.SHIFT_MANAGER.NAME}
          // onChange={(e) => {
          //   handleUpdateReport(report._id, "NAME", e.target.value);
          // }}
          disabled
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <select
          className="px-2 w-28  box-border bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1   bg-a-dark"
          defaultValue={report.STATUS}
          onChange={(e) => {
            if (e.target.value === "CLEAR") {
              const confirm = window.confirm(
                "ARE you sure you wana solve this case"
              );

              if (confirm) {
                handleUpdateReport(report._id, "STATUS", e.target.value);
                handleDeleteReportInState(report._id); 
                // 

                // system.log()
              } else {
                e.target.value = report.STATUS
              }
            } else {
              handleUpdateReport(report._id, "STATUS", e.target.value);
            }
          }}
        >
          <option className="bg-a-dark" value="INITIAL">
            Pending {/* Actually the initial is equal pending  */}
          </option>
          <option className="bg-a-dark" value="UNDER_INVESTIGATION">
            UNDER INVESTIGATION
          </option>
          <option className="bg-a-dark" value="CLEAR">
            CLEAR
          </option>
        </select>
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          defaultValue={report.NAME}
          onChange={(e) => {
            handleUpdateReport(report._id, "NAME", e.target.value);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          maxLength={2}
          minLength={2}
          defaultValue={report.AIRLINE}
          onChange={(e) => {
            const uppercaseValue = e.target.value.toUpperCase();
            e.target.value = uppercaseValue;
            handleUpdateReport(report._id, "AIRLINE", uppercaseValue);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          defaultValue={report.DEP_ARRV_FLIGHT}
          onChange={(e) => {
            handleUpdateReport(report._id, "DEP_ARRV_FLIGHT", e.target.value);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          defaultValue={report.SECTOR}
          onChange={(e) => {
            handleUpdateReport(report._id, "SECTOR", e.target.value);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          defaultValue={report.NATIONALITY}
          onChange={(e) => {
            handleUpdateReport(report._id, "NATIONALITY", e.target.value);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          defaultValue={report.PNR}
          onChange={(e) => {
            handleUpdateReport(report._id, "PNR", e.target.value);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          defaultValue={report.REMARKS}
          onChange={(e) => {
            handleUpdateReport(report._id, "REMARKS", e.target.value);
          }}
          className="px-2 w-28  box-border text-white bg-transparent rounded-none border-2 border-transparent focus:border-blue-500 border-solid  outline-none py-1  "
        />
      </td>
      <td class="border border-a-dark2 uppercase">
        <input
          type="text"
          defaultValue={report.ACTION}
          onChange={(e) => {
            handleUpdateReport(report._id, "ACTION", e.target.value);
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
