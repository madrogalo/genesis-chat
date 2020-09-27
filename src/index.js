import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import { FirebaseAppProvider, SuspenseWithPerf } from "reactfire";
import { firebaseConfig } from "./firebaseConfig";

const app = (
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <SuspenseWithPerf
            fallback={'fallback'}
            traceId={'traceId'}
        >
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </SuspenseWithPerf>
    </FirebaseAppProvider>
)

ReactDOM.render(app, document.getElementById('root'));
serviceWorker.unregister();