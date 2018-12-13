import React from 'react';

class ApiComponent extends React.Component {
    state = {
        apiData: {}
    }

    async fetchData() {
        let response = await fetch('https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR');
        try {
            if (response.ok) {
                // console.log(12,response.body);
                this.setState({
                    apiData: await response.json(),
                });
            }
        } catch (error) {
            alert('Error occured');
            console.error(error)
        }
    }

    componentDidMount() {
        this.fetchData();
        // let xhr = new XMLHttpRequest();
        // let jsonObj, status = false;
        // xhr.open("GET", "https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=USD,JPY,EUR", true);
        // xhr.onload = function (e) {
        //     if (xhr.readyState === 4 {
        //         if (xhr)
        //     })
        // }
        
    }

    render() {
        console.log(37,this.state);
        return (
            this.state.apiData.USD !== undefined ?
            <div>hi {this.state.apiData.USD}</div> :
            <div>hi </div>
        );
    }
}

export default ApiComponent;

