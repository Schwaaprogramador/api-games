
// import {compose} from redux
import rootReducer from "./reducer";

import { legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunkMiddleware from "redux-thunk";
import{composeWithDevTools} from 'redux-devtools-extension';

//const composeEnhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));

export default store;




// import { configureStore } from '@reduxjs/toolkit';
// import rootReducer from "./reducer";


// const store = configureStore({ reducer: rootReducer })
// export default store;