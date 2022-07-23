import React from "react"
import PropTypes from "prop-types"
import Table from "./Table"

const Container = props => {
  return (
    <div>
      <Table {...props} />
    </div>
  )
}

Container.propTypes = {}

export default Container
