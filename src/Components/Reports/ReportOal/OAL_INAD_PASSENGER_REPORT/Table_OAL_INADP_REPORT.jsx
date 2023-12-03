// React Import
import React, { useEffect, useState } from "react";

// Other Libraries
import { toast } from "react-toastify";

// Global Components
import { MiniLoadingBar } from "../../../Global/Loader/LoadingBar";

// Components
import TableRow from "./TableROW_OAL_INADP_REPORT";
import OAL_REPORT_TEMPLATE from "./OAL_INADP_REPORT_TEMPLATE";

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

  // comments
  const [report_comments, setreport_comments] = useState({
    "total-inad-passengers": 0,
    "total-adults": 0,
    "total-inf": 0,
    "airlines-records-breakdown-count": {},
  });

  // manual comments
  const [manualComments, setManualComments] = useState({
    "remarks-counters-gates": "",
    "counter-closure": "",
    "airport-facilities": "",
  });

  const [report_template, setreport_template] = useState(null);
  const [processingreport_template, setprocessingreport_template] =
    useState(true);

  //
  const [allreports, setallreports] = useState(null);
  const [processingallreports, setprocessingallreports] = useState(true);

  // visibility
  const [focusReport, setFocusReport] = useState(true);

  // fetch report if not found so create it based on data
  useEffect(() => {
    // reset it null because on the date change initially it showing the previous report
    setreport_template(null);
    setprocessingallreports(true);
    setallreports(null);
    setManualComments({
      "remarks-counters-gates": "",
      "counter-closure": "",
      "airport-facilities": "",
    });

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

  // manual comments handling
  useEffect(() => {
    if (report_template) {
      if (report_template["COMMENTS"].length == 0) {
        handleUpdateManualComments();
      } else {
        setManualComments(report_template["COMMENTS"]);
      }
    }
  }, [report_template]);

  const handleUpdateManualComments = () => {
    const data = {
      REPORT_ID: report_template._id,
      updates: {
        COMMENTS: manualComments,
      },
    };
    fetch(
      `${Config["domains"]["serverside"]["development"]}/reporttemplate/update`,
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
          toast.success("Comments updated successfully");
          // setprocessingfetcing_admslist(false);
        } else {
          // setreport_list([]);
          toast.error(data.alert, { autoClose: 2000 });
          // setprocessingfetcing_admslist(false);
        }
      });
  };

  //
  useEffect(() => {
    if (!processingreport_template) {
      // validating if report template should not be null then we need to proceed because on the report creation time we need report_template id
      if (report_template) {
        const data = {
          REPORT_TEMPLATE: report_template._id,
        };

        fetch(
          `${Config["domains"]["serverside"]["development"]}/report/oalinadpreport/fetchall`,
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
  }, [processingreport_template, report_template]);

  //
  const handleAddNewRecord = () => {
    if (!processingreport_template) {
      // validating if report template should not be null then we need to proceed because on the report creation time we need report_template id
      if (report_template) {
        const data = {
          REPORT_TEMPLATE: report_template._id,
        };

        fetch(
          `${Config["domains"]["serverside"]["development"]}/report/oalinadpreport/add`,
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
                setallreports((prevReports) => [
                  ...prevReports,
                  data.payloaddata,
                ]);
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

  // handle delete report
  const handleDeleteReport = (reportID) => {
    // handle processing once template found in the useState
    if (!processingreport_template) {
      // validating if report template should not be null then we need to proceed because on the report creation time we need report_template id
      if (report_template) {
        const data = {
          report_id: reportID,
        };

        const confirm_for_delete = window.confirm(
          "Are you sure you want to delete this report?"
        );
        if (!confirm_for_delete) {
          return false;
        }

        // return false;

        fetch(
          `${Config["domains"]["serverside"]["development"]}/report/oalinadpreport/delete`,
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
              setallreports((prevReports) => {
                return prevReports.filter(
                  (report) => report._id !== reportID
                );
              });
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

  useEffect(() => {
    if (!processingreport_template) {
      // validating if report template should not be null then we need to proceed because on the report creation time we need report_template id
      if (report_template) {
        // ! Count total Flights
        setreport_comments((comments) => {
          return { ...comments, "total-inad-passengers": allreports.length };
        });

        // ! COUNT RECORDS BY AIRLINE
        // Create an object to store the counts
        const airlineCounts = {};

        // Iterate through the flights and count occurrences
        allreports.forEach((report) => {
          const airlineCode = report.AIRLINE.toUpperCase(); // Ensure case-insensitive matching
          if (airlineCode != "") {
            if (airlineCounts[airlineCode]) {
              // If the airline code already exists, increment the count
              airlineCounts[airlineCode]++;
            } else {
              // If the airline code doesn't exist, initialize the count to 1
              airlineCounts[airlineCode] = 1;
            }
          }
        });

        setreport_comments((comments) => {
          return { ...comments, "airlines-records-breakdown-count": airlineCounts };
        });
      }
    }
  }, [allreports]);

  // this is unprofessional way to do that but will replace it letter
  const updateReportInState = (reportId, key, value) => {
    setallreports((prevReports) => {
      return prevReports.map((report) => {
        // Check if the current report has the matching _id
        if (report._id === reportId) {
          // Update the specified key with the new value
          return {
            ...report,
            [key]: value,
          };
        }
        return report;
      });
    });
  };

  return (
    <>
      {!processingallreports && allreports && (
        <button
          onClick={() => setFocusReport(!focusReport)}
          className="  bg-blue-500 hover:bg-blue-700 flex items-center justify-center h-10 px-2 mt-5 rounded-md text-white uppercase text-xs"
        >
          {focusReport ? "Focus On Report" : "View All"}
        </button>
      )}
      {focusReport && (
        <OAL_REPORT_TEMPLATE
          report_template={{ report_template: report_template }}
          report_comments={{ report_comments: report_comments }}
          manuc={{
            setManualComments: setManualComments,
            manualComments: manualComments,
          }}
          handleUpdateManualComments={{
            handleUpdateManualComments: handleUpdateManualComments,
          }}
          loader={{ processingreport_template, setprocessingreport_template }}
        />
      )}
      {processingallreports && !allreports && (
        <div class="border h-20 items-center  border-a-dark2 flex w-full justify-center mt-5">
          <div className="flex items-center gap-5">
            <MiniLoadingBar /> Fetching OAL Reports...{" "}
          </div>
        </div>
      )}
      <div className="flex gap-5">
        {!processingallreports && allreports && (
          <button
            onClick={handleAddNewRecord}
            className="  bg-blue-500 hover:bg-blue-700 flex items-center justify-center h-10 w-10 mt-5 rounded-md text-white uppercase text-xs"
          >
            <MdOutlineAddCircleOutline className="text-lg" />
          </button>
        )}
      </div>
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
              <td class="border border-a-dark2  text-xs uppercase p-1">STATUS</td>
              <td class="border border-a-dark2  text-xs uppercase p-1">NAME</td>
              <td class="border border-a-dark2  text-xs uppercase p-1">
                AIRLINE
              </td>
              <td class="border border-a-dark2  text-xs uppercase p-1">
                DEP/ARRV FLIGHTS
              </td>
              <td class="border border-a-dark2  text-xs uppercase p-1">
                Sector
              </td>
              <td class="border border-a-dark2  text-xs uppercase p-1">
                Nationality
              </td>
              <td class="border border-a-dark2  text-xs uppercase p-1">PNR</td>
              <td class="border border-a-dark2  text-xs uppercase p-1">
                REMARKS
              </td>
              <td class="border border-a-dark2  text-xs uppercase p-1">
                ACTIONS
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
              return (
                <TableRow
                  report={report}
                  updateReportInState={updateReportInState}
                  handleDeleteReport={handleDeleteReport}
                  key={"OAL-REPORT-" + index}
                />
              );
            })}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Table_OAL_REPORT;
