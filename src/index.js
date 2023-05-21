import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateProvider } from './components/stateProvider/StateProvider';
import reducer, { initialState } from './components/stateProvider/Reducer';

ReactDOM.render(
  <StateProvider reducer={reducer} initialState={initialState}>
    <App />
  </StateProvider>,
  document.getElementById('root')
);

reportWebVitals();
