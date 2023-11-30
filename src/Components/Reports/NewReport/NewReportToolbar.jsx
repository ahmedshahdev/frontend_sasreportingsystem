// React Import
import React, { useState, useEffect } from "react";

// Other Libraries
import { toast } from "react-toastify";

// Global Components
import { MiniLoadingBar } from "../../Global/Loader/LoadingBar";

// ? Components
// Reports
import ABY_REPORT from "../ReportAby/ABY_REPORT/ABY_REPORT";
import DNB_PAX_REPORT from "../ReportAby/DNB_PAX_REPORT/DNB_PAX_REPORT";
import RANDOM_CHECK_FORMAT from "../ReportAby/RANDOM_CHECK_FORMAT_REPORT/RANDOM_CHECK_FORMAT_REPORT";
import REFUSAL_REPORT from "../ReportAby/REFUSAL_REPORT/REFUSAL_REPORT";
import CREDIT_CARD_REPORT from "../ReportHala/CREDIT_CARD_REPORT/CREDIT_CARD_REPORT";
import EBT_XSUMMARY_REPORT from "../ReportHala/EBT_XSUMMARY_REPORT/EBT_XSUMMARY_REPORT";
import HALA_XSUMMARY_REPORT from "../ReportHala/HALA_XSUMMARY_REPORT/HALA_XSUMMARY_REPORT";
import OAL_REPORT from "../ReportOal/OAL_REPORT/OAL_REPORT";
import QCI_AND_PRINTING_SALES_REPORT from "../ReportReservation/QCI_AND_PRINTING_SALES_REPORT/QCI_AND_PRINTING_SALES_REPORT";
import SEAT_SALES_REPORT from "../ReportReservation/SEAT_SALES_REPORT/SEAT_SALES_REPORT.jsx";
import TICKET_SALES_REPORT from "../ReportReservation/TICKET_SALES_REPORT/TICKET_SALES_REPORT";
import INAD_ABY_REPORT from "../ReportVct/INAD_ABY_REPORT/INAD_ABY_REPORT";
import INAD_OAL_REPORT from "../ReportVct/INAD_OAL_REPORT/INAD_OAL_REPORT";
import INTERCEPTED_REPORT from "../ReportVct/INTERCEPTED_REPORT/INTERCEPTED_REPORT";
import ShiftCsm_REPORT from "../ReportCSM/CSM_SHIFT_REPORT/CSM_SHIFT_REPORT";
import OAL_INADP_REPORT from  "../ReportOal/OAL_INAD_PASSENGER_REPORT/OAL_INADP_REPORT.jsx"

// Icons

// Assets
import Config from "../../../Json/config.json";

const NewReportToolbar = () => {

  // report category stats
  const [reportcategory_list, setreportcategory_list] = useState([]);
  const [processinghandlereportcategory, setprocessinghandlereportcategory] =
    useState(true);
  const [selectedreportcategory, setselectedreportcategory] = useState(null);

  // report state
  const [report_list, setreport_list] = useState([]);
  const [processinghandlereport, setprocessinghandlereport] = useState(false);
  const [selectedreport, setselectedreport] = useState(null);


  const [selectedreportdate, setselectedreportdate] = useState(
    new Date().toISOString().split("T")[0]
  );
  const [selectedreportshift, setselectedreportshift] = useState('MORNING');

  //
  const report_manual_list = {
    "6532acc67ce4885d88b9bab3": {
      report_name: "Inad ABY Report",
      component: <INAD_ABY_REPORT />,
    },
    "6532ace37ce4885d88b9bab5": {
      report_name: "Intercepted Report",
      component: <INTERCEPTED_REPORT />,
    },
    "6532acee7ce4885d88b9bab7": {
      report_name: "INAD OAL Report",
      component: <INAD_OAL_REPORT />,
    },
    "6532ad167ce4885d88b9bab9": {
      report_name: "EBT X-summary Report",
      component: <EBT_XSUMMARY_REPORT />,
    },
    "6532ad2c7ce4885d88b9babb": {
      report_name: "Hala X-Summary Report",
      component: <HALA_XSUMMARY_REPORT />,
    },
    "6532ad427ce4885d88b9babd": {
      report_name: "Credit Card Report",
      component: <CREDIT_CARD_REPORT />,
    },
    "6532ad977ce4885d88b9babf": {
      report_name: "Refusal",
      component: <REFUSAL_REPORT />,
    },
    "6532ad9d7ce4885d88b9bac1": {
      report_name: "Aby Report",
      component: <ABY_REPORT />,
    },
    "6532ada67ce4885d88b9bac3": {
      report_name: "DNB PAX",
      component: <DNB_PAX_REPORT />,
    },
    "6532adb67ce4885d88b9bac5": {
      report_name: "Random Check Format",
      component: <RANDOM_CHECK_FORMAT />,
    },
    "6532adcb7ce4885d88b9bac7": {
      report_name: "Ticket Sales",
      component: <TICKET_SALES_REPORT />,
    },
    "6532adf37ce4885d88b9bac9": {
      report_name: "QCI & Printing Sales",
      component: <QCI_AND_PRINTING_SALES_REPORT />,
    },
    "6532adfc7ce4885d88b9bacb": {
      report_name: "Seat Sales",
      component: <SEAT_SALES_REPORT />,
    },
    "6532ae1b7ce4885d88b9bacd": {
      report_name: "OAL Report",
      component: (
        <OAL_REPORT
          report={{
            selectedreport: selectedreport,
            selectedreportdate: selectedreportdate,
            selectedreportshift: selectedreportshift,
            setselectedreportshift: setselectedreportshift
          }}
        />
      ),
    },
    "655e830484b1bb397f13ac30": {
      report_name: "OAL INAD Passenger Report",
      component: (
        <OAL_INADP_REPORT
          report={{
            selectedreport: selectedreport,
            selectedreportdate: selectedreportdate,
            selectedreportshift: selectedreportshift,
            setselectedreportshift: setselectedreportshift
          }}
        />
      ),
    },
    "6534593abeecf3fbb5d1730a": {
      report_name: "CSM Shift Report",
      component: <ShiftCsm_REPORT />,
    },
  };

  const SelectedReportComponent = report_manual_list[selectedreport]?.component;

  // fetch report category
  useEffect(() => {
    fetch(
      `${Config["domains"]["serverside"]["development"]}/reportcategory/view`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json", // Specify that you're sending JSON data
        },
        // body: JSON.stringify(data), // Set the JSON data as the request body
      }
    )
      .then((e) => {
        return e.json();
      })
      .then((data) => {
        if (data.status === "success") {
          setreportcategory_list(data.payloaddata);

          // by default 1st report category will be set here
          if (data.payloaddata.length > 0) {
            setselectedreportcategory(data.payloaddata[0]);
            setprocessinghandlereport(true);
          }
        } else {
          toast.error(data.alert, { autoClose: 2000 });
        }

        setTimeout(() => {
          setprocessinghandlereportcategory(false);
        }, 300);
      });
  }, []);

  //   fetch report
  useEffect(() => {
    if (selectedreportcategory !== null) {
      const data = { report_category: selectedreportcategory };

      fetch(`${Config["domains"]["serverside"]["development"]}/report/view`, {
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
            setreport_list(data.payloaddata);
            setselectedreport(data.payloaddata[0]._id);
          } else {
            setreport_list([]);
            toast.error(data.alert, { autoClose: 2000 });
          }

          setTimeout(() => {
            setprocessinghandlereport(false);
          }, 500);
        });
    }
  }, [selectedreportcategory]);

  return (
    <div>
      {/* New Report Toolbar */}
      <div className="bg-a-dark py-4  rounded-md flex flex-wrap lg:flex-nowrap gap-3 items-center px-5 w-full   h-auto">
        {/*  */}
        <select
          type="text"
          className="h-10 rounded-md px-3 text-sm bg-a-dark2 "
          placeholder="Report Category"
          value={selectedreportcategory}
          onChange={(e) => {
            setselectedreportcategory(e.target.value);
            setprocessinghandlereport(true);
            setselectedreport("");
            // setselectedreport(report_list.keys[0]);
          }}
        >
          {!processinghandlereportcategory &&
            reportcategory_list.map((singlereportcategory, index) => {
              return (
                <option value={singlereportcategory._id}>
                  {singlereportcategory.name}
                </option>
              );
            })}
          {processinghandlereportcategory && <option>Loading...</option>}
        </select>

        <select
          type="text"
          className="h-10 rounded-md px-3 text-sm  bg-a-dark2 "
          placeholder="Report Category"
          value={selectedreport}
          onChange={(e) => {
            setselectedreport(e.target.value);
          }}
        >
          {!processinghandlereport &&
            report_list.map((singlereport, index) => {
              return (
                <option value={singlereport._id}>{singlereport.name}</option>
              );
            })}
          {processinghandlereport && <option>Loading...</option>}
        </select>

        <input
          value={selectedreportdate}
          onChange={(e) => setselectedreportdate(e.target.value)}
          type="date"
          className="h-10 rounded-md px-3 text-sm  bg-a-dark2 "
        />

        {/* shift */}
        <select
          type="text"
          className="h-10 rounded-md px-3 text-sm  bg-a-dark2 "
          placeholder="Report Category"
          value={selectedreport && selectedreport.SHIFT}
          onChange={(e) => {
            setselectedreportshift(e.target.value);
          }}
        >
          {processinghandlereport && <option>Loading...</option>}
          <option value="MORNING">Morning</option>
          <option value="NIGHT">Night</option>
        </select>

        {false && (
          <button
            // onClick={handleAddDepartment}
            className="  bg-blue-500 hover:bg-teal-600 px-12 h-10 rounded-md text-white uppercase text-xs"
          >
            {/* {processinghandleadddepartment && <MiniLoadingBar />}
        {!processinghandleadddepartment && "Add"} */}
          </button>
        )}
      </div>

      <div className="mt-5"></div>

      {selectedreport && SelectedReportComponent}
    </div>
  );
};

export default NewReportToolbar;
