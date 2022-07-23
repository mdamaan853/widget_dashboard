import React from "react"
import PropTypes from "prop-types"
import Select from "react-select"
import { objectsToSelectList } from "../../../../lib/helper"
import { ADD_NEW_COMAPNY } from "./constant"
import { usePrevious,} from "../../../../lib/hooks"
import {
  InputGroup,
  InputGroupAddon,
  Button,
  Input,
  Card,
  CardBody,
  Row,
  Col,
} from "reactstrap"
import Add from "../Add"
const SelectCompany = props => {
  const {
    companies,
    onComapanyChange,
    selectCompanyValue,
    setShowHideCompanyWindow,
  } = props
  const [isAddingNewCompany, setIsAddingNewComapny] = React.useState(false)

  const pervCompanies = usePrevious(companies)

  React.useEffect(() => {
    var acc={}
    if (pervCompanies && isAddingNewCompany) {
      const foundnewCompany = Object.entries(companies).reduce(
        ([key, value]) => {
          if (!pervCompanies[key]) {
            acc = { key: value }
          }
          return acc
        },
        null
      )
      if (foundnewCompany) {
        setIsAddingNewComapny(false)
        const key = Object.keys(foundnewCompany)[0]
        onComapanyChange({
          value: foundnewCompany[key],
          lable: foundnewCompany[key].name,
        })
      }
    }
  }, [companies])

  const getCompaniesOptions = () => {
    return [
      { label: "Add New Comapay", value: ADD_NEW_COMAPNY },
      ...objectsToSelectList(companies, "name"),
    ]
  }

  console.log(getCompaniesOptions())

  const handleChange = op => {
    if (op.value === ADD_NEW_COMAPNY) {
      setShowHideCompanyWindow(true)
      return
    }
    onComapanyChange(op)
  }

  const handleEdit = ()=>{}
  return (
    <div  style={{height:"300px" , width:"100%"}}>
    <div className="input-group">
      {/* <Add /> */}
      <Select
        {...props}
        options={getCompaniesOptions()}
        value={selectCompanyValue}
        onChange={handleChange}
      />
      <button className="btn btn-outline-secondary" type="button" onClick={handleEdit}>
        <i className="mdi mdi-pencil"></i>
      </button>
    </div>
    </div>
  )
}

SelectCompany.propTypes = {
  selectCompanyValue: PropTypes.object.isRequired,
  onComapanyChange: PropTypes.func.isRequired,
}

export default SelectCompany
