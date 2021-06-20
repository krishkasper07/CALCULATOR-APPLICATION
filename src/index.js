import React from 'react';
import ReactDOM from 'react-dom';
import'./App.css';

import Calculator from './classCompo/Calculator';
import Calculator2 from './Redux/CalcUsingRedux';
import { Calc } from './functionalCompo/Calc';

import CalculatorReducer from './Redux/Store';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store= createStore(CalculatorReducer);

ReactDOM.render(
  <React.StrictMode>
    <>
    <h1> CACULATOR USING CLASS COMPONENT </h1>
    <div className='main'>
    <Calculator/>
    </div>
    <br/>
    <h1> CACULATOR USING CLASS COMPONENT </h1>
    <div className='main'>
    <Calc/>
    </div>
    <br/>
    <h1> CACULATOR USING REDUX STATES </h1>
    <div className='main'>
    <Provider store={store}>
    <Calculator2/>
    </Provider>
    </div>
    <br/>
</>
  </React.StrictMode>,
  document.getElementById('root')
);

//calculator 
