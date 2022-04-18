import React from "react";
import "./Coin.css";
//Sets the coin data received from the APi in a card like fashion

const Coin = ({
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {
  return (
    <div className="cryptoCoin">
      <img src={image} alt={`${name}`} className="coinLogo" />
      <div className="coinNameWrap">
        <h1 className="coinName">{name}</h1>
        <p className="coinSymbol">{symbol}</p>
      </div>
      <p className="coinPrice">${price.toLocaleString()}</p>
      <p className="coinMarketcap">Market Cap: ${marketcap.toLocaleString()}</p>
      <p className="coinVolume">Volume (24H): ${volume.toLocaleString()}</p>
      {priceChange < 0 ? (
        <div className="priceContainerDOWN">
          <i className="fa-solid fa-angle-down"></i>
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      ) : (
        <div className="priceContainerUP">
          <i className="fa-solid fa-angle-up"></i>
          <p className="priceChange">{priceChange.toFixed(2)}%</p>
        </div>
      )}
    </div>
  );
};

export default Coin;
