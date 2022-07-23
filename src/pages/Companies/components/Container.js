import PropTypes from "prop-types"
import React from "react"
import { connect, useDispatch } from "react-redux"
import {
    getAllCompanyUpdate,
  setCompanyCreate,
  setCompanyUpdate,
  setShowHideCompanyWindow,
} from "../actions"
import { companiesStaticInfo } from "./config"
import Companies from "./Companies"
import { setBreadcrumbItems } from "../../../store/actions"

export const Container = props => {
  const dispatch = useDispatch()
  React.useEffect(() => {
    dispatch(getAllCompanyUpdate())
    dispatch(setBreadcrumbItems('Companies',companiesStaticInfo.listViewPage.breadcrumb))
  }, [])
  return (
    <>
      <Companies {...props} />
    </>
  )
}

Container.propTypes = {
  // second: PropTypes.third,
}

const mapStateToProps = state => ({ ...state.companies })

const mapDispatchToProps = {
  setCompanyUpdate,
  setCompanyCreate,
  setShowHideCompanyWindow,
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
