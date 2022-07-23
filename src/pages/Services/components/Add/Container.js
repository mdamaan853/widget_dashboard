import React from "react"
import PropTypes from "prop-types"
import AddService from "./AddService"

const Container = props => {
  return (
    <div>
      <AddService {...props} />
    </div>
  )
}

Container.propTypes = {}

export default Container
