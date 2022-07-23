import React,{useState} from "react"
import PropTypes from "prop-types"
import AvField from "availity-reactstrap-validation/lib/AvField"
import { AvForm, AvGroup, AvInput, AvRadio, AvRadioGroup } from 'availity-reactstrap-validation';
import { Button, Label, FormGroup } from 'reactstrap';

const Chathistory = props => {
    const [AgentData,setAgentData]=useState({
        email:'',
        password:'',
        otp:''
      })
    
      const handleValidSubmit=()=>{}

      const handleChange = (e) => {
        let name=e.target.name;
        let value=e.target.value;
        console.log(name)
        console.log(value)
        setAgentData(previousState => {
            return { ...previousState,[name]:value }
          });
          console.log(AgentData)
    }
    return (
        <>
            <div className="d-flex justify-content-center">
                <AvForm
                    className="form-horizontal mt-4"
                    onValidSubmit={(e, er, v) => {
                        props.next()
                        handleValidSubmit(e, er, v)
                    }}
                >
                    <div className="">
                    <h3 className="p-3">Create Chat Support Agent</h3>
                    <div className="card p-4">
                    <div className="mb-3">
                            <AvField
                                name="email"
                                label="Email"
                                value={AgentData.email}
                                // defaultValue={initialState[[COMPANY_NAME]]}
                                className="form-control"
                                placeholder="Enter Email"
                                type="text"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    <div className="mb-3">
                            <AvField
                                name="password"
                                label="Password"
                                value={AgentData.password}
                                // defaultValue={initialState[[COMPANY_NAME]]}
                                className="form-control"
                                placeholder="password"
                                type="password"
                                required
                                onChange={handleChange}
                            />
                        </div>
                    {/* <div className="mb-3">
                            <AvField
                                name="otp"
                                label="Enter OTP"
                                value={AgentData.otp}
                                // defaultValue={initialState[[COMPANY_NAME]]}
                                className="form-control"
                                placeholder="OTP"
                                type="text"
                                required
                                onChange={handleChange}
                            />
                        </div> */}
                        <div className="mt-4 d-flex justify-content-end">
                            <button className="btn btn-primary btn-block w-50">Create</button>
                        </div>
                    </div>
                    </div>
                </AvForm>
            </div>
        </>
    )
}

export default Chathistory
