// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Welcome to Career Manager</h1>
      <Outlet /> {/* The nested routes will render here */}
    </div>
  );
}

export default App;
