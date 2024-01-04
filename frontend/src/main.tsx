import * as React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";
import "@aws-amplify/ui-react/styles.css";
import { Provider } from 'react-redux'
import {store} from './redux/store'


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>
);
