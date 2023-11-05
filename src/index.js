import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {createReduxStore} from "./store/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={createReduxStore()}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

reportWebVitals();
