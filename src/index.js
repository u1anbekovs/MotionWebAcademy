import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux';
import {store} from "./Redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Suspense} from "react"
import "./i18n"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <Suspense fallback={<div>Loading...</div>}>
                    <App/>
                </Suspense>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);


reportWebVitals();
