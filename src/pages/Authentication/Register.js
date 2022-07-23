import PropTypes from "prop-types"
import React, { useEffect } from "react"
import MetaTags from "react-meta-tags"
import { Row, Col, CardBody, Card, Alert, Container } from "reactstrap"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"

// action
import { registerUser, apiError, registerUserFailed } from "../../store/actions"

// Redux
import { connect } from "react-redux"
import { Link } from "react-router-dom"

// import images
import logoLightPng from "../../assets/images/logo-light.png"
import logoDark from "../../assets/images/logo-dark.png"

const Register = props => {
  // handleValidSubmit
  const handleValidSubmit = (event, values) => {
    props.registerUser(values)
  }

  useEffect(() => {
    props.apiError("")
  }, [])

  return (
    <React.Fragment>
      <MetaTags>
        <title>Register | Lexa - Responsive Bootstrap 5 Admin Dashboard</title>
      </MetaTags>

      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={8} xl={6}>
              <Card className="overflow-hidden">
                <CardBody className="pt-0">
                  <h3 className="text-center mt-5 mb-4">
                    <Link to="/" className="d-block auth-logo">
                      <img
                        src={logoDark}
                        alt=""
                        height="30"
                        className="auth-logo-dark"
                      />
                      <img
                        src={logoLightPng}
                        alt=""
                        height="30"
                        className="auth-logo-light"
                      />
                    </Link>
                  </h3>
                  <div className="p-3">
                    <h4 className="text-muted font-size-18 mb-1 text-center">
                      Free Register
                    </h4>
                    <p className="text-muted text-center">
                      Get your free Lexa account now.
                    </p>
                    <AvForm
                      className="form-horizontal mt-4"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                        // history.push("/verify")
                      }}
                    >
                      {props.user && props.user ? (
                        <Alert color="success">
                          Register User Successfully
                        </Alert>
                      ) : null}

                      {props.registrationError && props.registrationError ? (
                        <Alert color="danger">{props.registrationError}</Alert>
                      ) : null}
                      <Row>
                        <Col sm={12} md={6}>
                          <div className="mb-3">
                            <AvField
                              name="first_name"
                              label="FirstName"
                              type="text"
                              required
                              placeholder="Enter FirstName"
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className="mb-3">
                            <AvField
                              name="last_name"
                              label="LastName"
                              type="text"
                              required
                              placeholder="Enter LastName"
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={12}>
                          <div className="mb-3">
                            <AvField
                              name="company"
                              label="company"
                              type="text"
                              required
                              placeholder="Enter Company"
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={12}>
                          <div className="mb-3">
                            <AvField
                              name="website"
                              label="Website"
                              type="url"
                              required
                              placeholder="Enter website"
                              validate={{
                                required: {
                                  value: false,
                                  errorMessage: "Please enter a name",
                                },
                                pattern: {
                                  value: `/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i`,
                                  errorMessage:
                                    "Your name must be composed only with letter and numbers",
                                },
                                minLength: {
                                  value: 6,
                                  errorMessage:
                                    "Your name must be between 6 and 16 characters",
                                },
                              }}
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className="mb-3">
                            <AvField
                              id="email"
                              name="email"
                              label="Email"
                              className="form-control"
                              placeholder="Enter email"
                              type="email"
                              required
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className="mb-3">
                            <AvField
                              id="phone"
                              name="phone"
                              label="Phone"
                              className="form-control"
                              placeholder="Enter Phone "
                              type="tel"
                              required
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className="mb-3">
                            <AvField
                              id="pswd"
                              name="password"
                              label="Password"
                              className="form-control"
                              placeholder="Enter Password"
                              type="password"
                              required
                            />
                          </div>
                        </Col>
                        <Col sm={12} md={6}>
                          <div className="mb-3">
                            <AvField
                              id="verifypassword"
                              name="verifyPassword"
                              label="Verify Password"
                              className="form-control"
                              placeholder="Verify password"
                              type="password"
                              required
                            />
                          </div>
                        </Col>
                      </Row>

                      <div className="mb-3 row mt-4">
                        <div className="col-12 text-end">
                          <button
                            className="btn btn-primary w-md waves-effect waves-light"
                            type="submit"
                          >
                            Register
                          </button>
                        </div>
                      </div>

                      <div className="mb-0 row">
                        <div className="col-12 mt-4">
                          <p className="text-muted mb-0 font-size-14">
                            By registering you agree to the Lexa{" "}
                            <Link to="#" className="text-primary">
                              Terms of Use
                            </Link>
                          </p>
                        </div>
                      </div>
                    </AvForm>
                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>
                  Already have an account ?{" "}
                  <Link to="/login" className="text-primary">
                    {" "}
                    Login
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Lexa{" "}
                  <span className="d-none d-sm-inline-block">
                    {" "}
                    - Crafted with <i className="mdi mdi-heart text-danger"></i>{" "}
                    by Themesbrand.
                  </span>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

Register.propTypes = {
  registerUser: PropTypes.func,
  registerUserFailed: PropTypes.func,
  registrationError: PropTypes.any,
  user: PropTypes.any,
}

const mapStatetoProps = state => {
  const { user, registrationError, loading } = state.Account
  return { user, registrationError, loading }
}

export default connect(mapStatetoProps, {
  registerUser,
  apiError,
  registerUserFailed,
})(Register)
