import React from 'react'
import ReactDOM from "react-dom/client";
import App from './App'
import {Provider} from 'react-redux'
import configureStore from './store/configureStore';

const root = ReactDOM.createRoot(document.getElementById("root"));
const store = configureStore()
store.subscribe(()=>{
  console.log(store.getState())
})
root.render(
  // q-1 //why we use this strict mode without using this also its working fine ? 
    <Provider store = {store}>
    <App />
    </Provider>

);