import React from "react"
import PropTypes from "prop-types"
import Inbox from "./Inbox"

const Chathistory = props => {
  return (
    <>
    <div className="d-flex flex-wrap justify-content-between gap-4">
      <Inbox title="Today"/>
      <Inbox title="Daily"/>
      <Inbox title="Weekly"/>
      <Inbox title="Monthly"/>
      <Inbox title="Quarterly"/>
      <Inbox title="Yearly"/>
    </div>
    </>
  )
}

export default Chathistory
