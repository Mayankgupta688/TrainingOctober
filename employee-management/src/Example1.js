import React, { useState } from "react";
import Axios from "axios";

export default function SharePriceHook() {
    const [tickerData, setTickerData] = useState({
      pricecurrent: 0,
      pricechange: 0,
      pricepercentchange: 0,
    });
  
    setTimeout(()=>{
      Axios
      .get('https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI')
      .then((resp) => {
        const {data} = resp.data;
        setTickerData({...data});
      });
    }, 2000);
  
    return (
      <ul>
        <li>{tickerData.pricecurrent}</li>
        <li>{tickerData.pricechange}</li>
        <li>{tickerData.pricepercentchange}</li>
      </ul>
    );
  }
  