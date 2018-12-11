import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';
import Screen from '../containers/Screen';
import ButtonList from '../containers/ButtonList';
import History from '../containers/History';

const store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="row">
          <div className="col-sm-12">
            <h3 className="mt-4"><i className='fa fa calculator' />Calculator React Redux</h3>
          </div>
          <div className="col-sm-8">
            <Screen/>
          </div>
          <div className="col-sm-4">
            <History/>
          </div>
          <div className="col-sm-8">
            <h5>Buttons</h5>
            <ButtonList/>
          </div>          
        </div>
      </Provider>
    );
  }
}

export default App;
