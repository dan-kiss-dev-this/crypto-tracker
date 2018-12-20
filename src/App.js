import React, { Component } from 'react';
import ApiComponent from './ApiComponent';

class App extends Component {
  render() {
    
    return (
      <div className="App">
          <ApiComponent site='https://min-api.cryptocompare.com/data/histoday?fsym=BTC&tsym=USD&limit=30'/>
      </div>
    );
  }
}

export default App;
