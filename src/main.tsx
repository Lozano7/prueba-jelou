import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClientProvider } from "react-query"
import { Provider } from "react-redux"
import "./index.css"
import queryClient from "./queries/queryClient"
import AppRouter from "./routes/AppRouter"
import { store } from "./store"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>,
)
