import "@fresler/fresler-table/css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { CloudArrowUp, FiletypeCsv } from 'react-bootstrap-icons'; // Importing a Bootstrap icon
import { FileUploader } from "react-drag-drop-files";
import './App.css';
// import customers from './customers.csv'; // Adjust the path as necessary

function FileUploadHeader({
    setData
}) {

    const downloadFile = () => {
        fetch(customers)
            .then(response => response.blob())
            .then(blob => {
                const url = window.URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = 'example.csv';
                document.body.appendChild(a);
                a.click();
                a.remove();
                window.URL.revokeObjectURL(url);
            })
            .catch(error => console.error('There was a problem with the fetch operation:', error));
    };

    return (
        <>
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
                    variant='success'
                    size="lg"
                    onClick={downloadFile}
                >
                    <FiletypeCsv />{" "}Download example
                </Button>
            </div>
        </>
    )
}

export default FileUploadHeader
