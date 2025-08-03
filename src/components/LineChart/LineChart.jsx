import { useEffect, useState } from "react";
import { Chart } from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState(["Date", "Prices"]);

  useEffect(() => {
    let dataCopy = [["Date, Price"]];
    if (historicalData.prices) {
      historicalData.prices.map((e) => {
        dataCopy.push([
          `${new Date(e[0]).toLocaleDateString().slice(0, -5)}`,
          e[1],
        ]);
        setData(dataCopy);
      });
    }
  }, [historicalData]);
  return <Chart chartType="LineChart" data={data} height="100%" legendToggle />;
};

export default LineChart;
