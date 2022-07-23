import React from "react"
import PropTypes from "prop-types"
import Loader from "react-loader-spinner"
import { primaryColor } from "../ui-contants"

const LoadIndicator = ({ message, isActive }) => {
  if (!isActive) {
    return null
  }
  return (
    <div
      className="load-indicator"
      style={{
        width: "100%",
        height: "100",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "fixed",
        top: '6em',
        zIndex: 1000,
      }}
    >
      <Loader type='ThreeDots'color={primaryColor} height={50} width={50} />
    </div>
  )
}

LoadIndicator.propTypes = {
  message: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
}

export default LoadIndicator
