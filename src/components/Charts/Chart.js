import React from "react"
import ReactApexChart from "react-apexcharts"

const barchart = (props) => {
   const series= [{
        name: "Desktops",
        data: props.data
    }]
   const options= {
      chart: {
        height: 350,
        type: props.type,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'straight'
      },
      title: {
        text: `${props.title} Trends`,
        align: 'left'
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
          opacity: 0.5
        },
      },
      xaxis: {
        categories:props.categories,
      }
    }

  return (
    <ReactApexChart options={options} series={series} type={props.type} height={350} />        
  )
}

export default barchart
