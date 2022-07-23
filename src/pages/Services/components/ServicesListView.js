import React from "react"
import PropTypes from "prop-types"
import { MDBTable, MDBTableHead, MDBTableBody } from "mdbreact"
// import Edit from "./Add/AddService"
import * as constants from "../constants"
import { Link } from "react-router-dom"

import { servicesStaticInfo } from "./config"
import { groupByObject } from "../../../lib/helper"
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap"

function ServicesListView(props) {
  const {
    services,
    record,
    currentCompnayId,
    [constants.ALL_SERVICES]: allAvialableServices,
    activeTab,
    setActiveTab,
  } = props
  const getActiveTabData = () =>
    groupByObject(record, constants.SERVICE_TYPE)[activeTab]
  const activeTabData = getActiveTabData()
  const loadRowos = () => {
    return Object.keys(activeTabData).map((key, index) => (
      <tr key={key}>
        <th scope="row" className="table-primary">
          {index + 1}
        </th>
        <td>{activeTabData[key][constants.SERVICE_NAME]}</td>
        <td>{activeTabData[key][constants.SERVICE_TECH]}</td>
        <td>{activeTabData[key][constants.SERVICE_LINK_WITH_URL]}</td>
        <td>{activeTabData[key][constants.SERVICE_DEV_MAIL]}</td>
        {/* <td>
          <Link to={`companies/${currentCompnayId}/services/${key}`}>
            View Services
          </Link>
        </td> */}
        <td>
          {/* <Edit record={services[key]} currentRecordId={key} {...props} /> */}
        </td>
      </tr>
    ))
  }
  return (
    <>
      <Nav tabs>
        {Object.entries(allAvialableServices).map(([key, service]) => (
          <NavItem key={service._id}>
            {console.log(key, service)}
            <NavLink
              className={`${activeTab == key ? "active" : ""}`}
              onClick={() => setActiveTab(key)}
            >
              <span className="text-capitalize">{service.name}</span>
            </NavLink>
          </NavItem>
        ))}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId={activeTab}>
          {activeTabData && (
            <MDBTable responsive striped bordered>
              <MDBTableHead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Service Name</th>
                  <th scope="col">Tech Used</th>
                  <th scope="col">Website</th>
                  <th scope="col">DEV Email</th>

                  <th scope="col">Edit </th>
                </tr>
              </MDBTableHead>
              <MDBTableBody>{loadRowos()}</MDBTableBody>
            </MDBTable>
          )|| <h5 className="p-5">No Service Avialbale</h5>}
        </TabPane>
      </TabContent>
    </>
  )
}

ServicesListView.propTypes = {
  services: PropTypes.object.isRequired,
}

export default ServicesListView
