import React, { useReducer, useState } from "react"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import "./services.scss"
import CSVUploader from "./CsvToJson/CSVUploader"
import initialState from "./initialState"
import * as actionTypes from "./actionTypes"
import reducer from "./reducer"
import StepForm from "./StepFrom"
import { Button, Label } from "reactstrap"
import { AvInput } from 'availity-reactstrap-validation';
import AvForm from "availity-reactstrap-validation/lib/AvForm"
import AvField from "availity-reactstrap-validation/lib/AvField"
import CSVReader from "./CsvToJson/CSVUploader"

const obj = `<!--Start of Tawk.to Script-->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/62554158b0d10b6f3e6d2217/1g0egeh96';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
<!--End of Tawk.to Script-->`

function Preview(props) {
  const [file, setFile] = useState([]);
  const [color, setColor] = useState("#00FFFF");
  const [fontColor, setFontColor] = useState("#000000");

  const { data, handleChange } = props

  const showBtn = () => {
    let copybtn = document.getElementById("copy-btn")
    console.log("show")
    copybtn.style.cssText = "display:block !important;heigth:30px;"
  }

  const hideBtn = () => {
    let copybtn = document.getElementById("copy-btn")
    console.log("hide")
    copybtn.style.cssText = "display:none !important;"
  }

  const copycontent = () => {
    var code = document.getElementById("code").textContent
    console.log(code)
    navigator.clipboard.writeText(code).then(function () {
      console.log('Async: Copying to clipboard was successful!');
    }, function (err) {
      console.error('Async: Could not copy text: ', err);
    });

  }

  const handleFile = event => {
    setFile(
      URL.createObjectURL(event.target.files[0])
    );
  };


  const handleValidSubmit = () => { }

  return (
    <>
      <h2>Preview</h2>
      <div className="row">
        <div className="col-6">
          <AvForm
            className="form-horizontal mt-4 "
            onValidSubmit={(e, er, v) => {
              props.next()
              handleValidSubmit(e, er, v)
            }}
          >
            <div className="card p-3 ">
              <div className="mb-3">
                <AvField
                  name="widgetHeader"
                  label="Header"
                  type="text"
                  value={data.widgetHeader}
                  // defaultValue={initialState[[COMPANY_ADDRESS]]}
                  placeholder="Enter Header Name"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-3">
                <AvField
                  name="widgetDesc"
                  label="Description"
                  type="textarea"
                  value={data.widgetDesc}
                  onChange={handleChange}
                  // defaultValue={initialState[[COMPANY_ADDRESS]]}
                  placeholder="Enter Description"
                  required
                />
              </div>
              <div className="mb-3">
                <AvField
                  name="widgetAvatar"
                  label="Aavtar"
                  type="file"
                  // value={file}
                  onChange={handleFile}
                  // defaultValue={initialState[[COMPANY_ADDRESS]]}
                  placeholder="Choose color"

                />
              </div>
              <div className="mb-3">
                <AvField
                  name="widgetColor"
                  label="Header Color"
                  type="color"
                  // value={data.widgetColor}
                  // onChange={handleFile}
                  value={color} 
                  onChange={e => {
                    console.log(e.target.value)
                    setColor(e.target.value)
                  }}
                  // defaultValue={initialState[[COMPANY_ADDRESS]]}
                  placeholder="Choose file"

                />
              </div>
              <div className="mb-3">
                <AvField
                  name="fontColor"
                  label="Font Color"
                  type="color"
                  // value={data.widgetColor}
                  // onChange={handleFile}
                  value={setFontColor} 
                  onChange={e => setFontColor(e.target.value)}
                  // defaultValue={initialState[[COMPANY_ADDRESS]]}
                  placeholder="Choose file"

                />
              </div>
              <div className="mb-3 py-3">
                {/* <div
                  id="copy-text"
                  className="form-control d-flex justify-content-center"
                  style={{ height: "130px" }}
                  onMouseOver={showBtn}
                  onMouseOut={hideBtn}
                >
                  <code id="code" style={{ overflow: "auto" }}>
                    {obj}
                  </code>
                  <Button
                    id="copy-btn"
                    outline
                    color="primary"
                    className="btn btn-outline-primary "
                    onClick={copycontent}
                  >
                    copy to Clipboard
                  </Button>
                </div> */}
                <div className="mb-1 mt-2 d-flex justify-content-between">
                  <Label>Email Verification</Label>
                  {/* <Button color="primary">verify</Button> */}
                  <AvInput type="checkbox" value={"NORMAL_WIDGET"} name="widgetType" />
                </div>
                <div className="mb-2 d-flex justify-content-between">
                  {data.isIndianNo ? <><Label>
                    Phone Verification
                  </Label>
                    <AvInput type="checkbox" value={"NORMAL_WIDGET"} name="widgetType" /></> : <></>}
                  <></>

                </div>
                <div className="mb-3">
                  <AvField
                    name="greetingMsg"
                    label="greeting message"
                    type="textarea"
                    value={data.greetingMsg}
                    // defaultValue={initialState[[COMPANY_ADDRESS]]}
                    placeholder="Enter Description"
                    onChange={handleChange}
                  // required
                  />
                </div>
                <div className="mb-3">
                  <AvField
                    name="endingMsg"
                    label="Closing Widget Response"
                    type="textarea"
                    value={data.endingMsg}
                    // defaultValue={initialState[[COMPANY_ADDRESS]]}
                    placeholder="Enter Description"
                    onChange={handleChange}
                  // required
                  />
                </div>
              </div>
              {
                data.widgetType == "BOT" || data.widgetType == "BOT+Chat_AGENT" ? <> <CSVReader title="V1" />
                  <CSVReader title="V2" />
                  <CSVReader title="V3" /></> : <></>
              }

              <div className="mt-5">
                <button className="btn btn-light btn-block w-50" onClick={props.CSVReaderprev}>
                  Prev
                </button>
                <button className="btn btn-primary btn-block w-50">Submit</button>
              </div>
            </div>
          </AvForm>
          <div style={{
            bottom: " 10px",
            right: "10px",
            height: "645px",
            width: '400px',
            bottom: "20px",
            // marginTop: "20px",
            display: "flex",
            // border:"2px solid red",
            position: "fixed"
          }}>

          </div>
        </div>
        <div className="col-6 mt-4">
          <div style={{ minHeight: "600px", minWidth: "300px", maxWidth: "350px", borderRadius: "20px"}} className="card my-auto mx-auto ">
            <div style={{ borderRadius: "20px",backgroundColor:color  }} className=" d-flex gap-5 p-3">
              {file.length ? <img className="rounded-circle" style={{ height: "50px", width: "50px" }} src={file} /> :
                <img src="http://user.dobe3.com/2be3/assets/global/images/avatars/avatar6_big@2x.png" style={{ height: "50px", width: "50px" }} />
              }
              <div>
                <h4 style={{color:fontColor}} className="overflow-hidden">{data.widgetHeader}</h4>
                <p style={{color:fontColor}} className="overflow-hidden">{data.widgetDesc}</p>
              </div>
            </div>
            <div className="my-3 mx-2" id="message-container">
              <p className=" p-1 d-inline-block" style={{ backgroundColor: "#dee2e6", color: "black", borderRadius: "15px" }}>{data.greetingMsg}</p>
              {/* <p className="d-flex p-1 bg-info" style={{color:"black",borderRadius:"15px"}}></p> */}
            </div>
            <div className="" id="send-meassage" style={{
              position: "absolute", bottom: "0px", borderTopWidth: "0.5px",
              borderTopColor: "black"
            }}>
              <input className="" placeholder="Type your message here..." value={"Enter your email..."} style={{ border: "none" }} />
              {/* <button className="btn">send</button> */}
              {/* <small className="text-center mt-2">Powered by Aicersoft 2022</small> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

Preview.propTypes = {}

export default withRouter(Preview)
