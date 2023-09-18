import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello React Router</div>,
  },
  {
    path: "/about",
    element: <div>Hello from about page</div>
  },
  {
    path: "/contact",
    element: <div>Hello from contact us page</div>
  },
  {
    path: "/app",
    element: <App />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
