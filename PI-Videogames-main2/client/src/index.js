import React from 'react';
import ReactDOM from 'react-dom/client'; // la importancion cambia en el version 18 de react a react-dom/Client
//import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from "./redux/store.js";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  
);

