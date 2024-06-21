import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FileUploader } from "react-drag-drop-files";
import { Button } from 'react-bootstrap';
import { CloudArrowUp, FiletypeCsv } from 'react-bootstrap-icons'; // Importing a Bootstrap icon
import { FreslerTable } from "@fresler/fresler-table"
import FileUploadHeader from "./FileUploadHeader.jsx"
import "@fresler/fresler-table/css"

import { data } from "./data"
import { columns, suggestedColumns } from "./columns.jsx"

function App() {
  const [tableData, setTableData] = useState(data)

  const appendData = (newData) => {
    setTableData([...tableData, ...newData])
  }

  return (
    <>
      <div className='p-3'>
        <h2>Things To Try</h2>
        <h3 style={{ textAlign: 'left' }}>
          1. Download the example csv file <br />
          2. Make edits and drop the csv file and drop it on the "Drop
          spreadsheet here" button
          <br />
          3. Make addtional edits in the cells of the data table
        </h3>
        <div className='row'>
          <FileUploadHeader setData={appendData} />
        </div>
        <div className='row mt-3'>
          <FreslerTable
            initData={tableData}
            initCols={columns}
            updateData={setTableData}
            optionalCols={suggestedColumns}
            initDisplayTableMapping={true}
          />
        </div>
      </div>
    </>
  )
}

export default App
