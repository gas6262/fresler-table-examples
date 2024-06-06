import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FileUploader } from "react-drag-drop-files";
import { Button } from 'react-bootstrap';
import { CloudArrowUp, FiletypeCsv } from 'react-bootstrap-icons'; // Importing a Bootstrap icon
import { FreslerTable } from "@fresler/fresler-table"
import "@fresler/fresler-table/css"

import { data } from "./data"
import { columns } from "./columns.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div style={{ width: "85vw" }} className='p-3'>
        <div className='row'>
          <div className='col-12 col-md-6'>
            <FileUploader
              style={{ width: "100%" }}
              label="Drop your contact spreadsheet here."
              onSelect={(file) => { startFileAdd(file); }}
              onDrop={(file) => { startFileAdd(file); }}
              name="file"
              multiple={true}>
              <Button
                style={{ width: "100%" }}
                color='info'
                icon='CloudUpload'
                size="lg"
                isLight>
                <CloudArrowUp />{" "}Drop Spreadsheet here

              </Button>
            </FileUploader>
          </div>
          <div className='col-12 col-md-6'>
            <Button
              style={{ width: "100%" }}
              color='success'
              icon='CloudUpload'
              size="lg"
              isLight>
              <FiletypeCsv />{" "}Download example
            </Button>
          </div>
        </div>
        <div className='row mt-3'>
          <FreslerTable
            initData={data}
            initCols={columns}
            
          />
        </div>
      </div>
    </>
  )
}

export default App
