import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import "./index.css";
import App from "./App.jsx";

const clientID =
  "810768456559-hkoe8mq1ed7jcai405ai192q22c1ntu0.apps.googleusercontent.com";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId={clientID}>
      <App />
    </GoogleOAuthProvider>
  </StrictMode>,
);
