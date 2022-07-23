import React from "react"
import PropTypes from "prop-types"
import { companiesStaticInfo } from "./config"
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap"
import AvForm from "availity-reactstrap-validation/lib/AvForm"
import AvField from "availity-reactstrap-validation/lib/AvField"
import { COMPANY_ADDRESS, COMPANY_EMAIL, COMPANY_NAME, COMPANY_PHONE, COMPANY_WEBSITE } from "../constants"

function Add(props) {
  const [
    initialState,
    onSave,
    onHide,
    show,
    btnName,
    openModal,
    outline,
    modalTitle,
  ] = companiesStaticInfo.AddCompaines.getInitailStateAndActionFrom(props)
  const [state, SetState] = React.useState({})
  // React.useEffect(() => {
  //   SetState(initialState)
  // }, [initialState])

  const handleValidSubmit=()=>{}

  const handleSubmit = (event, errors, values)=> {
    this.setState({errors, values});
  }
  return (
    <>
      <Button onClick={openModal} color="primary" outline={outline}>
        {btnName}
      </Button>
      <Modal toggle={onHide} isOpen={show}>
        <ModalHeader close>{modalTitle}</ModalHeader>
        <ModalBody>
          <AvForm
            className="form-horizontal mt-4"
            onValidSubmit={(e,er, v) => {
              handleValidSubmit(e,er, v)
            }}
          >
            <div className="mb-3">
              <AvField
                name="companyName"
                label="Company Name"
                defaultValue={initialState[[COMPANY_NAME]]}
                className="form-control"
                placeholder="Enter Company Name"
                type="text"
                required
              />
            </div>
            <div className="mb-3">
              <AvField
                name="website"
                label="Website"
                defaultValue={initialState[[COMPANY_WEBSITE]]}
                className="form-control"
                placeholder="Enter Website"
                type="url"
                required
              />
            </div>
            <div className="mb-3">
              <AvField
                name="email"
                label="Email"
                defaultValue={initialState[[COMPANY_EMAIL]]}
                className="form-control"
                placeholder="Enter email"
                type="email"
                required
              />
            </div>

            <div className="mb-3">
              <AvField
                name="phoneNumber"
                label="phoneNumber"
                defaultValue={initialState[[COMPANY_PHONE]]}
                type="phonenumber"
                required
                placeholder="Enter Phone number"
              />
            </div>
            <div className="mb-3">
              <AvField
                name="address"
                label="Address"
                type="textarea"
                defaultValue={initialState[[COMPANY_ADDRESS]]}
                required
                placeholder="Enter Adderss"
              />
            </div>
          </AvForm>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={onHide}>
            Close
          </Button>
          <Button color="primary">Save</Button>
        </ModalFooter>
      </Modal>
    </>
  )
}

Add.propTypes = {
  currentRecordId: PropTypes.string.isRequired,
  setCompanyUpdate: PropTypes.func.isRequired,
  setCompanyCreate: PropTypes.func.isRequired,
  record: PropTypes.object.isRequired,
  setShowHideCompanyWindow: PropTypes.func.isRequired,
  showCreateUpdateWindow: PropTypes.bool.isRequired,
}

export default Add
