import React from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
} from "react-router-dom"
// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App() {
  return <h1>hello test</h1>
}

// You can think of these components as "pages"
// in your app.
function Child() {
  // We can use the `useParams` hook here to access
  // the dynamic pieces of the URL.
  let { tvid } = useParams()

  return (
    <div>
      <h3>ID:k {tvid}</h3>
    </div>
  )
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  )
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  )
}
function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  )
}
export default App
