import React from "react"
import PropTypes from "prop-types"
import Layout from "./layout"

const Container = props => {
  return (
    <div>
      <Layout {...props} />
    </div>
  )
}

Container.propTypes = {}

export default Container
