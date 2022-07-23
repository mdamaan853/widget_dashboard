import React from "react"
import PropTypes from "prop-types"
import { Col, Container, Row, Card, CardBody, CardHeader } from "reactstrap"
// import Add from "./Add/AddService"
import ServicesListView from "./ServicesListView"
import { NEW_SERVICE_WINDOW } from "../constants"

function Services(props) {
  return (
    <Card>
      <CardHeader>
        {/* <Add {...props} currentRecordId={NEW_SERVICE_WINDOW} /> */}
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <ServicesListView {...props} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

Services.propTypes = {}

export default Services
