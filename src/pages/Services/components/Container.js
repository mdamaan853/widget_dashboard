import PropTypes from "prop-types"
import React from "react"
import { connect, useDispatch } from "react-redux"
import {
  getAllServiceUpdate,
  setServiceCreate,
  setServiceUpdate,
  setShowHideServiceWindow,
  setActiveTab,
} from "../actions"
import { servicesStaticInfo } from "./config"
import Services from "./Services"
import { setBreadcrumbItems } from "../../../store/actions"
import { useParams, withRouter } from "react-router-dom"
import { capitalizeFirstLetter, groupByObject } from "../../../lib/helper"
import { SERVIVE_LINKED_COMPANY } from "../constants"
import { COMPANY_NAME } from "../../Companies/constants"

export const Container = props => {
  const dispatch = useDispatch()
  const params = useParams(props)
  const { [SERVIVE_LINKED_COMPANY]: currentCompnayId } = params
  const currentCompanyServices = props.services[currentCompnayId]
  const { [COMPANY_NAME]: currentCompanyName } =
    props.companies[currentCompnayId]
  React.useEffect(() => {
    dispatch(getAllServiceUpdate())
    dispatch(
      setBreadcrumbItems(
        `${capitalizeFirstLetter(currentCompanyName)} Services`,
        servicesStaticInfo.listViewPage.getBreadCrumb(
          currentCompanyName,
          currentCompnayId
        )
      )
    )
  }, [])
  return (
    <>
      <Services
        {...props}
        record={currentCompanyServices}
        currentCompnayId={currentCompnayId}
      />
    </>
  )
}

Container.propTypes = {
  // second: PropTypes.third,
}

const mapStateToProps = state => ({
  ...state.services,
  services: groupByObject(state.services.services, SERVIVE_LINKED_COMPANY),
  companies: state.companies.companies,
  //   services: state.services,
})

const mapDispatchToProps = {
  setServiceUpdate,
  setServiceCreate,
  setShowHideServiceWindow,
  setActiveTab,
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Container))
