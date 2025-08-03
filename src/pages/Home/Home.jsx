import { useContext, useEffect, useState } from "react";
import "./Home.css";
import { coinContext } from "../../context/coinContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { allCoin, currency } = useContext(coinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState("");

  const searchHandler = async (e) => {
    e.preventDefault();
    const coins = await allCoin.filter((e) =>
      e.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
    setInput("");
  };
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  return (
    <div className="home">
      <div className="hero">
        <div className="text-box">
          <h1>
            Larget <br /> Crypto Markeplace
          </h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit minima
            repellendus itaque!
          </p>
        </div>
        <form onSubmit={searchHandler}>
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder="Search Crypto..."
            list="coinlist"
          />
          <datalist id="coinlist">
            {allCoin.map((e, i) => (
              <option key={i} value={e.name} />
            ))}
          </datalist>
          <button className="form-btn" type="submit">
            Search
          </button>
          <button
            type="button"
            className="form-btn"
            onClick={() => setDisplayCoin(allCoin)}
          >
            Reset
          </button>
        </form>
      </div>
      <div className="crypto-table">
        <div className="table-layout">
          <p>#</p>
          <p>coins</p>
          <p>price</p>
          <p style={{ textAlign: "center" }}>24H change</p>
          <p style={{ textAlign: "right" }}>Market Cap</p>
        </div>
        {displayCoin.slice(0, 20).map((e, i) => (
          <Link to={`/coin/${e.id}`} className="table-layout" key={i}>
            <p>{e.market_cap_rank}</p>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <img style={{ width: "max(1vw, 35px)" }} src={e.image} alt="" />
              <p>{e.name + " - " + e.symbol}</p>
            </div>
            <p>
              {currency.symbol} {e.current_price.toLocaleString()}
            </p>
            <p
              style={{
                textAlign: "center",
                color: e.price_change_percentage_24h > 0 ? "green" : "red",
              }}
            >
              {Math.floor(e.price_change_percentage_24h * 100) / 100}
            </p>
            <p style={{ textAlign: "right" }}>
              {e.market_cap.toLocaleString()}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
