import React, { useState } from "react";
import Axios from "axios";

export default function SbiComponentHooks() {
    var [sbiData, setSbiData] = useState({
        pricecurrent: "0",
        pricechange: "0",
        pricepercentchange: "0",
    })

    setTimeout(() => {
        Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI").then((response) => {
            if(sbiData.pricecurrent !== response.data.data.pricecurrent) {
                setSbiData({
                    pricecurrent: response.data.data.pricecurrent,
                    pricechange: response.data.data.pricechange,
                    pricepercentchange: response.data.data.pricepercentchange
                })
            }
        })
    }, 1000)

    return (
        <div>
            <h1>Current Price: {sbiData.pricecurrent}</h1>
            <h2>Price Change: {sbiData.pricechange}</h2>
            <h2>Price Change: {sbiData.pricepercentchange}</h2>
        </div>
    )
}