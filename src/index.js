import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Auth0Provider
      domain="dev-uo7cmv7a.us.auth0.com"
      clientId="LMMbaU9JMcAltLji7U2GeherxUuB7qee"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </>
);
