// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div class="h-screen flex items-center justify-center">
      <h1>Welcome to Career Manager</h1>
      <Outlet /> {/* The nested routes will render here */}
    </div>
  );
}

export default App;
