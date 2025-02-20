import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css'; 

import App from './App.jsx';
import Home from './pages/home.jsx';
import Editor from './pages/editor.jsx';

// Router setup with Home as a nested route
const router = createBrowserRouter([
  {
    path: '/', // Main route for the app
    element: <App />, // App component that contains the Outlet
    children: [
      {
        path: '/', // This is the nested route for the homepage
        element: <Home />, // Home component will be rendered inside the Outlet
      },
      {
        path: '/editor',
        element: <Editor />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
