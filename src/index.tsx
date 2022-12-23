import { ApolloProvider } from "@apollo/client";
import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { client } from "./apollo";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/styles.css";
import "./styles/postsStyles.css";
import "./styles/commonStyles.css";
import "./styles/createStyles.css";
import "./styles/postStyles.css";
import "./styles/headerStyles.css";
import "./styles/footStyles.css";
import "./styles/bannerStyles.css";
import "./styles/modalStyles.css";
import "./styles/main1Styles.css";
import "./styles/main2Styles.css";
import "./styles/main3Styles.css";
import "./styles/main6Styles.css";
import "./styles/main5Styles.css";
import "./styles/main7Styles.css";
import "./styles/main8Styles.css";
import "./styles/main4Styles.css";
import "./styles/main9Styles.css";
import "./styles/customswiper.css";
import "./styles/eduContentStyles.css";
import "./styles/eduDetailContentsStyles.css";
import "./styles/bannerStyles.css";
import "./styles/bodyStyles.css";
import "./styles/makeNewApplication.css";


const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
