import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {setupStore} from "./redux/store";
import {Provider} from "react-redux";
const store = setupStore();
ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
  document.getElementById('root')
);
