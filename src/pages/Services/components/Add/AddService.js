import React, { useReducer } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import "./services.scss"
import CSVUploader from "./CsvToJson/CSVUploader"
import initialState from "./initialState"
import * as actionTypes from "./actionTypes"
import reducer from "./reducer"
import StepForm from "./StepFrom"

function AddService(props) {
  const [state, dispatch] = useReducer(reducer, initialState)

  const updateField = React.useCallback(
    fieldName => e => {
      dispatch({
        type: actionTypes.SET_FIELD_UPDATE,
        fieldName,
        value: e.target.value,
      })
    },
    []
  )
  const handleUploadData = React.useCallback(
    () => (version, data) => {
      dispatch({
        type: actionTypes.SET_AI_BOT_DATA_WITH_VERSION,
        version,
        data,
      })
    },
    []
  )
  const handleSubmit = () => {}
  return (
    <>
      <StepForm
        formState={state}
        updateField={updateField}
        handleUploadData={handleUploadData}
      />
    </>
  )
}

AddService.propTypes = {}

export default withRouter(AddService)
