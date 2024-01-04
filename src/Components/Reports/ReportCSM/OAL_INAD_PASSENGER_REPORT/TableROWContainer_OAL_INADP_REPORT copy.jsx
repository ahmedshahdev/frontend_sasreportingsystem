// React Import
import React from "react";

// Other Libraries
import { toast } from "react-toastify";
import { useDropzone } from "react-dropzone";

// Global Components

// Components

// Icons
import {BiCloudUpload} from 'react-icons/bi';

// Assets
import Config from "../../../../Json/config.json";

const TableRowContainer_OAL_REPORT = ({ report, key }) => {

  // ! dropzone 
  const { getRootProps, getInputProps } = useDropzone({
    // onDrop,
    multiple: false,
    // accept: 'image/*', // Define the accepted file types
  });

  return (
    <tr>
      <td colSpan={16} className="p-4 border border-a-dark2 uppercase">
        <div className="flex">
          <div  {...getRootProps()}
            className="dropzone cursor-pointer border-a-dark2 border-2 border-dashed rounded flex items-center justify-center p-2 px-12 hover:bg-a-dark gap-2"
          >
            <input {...getInputProps()} name="file" />
            <BiCloudUpload size="40px" className="text-a-pink" />
          </div>
        </div>
      </td>
    </tr>
  );
};

export default TableRowContainer_OAL_REPORT;
