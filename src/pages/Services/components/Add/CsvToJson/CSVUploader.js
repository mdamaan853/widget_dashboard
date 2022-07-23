import React, { CSSProperties, useState } from "react"
import styles from "./csvCss"
import {Button } from "reactstrap"
import { useCSVReader } from "react-papaparse"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"
import DownloadingIcon from "@mui/icons-material/Downloading"
import Dilog from "../../../../../lib/Common/Dialog"
import config from "./config"

export default function CSVReader(props) {
  const { CSVReader } = useCSVReader()
  const data = [
    { q: "asjfhuif", a: "dhdhsadhq" },
    { q: "asjfhuif", a: "dhdhsadhq" },
    { q: "asjfhuif", a: "dhdhsadhq" },
  ]

  const [selected, setSelected] = useState(false)

  const selectPrimary = () => {
    if (selected) {
      setSelected(false)
    } else {
      setSelected(true)
    }
  }
  // const currentPrevData = state.aiChatBot[state.a]

  return (
    <CSVReader
      config={config}
      accept={".csv"}
      onUploadAccepted={results => {
        console.log("---------------------------")
        console.log(results)
        console.log("---------------------------")
      }}
    >
      {({ getRootProps, acceptedFile, ProgressBar, getRemoveFileProps }) => (
        <>
          <div style={styles.csvReader}>
            {/* <button {...getRemoveFileProps()} style={styles.remove}>
              Remove
            </button> */}
            <div
              style={styles.acceptedFile}
              className="border border-dark  d-flex justify-content-between p-1 w-100"
            >
              <p className="fw-bold  m-0 border">
                {props.title}: {acceptedFile && acceptedFile.name}
              </p>
              <div>
                <Button color="primary" outline
                className="mx-1"
                variant='border btn-light p-1 mx-1 border-dark rounded-pill'
                >
                  primary
                </Button>
                <Button
                className="mx-1"
                  type="button"
                  outline
                  {...getRootProps()}
                >
                  upload
                </Button>
                <Button
                className="mx-1"
                  type="button"
                  {...getRootProps()}
                >
                  Preview
                </Button>
                <CheckCircleIcon
                  color={selected ? "primary" : "disabled"}
                  onClick={selectPrimary}
                  titleAccess="click to select primary"
                />
                <DownloadingIcon titleAccess="download" />
              </div>
            </div>
          </div>
          <ProgressBar style={styles.progressBarBackgroundColor} />
        </>
      )}
    </CSVReader>
  )
}
