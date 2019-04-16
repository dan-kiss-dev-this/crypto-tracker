import React, { Component } from 'react';
import ApiComponent from './ApiComponent';
import { Provider } from 'react-redux';
import {createStore, Store, applyMiddleware } from 'redux';
import '../css/App.scss';
import { actionObject, stateObjectToProp } from '../types';
import rootReducer from '../reducers/index';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

//We instantiate the store by calling the createStore method we imported and passing in the reducer we defined
// const store: any = createStore(rootReducer,applyMiddleware(thunk, logger));
// const store: any = () => {
//   return createStore(
//       rootReducer,
//       applyMiddleware(logger, thunkMiddleware)
//   );
// }
const store: any = createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
);


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
            <ApiComponent />
        </div>
      </Provider>
    );
  }
}

export default App;
