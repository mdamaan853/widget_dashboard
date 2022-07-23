import React from "react"
import { connect } from "react-redux"
import {
  setCompanyUpdate,
  setCompanyCreate,
  setShowHideCompanyWindow,
  x,
} from "../../actions"
import SelectCompany from "./SelectCompany"
import "./index.scss"

export const Container = props => {
  return (
    <>
      <SelectCompany {...props}/>
    </>
  )
}

const mapStateToProps = state => ({ ...state.companies })

const mapDispatchToProps = {
  setCompanyUpdate,
  setCompanyCreate,
  setShowHideCompanyWindow,
}

export default connect(mapStateToProps, mapDispatchToProps)(Container)
