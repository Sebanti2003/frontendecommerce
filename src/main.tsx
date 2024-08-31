import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
const client = new QueryClient();
createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <QueryClientProvider client={client}>
      <BrowserRouter>
        <StrictMode>
          <App />
        </StrictMode>
      </BrowserRouter>
    </QueryClientProvider>
  </Provider>
);
