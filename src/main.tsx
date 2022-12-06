import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import { createClient, Provider } from "urql"
import ErrorPage from "./error-page"

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom"
import Index from "./routes/index"
import NavBarDisplay from "./components/navbar"
import TelevisionTable from "./routes/televisionTable"

const client = createClient({
  url: import.meta.env.VITE_API_URL || "http://localhost:4000/graphql",
})

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<NavBarDisplay />} errorElement={<ErrorPage />}>
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route path="addcrt" element={<h1>addCRT routffe</h1>} />
        <Route path="database" element={<TelevisionTable />} />
        <Route path="blog" element={<h1>blog possibly here</h1>} />
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider value={client}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
)
