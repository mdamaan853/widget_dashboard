import React from "react"
import PropTypes from "prop-types"
import { Col, Container, Row, Card,CardBody, CardHeader } from "reactstrap"
import Add from "./Add"
import CompaniesListView from "./CompaniesListView"
import { NEW_COMPANY_WINDOW } from "../constants"

function Companies(props) {
  return (
    <Card>
      <CardHeader>
      <Add {...props} currentRecordId={NEW_COMPANY_WINDOW} />
      </CardHeader>
      <CardBody>
        <Row>
          <Col>
            <CompaniesListView {...props} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  )
}

Companies.propTypes = {}

export default Companies
