import React from "react"
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap"
import PropTypes from "prop-types"

class Dialog extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Modal
        isOpen={this.props.modal}
        toggle={this.props.toggle}
        className={this.props.className}
      >
        <ModalHeader toggle={this.props.toggle}>{this.props.title}</ModalHeader>
        <ModalBody>{this.props.body}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={this.props.onOkay}>
            {this.props.okayBtnName ?? "OK"}
          </Button>{" "}
          <Button color="secondary" onClick={this.props.toggle}>
            {this.props.canccelName ?? "Cancel"}
          </Button>
        </ModalFooter>
      </Modal>
    )
  }
}

Modal.propTypes = {
  // boolean to control the state of the popover
  modal: PropTypes.bool.isRequired,
  onOkay: PropTypes.func.isRequired,
  toggle: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Dialog
