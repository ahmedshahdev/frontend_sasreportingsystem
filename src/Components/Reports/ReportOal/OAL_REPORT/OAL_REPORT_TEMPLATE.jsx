// React Import
import React, { useEffect, useState } from "react";

// Other Libraries
import { toast } from "react-toastify";

// Global Components
import { MiniLoadingBar } from "../../../Global/Loader/LoadingBar";

// Icons
import {
  MdOutlineAddCircleOutline,
  MdRemoveCircleOutline,
  MdOutlineControlPointDuplicate
} from "react-icons/md";
import { TbReportAnalytics } from "react-icons/tb";

// Assets
import Config from "../../../../Json/config.json";

const OAL_REPORT_TEMPLATE = ({ report_template, loader,report_comments }) => {
  report_template = report_template["report_template"];
  report_comments = report_comments['report_comments']
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
          {/* <span className="font-bold text-xs">
            {!processingreport_template &&
              report_template &&
              report_template.SHIFT_MANAGER}
              {processingreport_template && <MiniLoadingBar/> }

          </span> */}
              {/* {console.log('I am report: ', report_template.SHIFT_MANAGER)} */}
          <select
            type="text"
            className="h-10 rounded-md px-3 text-sm bg-a-dark2 "
            placeholder="Report Category"
            // value={selectedreport && selectedreport.SHIFT}
            // onChange={(e) => {
            //   setselectedreportshift(e.target.value);
            // }}
          >
            {/* {processinghandlereport && <option>Loading...</option>} */}
            <option value="-">-</option>
            {!processingfetcing_admslist &&
              admlist.map((adm_staff) => {
                return <option value={adm_staff._id}>{adm_staff.NAME}</option>;
                console.log(adm_staff);
                console.table(adm_staff);
              })}
          </select>
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
   
        <div className="flex items-center gap-2 text-xs">
          Total FLights{" "}
          <span className="font-bold text-xs">
            {!processingreport_template &&
              report_template &&
              report_comments["total-flights"]}
            {processingreport_template && <MiniLoadingBar />}
          </span>
        </div>
        <div className="flex items-center gap-2 text-xs">
          Total Adults{" "}
          <span className="font-bold text-xs">
            {!processingreport_template &&
              report_template &&
              report_comments["total-adults"].toString()}
            {processingreport_template && <MiniLoadingBar />}
          </span>
        </div>

      
      
      </div>
      
    </div>
  );
};
 
export default OAL_REPORT_TEMPLATE;
 