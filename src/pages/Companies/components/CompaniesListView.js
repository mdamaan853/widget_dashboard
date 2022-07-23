import React from "react"
import PropTypes from "prop-types"
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact"
import Edit from "./Add"
import {
  COMPANY_ADDRESS,
  COMPANY_EMAIL,
  COMPANY_ID,
  COMPANY_NAME,
  COMPANY_WEBSITE,
} from "../constants"
import { Link } from "react-router-dom"
import { Badge } from "reactstrap"

function CompaniesListView(props) {
  const { companies } = props
  const loadRowos = () => {
    return Object.keys(companies).map((key, index) => (
      <tr key={key}>
        <th scope="row" className="table-primary">
          {index + 1}
        </th>
        <td>{companies[key][COMPANY_NAME]}</td>
        <td>{companies[key][COMPANY_WEBSITE]}</td>
        <td>{companies[key][COMPANY_EMAIL]}</td>
        <td>{companies[key][COMPANY_ADDRESS]}</td>
        <td>
          <Link to={`companies/${key}/services`}>
              View Services
          </Link>
        </td>
        <td>
          <Edit record={companies[key]} currentRecordId={key} />
        </td>
      </tr>
    ))
  }
  return (
    <>
      <MDBTable responsive striped bordered>
        <MDBTableHead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company Name</th>
            <th scope="col">Website</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col"> View Services </th>
            <th scope="col">Edit </th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>{loadRowos()}</MDBTableBody>
      </MDBTable>
    </>
  )
}

CompaniesListView.propTypes = {
  companies: PropTypes.object.isRequired,
}

export default CompaniesListView
