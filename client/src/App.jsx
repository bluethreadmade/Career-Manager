// App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <Outlet /> {/* The nested routes will render here */}
    </div>
  );
}

export default App;
