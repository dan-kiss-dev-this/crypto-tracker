import React from 'react';
import CandleStickChart from './ChartComponent';
import { TypeChooser } from "react-stockcharts/lib/helper";

class ApiComponent extends React.Component {
    state = {
        apiData: {}
    }

    async fetchData() {
        let response = await fetch('https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30');
        try {
            if (response.ok) {
                let apiData = await response.json()
                this.setState({
                    apiData,
                });
            }
        } catch (error) {
            alert('Error occured reload page');
            console.error(error)
        }
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        console.log(37,this.state);
        return (
            this.state.apiData.Data !== undefined ?
            <TypeChooser> 
                { type => <CandleStickChart type={type} data={this.state.apiData.Data} />} 
            </TypeChooser>
           :
            <div>Loading... </div>
        );
    }
}

export default ApiComponent;

