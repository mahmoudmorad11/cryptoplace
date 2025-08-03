import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { coinContext } from "../../context/coinContext";
import "./Coin.css";
import LineChart from "../../components/LineChart/LineChart";

const Coin = () => {
  const { currency } = useContext(coinContext);
  const { coinId } = useParams();
  const [coinData, setCoinData] = useState();
  const [historicalData, setHistoricalData] = useState();

  const fetchCoinData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-CdHh5kXSdgYbDAi54SnKybuk",
      },
    };

    fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
      .then((res) => res.json())
      .then((res) => setCoinData(res))
      .catch((err) => console.error(err));
  };

  const fetchHistoricalData = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        "x-cg-demo-api-key": "CG-CdHh5kXSdgYbDAi54SnKybuk",
      },
    };

    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10`,
      options
    )
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    fetchCoinData();
    fetchHistoricalData();
  }, [currency]);

  if (coinData && historicalData) {
    return (
      <div className="coin">
        <div className="coin-name">
          <img src={coinData.image.large} alt="coin image" />
          <p>
            {coinData.name} {coinData.symbol.toUpperCase()}
          </p>
        </div>
        <div className="coin-chart">
          <LineChart historicalData={historicalData} />
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="spinner"
        style={{ display: "grid", placeSelf: "center", minHeight: "80vh" }}
      >
        <div className="spin"></div>
      </div>
    );
  }
};

export default Coin;
