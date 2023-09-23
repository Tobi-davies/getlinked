import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import GlobalStyles from "./components/global-styles/global-styles";
import { QueryClient, QueryClientProvider } from "react-query";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
