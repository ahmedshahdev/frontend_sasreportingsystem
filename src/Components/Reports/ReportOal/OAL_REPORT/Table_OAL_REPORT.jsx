// React Import
import React, { useEffect, useState } from "react";

// Other Libraries
import { toast } from "react-toastify";

// Global Components

// Components
import TableRow from "./TableROW_OAL_REPORT";
import OAL_REPORT_TEMPLATE from "./OAL_REPORT_TEMPLATE";

// Icons
import {
  MdOutlineAddCircleOutline,
  MdRemoveCircleOutline,
  MdOutlineControlPointDuplicate,
} from "react-icons/md";

// Assets
import Config from "../../../../Json/config.json";

const Table_OAL_REPORT = ({ report }) => {
  const { selectedreport, selectedreportdate, selectedreportshift, setselectedreportshift }= report
  //
  const [report_template, setreport_template] = useState(null);

  const [processingreport_template, setprocessingreport_template] =
    useState(true);

  // fetch report if not found so create it based on data
  useEffect(() => {
    if (selectedreport != null) {
      setprocessingreport_template(true);
      const data = {
        REPORT_ID: selectedreport,
        SHIFT: selectedreportshift,
        DATE: selectedreportdate,
      };
      fetch(
        `${Config["domains"]["serverside"]["development"]}/reporttemplate/add`,
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
            setTimeout(() => {
              setprocessingreport_template(false);
              setreport_template(data.payloaddata);
            }, 2000);
          } else {
            toast.error(data.alert, { autoClose: 2000 });
          }

          // setTimeout(() => {

          // }, 300);
        });
    }
  }, [selectedreport, selectedreportdate, selectedreportshift]);

  return (
    <>
      <OAL_REPORT_TEMPLATE
        report_template={{ report_template: report_template }}
        loader={{ processingreport_template, setprocessingreport_template }}
      />
      <table class="border-collapse  w-full  text-xs rounded-lg overflow-x-scroll lg:overflow-x-scroll mt-5">
        <thead className="bg-gradient-to-r from-a-pink to-a-blue text-a-gray">
          <tr className="bg-a-dark">
            <td class="border  border-a-dark2  text-xs uppercase p-1 pl-2">
              {/* for action */}
            </td>
            <td class="border border-a-dark2  text-xs uppercase p-1">
              Added By (STAFF)
            </td>
            <td class="border border-a-dark2  text-xs uppercase p-1">
              FLT NO
            </td>
            <td class="border border-a-dark2  text-xs uppercase p-1">
              DEST
            </td>
            <td class="border border-a-dark2  text-xs uppercase p-1">STD</td>
            <td class="border border-a-dark2  text-xs uppercase p-1">ATD</td>
            <td class="border border-a-dark2  text-xs uppercase p-1">
              TOB ADULT
            </td>
            <td class="border border-a-dark2  text-xs uppercase p-1">
              TOB INF
            </td>
            <td class="border border-a-dark2  text-xs uppercase p-1">
              Date
            </td>
            <td class="border border-a-dark2  text-xs uppercase p-1">
              Time
            </td>
            <td class="border border-a-dark2  text-xs uppercase p-1">
              Added Date
            </td>
            <td class="border border-a-dark2  text-xs uppercase p-1">
              Added Time
            </td>
          </tr> 
        </thead>
        <tbody class="bg1a-gr2">
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
    </>
  );
};

export default Table_OAL_REPORT;
