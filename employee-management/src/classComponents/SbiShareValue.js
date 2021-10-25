import React from 'react';
import Axios from "axios";

export default class SbiShareValue extends React.Component {
    constructor() {
        super();
        this.state = {
            pricecurrent: "0",
            pricechange: "0",
            pricepercentchange: "0",
        }

    }
    render() {
        return (
            <div>
                <h1>Current Price: {this.state.pricecurrent}</h1>
                <h2>Price Change: {this.state.pricechange}</h2>
                <h2>Price Change: {this.state.pricepercentchange}</h2>
            </div>
        )
    }
    componentDidMount() {

        var dummyTimePromise = new Promise((resolve) => {
            setTimeout(() => {
                resolve("This is Promise after 10 Seconds")
            }, 10000)
        })

        var priceDataPromise = Axios.get("https://priceapi.moneycontrol.com/pricefeed/nse/equitycash/SBI");

        Promise.race([dummyTimePromise, priceDataPromise]).then((data) => {
            if(data === "This is Promise after 10 Seconds") {
                alert("SBI's API not working fine....")
            } else {
                priceDataPromise.then((response) => {
                    this.setState({
                        pricecurrent: response.data.data.pricecurrent,
                        pricechange: response.data.data.pricechange,
                        pricepercentchange: response.data.data.pricepercentchange
                    })
                })
            }
        })
    }

}