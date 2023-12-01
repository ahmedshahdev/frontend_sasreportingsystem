// React Import
import React, { useEffect, useState } from "react";

// Other Libraries
import { toast } from "react-toastify";
import { Chart } from "react-google-charts";

// Global Components
import { MiniLoadingBar } from "../../../Global/Loader/LoadingBar";

// Icons
import {
  MdOutlineAddCircleOutline,
  MdRemoveCircleOutline,
  MdOutlineControlPointDuplicate,
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

// Assets
import Config from "../../../../Json/config.json";

const OAL_REPORT_TEMPLATE = ({
  report_template,
  loader,
  report_comments,
  manuc,
  handleUpdateManualComments,
}) => {
  report_template = report_template["report_template"];
  report_comments = report_comments["report_comments"];

  let setManualComments = manuc["setManualComments"];
  let manualComments = manuc["manualComments"];

  handleUpdateManualComments =
    handleUpdateManualComments["handleUpdateManualComments"];
  const { processingreport_template, setprocessingreport_template } = loader;

  // user states
  const [processingfetcing_admslist, setprocessingfetcing_admslist] =
    useState(true);
  const [admlist, setadmlist] = useState([]);

  //   fetch report
  useEffect(() => {
    // designation because on the user table we only want target and select to adm this is shift initiative
    const data = {
      DESIGNATION: "ADM",
    };

    // users view

    fetch(`${Config["domains"]["serverside"]["development"]}/users/view`, {
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
          setadmlist(data.payloaddata);
          setprocessingfetcing_admslist(false);
        } else {
          // setreport_list([]);
          toast.error(data.alert, { autoClose: 2000 });
          setprocessingfetcing_admslist(false);
        }

        setTimeout(() => {
          // setprocessinghandlereport(false);
        }, 500);
      });
  }, []);

  useEffect(() => {
    if (!processingreport_template) {
      if (report_template) {
        if (!processingfetcing_admslist) {
          if (!report_template.SHIFT_MANAGER) {
          }
        }
      }
    }
  }, [processingreport_template, report_template, processingfetcing_admslist]);

  const handleUpdateShiftADM = (adm) => {
    if (adm === "-") {
      return false;
    }

    const data = {
      REPORT_ID: report_template._id,
      updates: {
        SHIFT_MANAGER: adm,
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
          toast.success("ADM Assigned FOR The Selected REPORT ");
          // setprocessingfetcing_admslist(false);
        } else {
          // setreport_list([]);
          toast.error(data.alert, { autoClose: 2000 });
          // setprocessingfetcing_admslist(false);
        }

        setTimeout(() => {
          // setprocessinghandlereport(false);
        }, 500);
      });
  };

  return (
    <div className="bg-a-dark p-4 mt-5 rounded-md">
      <div className="font-bold flex gap-2">
        {!processingreport_template && <TbReportAnalytics size="24px" />}{" "}
        {processingreport_template && <MiniLoadingBar />} Report
      </div>
      <hr class="h-px mt-2 bg-gray-200 border-0 dark:bg-a-dark2"></hr>
      <div className="grid grid-cols-2 gap-3 x-5 w-full   h-auto mt-5">
        <div className="flex items-center gap-2 text-xs">
          Report Name:{" "}
          <span className="font-bold text-xs">
            {!processingreport_template &&
              report_template &&
              report_template.REPORT_ID.name}
            {processingreport_template && <MiniLoadingBar />}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          Report ID:{" "}
          <span className="font-bold text-xs">
            {!processingreport_template &&
              report_template &&
              report_template._id}
            {processingreport_template && <MiniLoadingBar />}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          SHIFT:{" "}
          <span className="font-bold text-xs">
            {!processingreport_template &&
              report_template &&
              report_template.SHIFT}
            {processingreport_template && <MiniLoadingBar />}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          SHIFT Manager:{" "}
          {!processingfetcing_admslist &&
            !processingreport_template &&
            report_template && (
              <select
                type="text"
                className="h-10 rounded-md px-3 text-sm bg-a-dark2 "
                placeholder="Report Category"
                value={
                  !processingfetcing_admslist &&
                  !processingreport_template &&
                  report_template &&
                  report_template.SHIFT_MANAGER &&
                  report_template.SHIFT_MANAGER._id
                }
                onChange={(e) => {
                  handleUpdateShiftADM(e.target.value);
                }}
                disabled={
                  !processingfetcing_admslist &&
                  !processingreport_template &&
                  report_template &&
                  report_template.SHIFT_MANAGER
                }
                // onChange={(e) => {
                //   setselectedreportshift(e.target.value);
                // }}
              >
                {/* {processinghandlereport && <option>Loading...</option>} */}
                <option value="-">-</option>
                {!processingfetcing_admslist &&
                  admlist.map((adm_staff) => {
                    return (
                      <option value={adm_staff._id}>{adm_staff.NAME}</option>
                    );
                  })}
              </select>
            )}
        </div>
        {/* <hr className="dark:bg-a-dark2" /> */}
        <hr class="h-px bg-gray-200 border-0 dark:bg-a-dark2"></hr>
        <hr class="h-px bg-gray-200 border-0 dark:bg-a-dark2"></hr>
        <div className="flex items-center gap-2 text-xs">
          Report DATE:{" "}
          <span className="font-bold text-xs">
            {!processingreport_template &&
              report_template &&
              report_template.DATE.split("T")[0]}
            {processingreport_template && <MiniLoadingBar />}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          System Capture DATE:{" "}
          <span className="font-bold text-xs">
            {!processingreport_template &&
              report_template &&
              report_template.ADDED_DATE.split("T")[0]}
            {processingreport_template && <MiniLoadingBar />}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          Report TIME:{" "}
          <span className="font-bold text-xs">
            {!processingreport_template &&
              report_template &&
              report_template.TIME.split("T")[0]}
            {processingreport_template && <MiniLoadingBar />}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          System Capture TIME:{" "}
          <span className="font-bold text-xs">
            {!processingreport_template &&
              report_template &&
              report_template.ADDED_TIME.split("T")[0]}
            {processingreport_template && <MiniLoadingBar />}
          </span>
        </div>
      </div>
      <div className="font-bold flex gap-2 mt-5">
        {!processingreport_template && <TbReportAnalytics size="24px" />}{" "}
        {processingreport_template && <MiniLoadingBar />} Comments
      </div>
      <hr class="h-px mt-2 bg-gray-200 border-0 dark:bg-a-dark2"></hr>
      <div className="grid grid-cols-2 gap-3 x-5 w-full   h-auto mt-5">
        <div className="flex gap-2 text-xs flex-col">
          <div>
            Total INAD PASSENGERS:{" "}
            <span className="font-bold text-xs">
              {!processingreport_template &&
                report_template &&
                report_comments["total-inad-passengers"]}
              {processingreport_template && <MiniLoadingBar />}
            </span>
          </div>
          {!processingreport_template && report_template && ( <div className="grid grid-cols-8 text-md gap-3">
            {Object.entries(
              report_comments["airlines-records-breakdown-count"]
            ).map(([airlineCode, count]) => (
              <div className="bg-a-dark2 p-3 rounded flex gap-2">
                <p className="">{airlineCode}</p>
                <p>:</p>
                <p>{count}</p>
              </div>
            ))}
          </div> )}
          <Chart
      chartType="PieChart"
      data={[
        ["Task", "Hours per Day"],
        ["Work", 11],
        ["Eat", 2],
        ["Commute", 2],
        ["Watch TV", 2],
        ["Sleep", 7],
      ]}
      width={"100%"}
      height={"400px"}
    />
        </div>
        <div className="flex items-center gap-2 text-xs">
          {/* TOB:{" "} */}
          {!processingreport_template && report_template && (
            <div className="w-full">
              <p className="mb-2">Remarks (Counters and Gates)</p>
              <textarea
                type="text"
                className="h-20 rounded-md w-full p-3 text-sm bg-a-dark2 "
                defaultValue={manualComments["remarks-counters-gates"]}
                onChange={(e) => {
                  setManualComments((prevState) => ({
                    ...prevState,
                    "remarks-counters-gates": e.target.value,
                  }));
                  handleUpdateManualComments();
                }}
                placeholder="Remarks (Counters and Gates):"
              />
            </div>
          )}
          {processingreport_template && <MiniLoadingBar />}
        </div>
        <div className="flex items-center gap-2 text-xs">
          {/* TOB:{" "} */}
          {!processingreport_template && report_template && (
            <div className="w-full">
              <p className="mb-2">
                Counter closures (if any delay in initial closing)!
              </p>
              <textarea
                type="text"
                className="h-20 rounded-md w-full p-3 text-sm bg-a-dark2 "
                placeholder="Counter closures (if any delay in initial closing):"
                defaultValue={manualComments["counter-closure"]}
                onChange={(e) => {
                  setManualComments((prevState) => ({
                    ...prevState,
                    "counter-closure": e.target.value,
                  }));
                  handleUpdateManualComments();
                }}
              />
            </div>
          )}
          {processingreport_template && <MiniLoadingBar />}
        </div>
        <div className="flex items-center gap-2 text-xs">
          {/* TOB:{" "} */}
          {!processingreport_template && report_template && (
            <div className="w-full">
              <p className="mb-2">
                Airport Facilities & Equipment Serviceability{" "}
              </p>
              <textarea
                type="text"
                className="h-20 rounded-md w-full p-3 text-sm bg-a-dark2 "
                placeholder="Airport Facilities & Equipment serviceability:"
                defaultValue={manualComments["airport-facilities"]}
                onChange={(e) => {
                  setManualComments((prevState) => ({
                    ...prevState,
                    "airport-facilities": e.target.value,
                  }));
                  handleUpdateManualComments();
                }}
              />
            </div>
          )}
          {processingreport_template && <MiniLoadingBar />}
        </div>
      </div>
    </div>
  );
};

export default OAL_REPORT_TEMPLATE;
