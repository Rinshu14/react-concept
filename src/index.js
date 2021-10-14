import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{createStore} from "redux";
import reducer from "./redux/reducer";
import {Provider} from "react-redux"//react redux is a library that connect the app with redux by giving the provider


let myStore=createStore(reducer);//createStore is a inbuilt function of redux to create the store for state
ReactDOM.render(
 <Provider store={myStore}>
   {/* //this provideris just like context provider and takes the store to provide the state */}
   {/*  we are placing the provider above all child because it contains the store and to make the store available to all child */}
    <App />
    </Provider>,
  document.getElementById('root')
);


