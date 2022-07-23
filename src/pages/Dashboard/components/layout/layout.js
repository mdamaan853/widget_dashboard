import React, { useState } from "react"
import PropTypes from "prop-types"
import { Link, withRouter } from "react-router-dom"
import Chart from "../../../../components/Charts/Chart"
import "./style.scss"
// rgb(40, 187, 227)
function Layout(props) {
    return (
        <>
            <div className="d-flex text-center justify-content-evenly gap-5">
                <Link to="activewidget">
                <div className="card card-even align-items-center"><span className="my-auto fw-bold">Active widgets</span></div>
                </Link>
                <Link to="activebot">
                <div className="card card-odd"><span className="my-auto fw-bold">Active bots</span></div>
                </Link>
                <Link to="invoice">
                <div className="card card-even"><span className="my-auto fw-bold">Invoices</span></div></Link>
                <Link to="registrewebsite">
                <div className="card card-odd"><span className="my-auto fw-bold">Register Websites</span></div>
                </Link>
            </div>
            <div className="charts d-flex gap-5 justify-content-between my-5">
                <div id="daily" className="card w-50 p-4">
                   
                    <Chart title="Daily" data={[10, 41, 35, 51, 49, 62, 69]} categories={["Mon", "Tues", "Wed", "Thus", "Fri", "Sat", "Sun"]} type="bar" />
                </div>
                <div id="weekly" className="card w-100  p-4">
             
                    <Chart title="Weekly" data={[10, 41, 35, 51, 49, 62, 69]} categories={["week1", "week2", "week3", "week4", "week5", "week6", "week7"]} type="line"/>
                </div>
                <div id="monthly" className="card w-50 p-4">
               
                    <Chart title="Monthly" data={[10, 41, 35, 51, 49, 62, 69,42,34,97,56,78]} categories={["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]} type="bar" />
                </div>
            </div>
            <div className="d-flex justify-content-between gap-3">
                <div id="quaterly" className="card w-100 p-4">
               
                    <Chart title="Quaterly" data={[10, 41, 35, 69]} categories={["Jan","Apr","Aug","Dec"]} type="area" />
                </div>
                <div id="yearly" className="card w-100 p-4">
                
                    <Chart title="Yearly" data={[10, 41, 35, 51]} categories={["2021","2022","2023","2024",]} type="line" />
                </div>
            </div>
        </>
    )
}

Layout.propTypes = {}

export default withRouter(Layout)
