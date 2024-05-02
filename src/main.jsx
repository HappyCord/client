import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import LoginPage from './pages/login.jsx';
import './index.css'


const router = createBrowserRouter([
  {
    path: "/",
    element: <div style={{color: 'white'}}>Hallo, did you mean to use /app?!</div>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>
  },
  {
    path: "/app",
    element: <App></App>
  }
]);
ReactDOM.createRoot(document.getElementById('app-mount')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
