import logo from "../assets/logo.png";
import arrow_icon from "../assets/arrow_icon.png";
import { useContext } from "react";
import { coinContext } from "../context/coinContext";
import { Link } from "react-router-dom";

const optionstyline = {
  backgroundColor: "#09005c",
  color: "#fff",
};

const Navbar = () => {
  const { setCurrency } = useContext(coinContext);
  const currencyHandler = (e) => {
    switch (e.target.value) {
      case "USD": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "EUR": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "INR": {
        setCurrency({ name: "eur", symbol: "₹" });
        break;
      }
      case "SAR": {
        setCurrency({ name: "sar", symbol: "anything" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
      }
    }
  };
  return (
    <div
      className="navbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "20px 10%",
        borderBottom: "2px solid #3c3c3c",
      }}
    >
      <Link to={"/"} className="logo-container">
        <img
          src={logo}
          className="logo-img"
          style={{ width: "max(12vw, 120px)" }}
        />
      </Link>
      <nav>
        <ul style={{ display: "flex", gap: "40px" }}>
          <li>
            <Link to={"/"} href="#">
              Home
            </Link>
          </li>
          <li>
            <a href="#">Featuers</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </nav>
      <div
        className="right-nav"
        style={{ display: "flex", alignItems: "center", gap: "max(1vw, 12px)" }}
      >
        <select
          onChange={currencyHandler}
          style={{
            padding: "5px 8px",
            borderRadius: "6px",
            border: "2px solid white",
            background: "transparent",
            color: "#fff",
          }}
        >
          <option style={optionstyline} value="USD">
            USD
          </option>
          <option style={optionstyline} value="EUR">
            EUR
          </option>
          <option style={optionstyline} value="INR">
            INR
          </option>
          <option style={optionstyline} value="INR">
            SAR
          </option>
        </select>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            padding: "10px 25px",
            fontSize: "15px",
            color: "#393939",
            backgroundColor: "white",
            border: "none",
            cursor: "pointer",
            fontWeight: "500",
            borderRadius: "20px",
          }}
        >
          Sign Up
          <img style={{ width: "13px" }} src={arrow_icon} alt="arrow logo" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
