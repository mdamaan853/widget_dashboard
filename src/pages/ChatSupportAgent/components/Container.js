import React from "react"
import PropTypes from "prop-types"
import ChatSupportAgent from "./AddChatAgent"
import "./style.scss"

const Container = props => {
  return (
    <div>
      <ChatSupportAgent {...props} />
    </div>
  )
}

Container.propTypes = {}

export default Container
