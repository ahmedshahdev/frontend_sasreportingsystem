// React Import
import React from "react"

// Other Libraries
import { Chart } from "react-google-charts";


// Global Components

// Components

// Icons

// Assets


const Chart_STAT_INAD_PAX = ({report_comments}) => {
  return (
    <Chart
    chartType="PieChart"
    data={[
      ["Airlines", "Quantity"],
      ...Object.entries(
        report_comments["airlines-records-breakdown-count"]
      ),
    ]}
    options={{
      is3D: true,
      title: "Breakdown Of Inad Passengers Based On Different Airlines",
      backgroundColor: "transparent",
      titleTextStyle: {
        color: "#ffffff"
    },
      legend: {
        textStyle: {
          color: '#ffffff'
        }
      }
    }}
    width={"100%"}
    height={"400px"}
  />
  )
}

export default Chart_STAT_INAD_PAX