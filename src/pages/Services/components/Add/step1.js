import React, { useState } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { Steps, StepsProvider, useSteps } from "react-step-builder"
import "./services.scss"
// import AvForm from "availity-reactstrap-validation/lib/AvForm"
import AvField from "availity-reactstrap-validation/lib/AvField"
import { AvForm, AvGroup, AvInput, AvRadio, AvRadioGroup } from 'availity-reactstrap-validation';
import { Button, Label, FormGroup } from 'reactstrap';

function Step1(props) {
    const handleValidSubmit = () => { }
    const { data,handleChange } = props;    
    return (
        <>
            <AvForm
                className="form-horizontal mt-4"
                onValidSubmit={(e, er, v) => {
                    props.next()
                    handleValidSubmit(e, er, v)
                }}
            >
                <div className="row gap-5 ">
                    <h2 className="mb-4">Enter Services Details</h2>
                    <div className="step col card p-5">
                        <div className="mb-3">
                            <AvField
                                name="serviceName"
                                label="Service Name"
                                value={data.serviceName}
                                // defaultValue={initialState[[COMPANY_NAME]]}
                                className="form-control"
                                placeholder="Enter Service Name"
                                type="text"
                                // required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <AvField
                                name="websiteUrl"
                                label="Website URL"
                                value={data.websiteUrl}
                                // defaultValue={initialState[[COMPANY_WEBSITE]]}
                                className="form-control"
                                placeholder="Enter Website URL"
                                type="url"
                                // required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <AvField
                                name="widgetName"
                                label="Enter Widget Name"
                                value={data.widgetName}
                                // defaultValue={initialState[[COMPANY_EMAIL]]}
                                className="form-control"
                                placeholder="Enter Widget Name"
                                type="text"
                                // required
                                onChange={handleChange}
                            />
                        </div>
                        <div className="mb-3">
                            <AvField
                                name="company"
                                label="Select Company"
                                type="select"
                                value={data.company}
                                // defaultValue={initialState[[COMPANY_ADDRESS]]}
                                // required
                                placeholder="Select Company"
                                onChange={handleChange}
                            >
                                <option value="company1" key={1}>company 1</option>
                                <option value="company2" key={2}>company 2</option>
                                <option value="company3" key={3}>company 3</option>
                                <option value="company4" key={4}>company 4</option>
                                <option value="company5" key={5}>company 5</option>
                            </AvField>
                        </div>
                    </div>
                    <div className="step col card p-5">

                        <div className="mb-3">
                            <AvField
                                name="technology"
                                label="Select Technology"
                                type="select"
                                default={data.technology}
                                // defaultValue={initialState[[COMPANY_ADDRESS]]}
                                // required
                                placeholder="Select Technology"
                                onChange={handleChange}
                            >
                                <option value={"wordpress"} key={1}>wordpress</option>
                                <option value={"shopify"} key={2}>shopify</option>
                                <option value={"joomla"} key={3}>joomla</option>
                            </AvField>
                        </div>
                        <div className="mb-3">

                            <Label>Select Widget Type</Label>
                            <AvGroup check  >
                                <Label check>
                                    <AvInput type="radio" value={"NORMAL_WIDGET"} name="widgetType" onChange={handleChange}/>&nbsp;
                                    Normal widget
                                </Label>
                            </AvGroup>
                            <AvGroup check>
                                <Label check>
                                    <AvInput type="radio" value={"BOT"} name="widgetType"onChange={handleChange}/>&nbsp;  BOT
                                </Label>
                            </AvGroup>
                            <AvGroup check>
                                <Label check>
                                    <AvInput type="radio" value={"WIDGET+CHAT_AGENT"} name="widgetType"onChange={handleChange} />&nbsp;  widget + Chat agent
                                </Label>
                            </AvGroup>
                            <AvGroup check>
                                <Label check>
                                    <AvInput type="radio" value={"BOT+Chat_AGENT"} name="widgetType"onChange={handleChange}/>&nbsp; BOT+Chat Agent
                                </Label>
                            </AvGroup>
                        </div>

                        <div className="mb-3">
                            <Label check>
                                <AvInput type="checkbox" name="isIndianNo" value={data.isIndianNo}
                                onChange={handleChange} />&nbsp; Is Indian number
                            </Label>
                            {/* <AvField 
                            name="isIndianNo"
                            type="checkbox"
                            label="Indian number"
                            className="form-control"
                            
                            /> */}
                        </div>

                        <div className="mb-3">
                            <AvField
                                name="devEmail"
                                label="You may also send these instructions to your developer"
                                value={data.devEmail}
                                // defaultValue={initialState[[COMPANY_EMAIL]]}
                                className="form-control"
                                placeholder="Enter your developer's email here"
                                type="text"
                                onChange={handleChange}
                                // required
                            />
                        </div>
                        <div className="mt-4 d-flex justify-content-end">
                            <button className="btn btn-primary btn-block w-50">Next</button>
                        </div>
                    </div>
                </div>
            </AvForm>
        </>
    )
}



export default Step1
