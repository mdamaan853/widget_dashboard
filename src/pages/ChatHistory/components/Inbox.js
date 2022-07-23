import React from "react"
import PropTypes from "prop-types"
import Drawer from "../../../components/Drawer/Drawer"

const Chatbox = props => {
  return (
    <>
      <div className="card p-3" style={{height:"500px",width:"380px"}}>
        <h3 className="my-3 text-center">{props.title}</h3>
        <div className="overflow-y-scroll">
   <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">username</th>
      <th scope="col">Date</th>
      <th scope="col border border-info">View</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Mark</td>
      <th scope="row">9:15</th>
      <th scope="row"><Drawer/></th>
    </tr>
    <tr>
      <td>Jacob</td>
      <th scope="row">11:00</th>
       <th scope="row"><Drawer/></th>
    </tr>
    <tr>
      <td>Larry</td>
      <th scope="row">12:03</th>
       <th scope="row"><Drawer/></th>
    </tr>
    <tr>
      <td>chris</td>
      <th scope="row">1:20</th>
       <th scope="row"><Drawer/></th>
    </tr>
    <tr>
      <td>jhonson</td>
      <th scope="row">2:01</th>
       <th scope="row"><Drawer/></th>
    </tr>
    <tr>
      <td>Benlay</td>
      <th scope="row">5:50</th>
       <th scope="row"><Drawer/></th>
    </tr>
    <tr>
      <td>Thor</td>
      <th scope="row">11:32</th>
       <th scope="row "><Drawer/></th>
    </tr>
    <tr>
      <td>Alex</td>
      <th scope="row">2:43</th>
       <th scope="row"><Drawer/></th>
    </tr>
    <tr>
      <td>joe</td>
      <th scope="row">3:45</th>
       <th scope="row"><Drawer/></th>
    </tr>
  </tbody>
</table>
</div>
        {/* <h3 className="my-3 text-center">{props.title}</h3>
      <div style={{height:"500px",width:"350px",overflow:'auto'}} className="p-3">
        <p className="receiver">It's packed</p>
        <p className="sender "> My only question is, do you want to join them? </p>
        <p className="receiver">Every month, thousands of eCommerce marketers and store owners read our newsletter, The Chat 💬.</p>
        <p className=" sender">Later thing about it Later thing about it Later thing about it </p>
        <p className="receiver ">Every month, thousands of Later thing about it eCommerce marketers and store owners read our newsletter, The Chat 💬.</p>
        <p className=" sender">Later thing about it</p>
        <p className="receiver">Every month, thousands of eCommerce marketers and store owners read our newsletter, The Chat 💬.</p>
        <p className="sender ">Later  Later thing about it Later thing about it Later thing about it Later thing about it Later thing about itthing about it</p>
        <p className="receiver">Every month, thousands of eCommerce marketers and store owners read our newsletter, The Chat 💬.</p>
        <p className=" sender ">Later thing about Later thing about it Later thing about  it</p>
        <p className="receiver ">Every month, thousands of eCommerce marketers and store owners read our newsletter, The Chat 💬.</p>
        <p className="sender ">Later thing </p>
      </div> */}

      </div>
    </>
  )
}

export default Chatbox
