// React Import
import React, { useEffect } from 'react'

// Other Libraries
import { toast } from "react-toastify";

// Global Components
import { MiniLoadingBar } from "../../Global/Loader/LoadingBar";

// Components

// Icons

// Assets
import Config from "../../../Json/config.json";
import NewReportToolbar from './NewReportToolbar';

const NewReport = () => {
  return (
    <div>

      {/* New Report Toolbar */}
      <NewReportToolbar/>
      
    </div>
  )
}

export default NewReport