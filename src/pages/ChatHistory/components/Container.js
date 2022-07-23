import React from "react"
import PropTypes from "prop-types"
import Chathistory from "./Chathistory"
import "./style.scss"

const Container = props => {
  return (
    <div>
      <Chathistory {...props} />
    </div>
  )
}

Container.propTypes = {}

export default Container
