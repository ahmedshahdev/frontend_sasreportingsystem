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
import { TbReportAnalytics } from "react-icons/tb";
import { MiniLoadingBar } from "../../../Global/Loader/LoadingBar";

// Assets

const OAL_REPORT_TEMPLATE = ({ report_template, loader }) => {
  report_template = report_template["report_template"];
  const { processingreport_template, setprocessingreport_template } = loader;

  return (
    <div className="bg-zinc-100 p-4 mt-5 rounded-md">
      <div className="font-bold flex gap-2">
        {!processingreport_template && <TbReportAnalytics size="24px" />}{" "}
        {processingreport_template && <MiniLoadingBar />} Report
      </div>
      <hr className="mt-2" />
      <div className="grid grid-cols-2 gap-3 x-5 w-full   h-auto mt-5">
        <div className="flex items-center gap-2">
          Report Name:{" "}
          <span className="font-bold">
            {!processingreport_template &&
              report_template &&
              report_template.REPORT_ID.name}
              {processingreport_template && <MiniLoadingBar/> }
          </span>
        </div>
        <div  className="flex items-center gap-2">
          Report ID:{" "}
          <span className="font-bold">
            {!processingreport_template &&
              report_template &&
              report_template._id}
              {processingreport_template && <MiniLoadingBar/> }

          </span>
        </div>
        <div className="flex items-center gap-2">
          SHIFT:{" "}
          <span className="font-bold">
            {!processingreport_template &&
              report_template &&
              report_template.SHIFT}
              {processingreport_template && <MiniLoadingBar/> }

          </span>
        </div>
        <div className="flex items-center gap-2">
          SHIFT Manager:{" "}
          <span className="font-bold">
          {!processingreport_template && 'Mr. '}
            {!processingreport_template &&
              report_template &&
              report_template.SHIFT_MANAGER}
              {processingreport_template && <MiniLoadingBar/> }

          </span>
        </div>
        <hr />
        <hr />
        <div className="flex items-center gap-2">
          Report DATE:{" "}
          <span className="font-bold">
            {!processingreport_template &&
              report_template &&
              report_template.DATE.split("T")[0]}
              {processingreport_template && <MiniLoadingBar/> }

          </span>
        </div>
        <div className="flex items-center gap-2">
          System Capture DATE:{" "}
          <span className="font-bold">
            {!processingreport_template &&
              report_template &&
              report_template.ADDED_DATE.split("T")[0]}
              {processingreport_template && <MiniLoadingBar/> }

          </span>
        </div>
        <div className="flex items-center gap-2">
          Report TIME:{" "}
          <span className="font-bold">
            {!processingreport_template &&
              report_template &&
              report_template.TIME.split("T")[0]}
              {processingreport_template && <MiniLoadingBar/> }

          </span>
        </div>
        <div className="flex items-center gap-2">
          System Capture TIME:{" "}
          <span className="font-bold">
            {!processingreport_template &&
              report_template &&
              report_template.ADDED_TIME.split("T")[0]}
              {processingreport_template && <MiniLoadingBar/> }

          </span>
        </div>
      </div>
    </div>
  );
};

export default OAL_REPORT_TEMPLATE;
