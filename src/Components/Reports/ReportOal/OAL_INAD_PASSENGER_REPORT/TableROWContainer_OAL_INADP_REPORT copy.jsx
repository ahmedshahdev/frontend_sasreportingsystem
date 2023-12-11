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

const TableRowContainer_OAL_REPORT = ({ report, key }) => {
  return (
    <tr>
      <td colSpan={16} className="px-5 h-24 border border-a-dark2 uppercase">
        <input type="file" name="" id="" /> Attachments Section For{" "}
        <span className="text-orange-300">"{report._id}"</span> Report
      </td>
    </tr>
  );
};

export default TableRowContainer_OAL_REPORT;
