import React,{useState} from "react"
import { Button } from "reactstrap"
import Drawer from 'react-modern-drawer'
import ChatIcon from '@mui/icons-material/Chat';
import "./Style.scss";
import 'react-modern-drawer/dist/index.css'

const DrawerComponent=(props)=>{
    const [isOpen, setIsOpen] = React.useState(false)
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState)
    }

return(
    <>
        <div className="d-flex m-0 justify-content-end pe-1">
         <ChatIcon onClick={toggleDrawer} titleAccess="view history"/>
        </div>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='right'
                className='bla bla bla'
                style={{width:"400px"}}
            >
                <div style={{height:"95%",width:"350px",overflow:'auto'}} className="p-3 mt-5 pt-5">
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
      </div> 
            </Drawer>
    </>
)
}

export default DrawerComponent


