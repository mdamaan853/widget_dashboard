import React from "react"
import PropTypes from "prop-types"
import { MDBTable, MDBTableHead } from "mdbreact"

const DataPreview = props => {
  const { previewRows } = props

  const loadRowos = () => {
    return Object.keys(previewRows).map((key, index) => (
      <tr key={key}>
        <th scope="row" className="table-primary">
          {index + 1}
        </th>
        <td>{previewRows.q}</td>
      </tr>
    ))
  }
  return (
    <MDBTable responsive striped bordered>
      <MDBTableHead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Question</th>
          <th scope="col">Answer</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>{loadRowos()}</MDBTableBody>
    </MDBTable>
  )
}

DataPreview.propTypes = {
  previewRows: PropTypes.array.isRequired,
}

export default DataPreview
