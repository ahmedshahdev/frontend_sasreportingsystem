// React Import
import React, { useEffect, useState } from "react";

// Other Libraries
import { toast } from "react-toastify";

// Global Components
import { MiniLoadingBar } from "../../../Global/Loader/LoadingBar";

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
  const {
    selectedreport,
    selectedreportdate,
    selectedreportshift,
    setselectedreportshift,
  } = report;

  const [report_template, setreport_template] = useState(null);
  const [processingreport_template, setprocessingreport_template] =
    useState(true);

  //
  const [allreports, setallreports] = useState(null);
  const [processingallreports, setprocessingallreports] = useState(true);

  // fetch report if not found so create it based on data
  useEffect(() => {
    // reset it null because on the date change initially it showing the previous report
    setreport_template(null);
    setprocessingallreports(true);
    setallreports(null);

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

  //
  useEffect(() => {
    if (!processingreport_template) {
      // validating if report template should not be null then we need to proceed because on the report creation time we need report_template id
      if (report_template) {
        const data = {
          REPORT_TEMPLATE: report_template._id,
        };

        fetch(
          `${Config["domains"]["serverside"]["development"]}/report/oalreport/fetchall`,
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
                setallreports(data.payloaddata);
                console.log(data.payloaddata);
                setprocessingallreports(false);
              }, 0);
            } else {
              setprocessingallreports(false);
              toast.error(data.alert, { autoClose: 2000 });
            }

            // setTimeout(() => {

            // }, 300);
          });
      }
    }
  }, [processingreport_template, report_template, processingallreports]);

  const handleAddNewRecord = () => {
    if (!processingreport_template) {
      // validating if report template should not be null then we need to proceed because on the report creation time we need report_template id
      if (report_template) {
        setprocessingallreports(true)
        const data = {
          REPORT_TEMPLATE: report_template._id,
        };

        fetch(
          `${Config["domains"]["serverside"]["development"]}/report/oalreport/add`,
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
            setprocessingallreports(false)
            if (data.status === "success") {
              toast.success(data.alert, { autoClose: 2000 });
              setTimeout(() => {
                // setallreports(data.payloaddata);
                // console.log(data.payloaddata);
                // setprocessingallreports(false);
              }, 0);
            } else {
              // setprocessingallreports(false);
              toast.error(data.alert, { autoClose: 2000 });
            }

            // setTimeout(() => {

            // }, 300);
          });
      }
    }
  };

  return (
    <>
      <OAL_REPORT_TEMPLATE
        report_template={{ report_template: report_template }}
        loader={{ processingreport_template, setprocessingreport_template }}
      />
      {processingallreports && !allreports && (
        <div class="border h-20 items-center  border-a-dark2 flex w-full justify-center mt-5">
          <div className="flex items-center gap-5">
            <MiniLoadingBar /> Fetching OAL Reports...{" "}
          </div>
        </div>
      )}
      {!processingallreports && allreports && (
        <button
          onClick={handleAddNewRecord}
          className="  bg-blue-500 hover:bg-blue-700 flex items-center justify-center h-10 w-10 mt-5 rounded-md text-white uppercase text-xs"
        >
          <MdOutlineAddCircleOutline className="text-lg" />
        </button>
      )}
      {!processingallreports && allreports && (
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
              <td class="border border-a-dark2  text-xs uppercase p-1">DEST</td>
              <td class="border border-a-dark2  text-xs uppercase p-1">STD</td>
              <td class="border border-a-dark2  text-xs uppercase p-1">ATD</td>
              <td class="border border-a-dark2  text-xs uppercase p-1">
                TOB ADULT
              </td>
              <td class="border border-a-dark2  text-xs uppercase p-1">
                TOB INF
              </td>
              <td class="border border-a-dark2  text-xs uppercase p-1">Date</td>
              <td class="border border-a-dark2  text-xs uppercase p-1">Time</td>
              <td class="border border-a-dark2  text-xs uppercase p-1">
                Added Date
              </td>
              <td class="border border-a-dark2  text-xs uppercase p-1">
                Added Time
              </td>
            </tr>
          </thead>
          <tbody class="bg1a-gr2">
            {allreports.map((report, index) => {
              return <TableRow report={report} key={"OAL-REPORT-" + index} />;
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table_OAL_REPORT;
