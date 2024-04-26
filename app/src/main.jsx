import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import "./index.scss";

import { store } from "./store/store";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Auth0Provider
    domain="dev-mx6uvhaou2qfce8r.jp.auth0.com"
    clientId="Vy84kH2yCVmE3yPkh8bstTiwztliPHZE"
    cacheLocation="localstorage"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}>
    <Provider store={store}>
      <App />
    </Provider>
  </Auth0Provider>
);
