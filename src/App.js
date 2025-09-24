import React from 'react';
import { DashboardProvider } from './context/DashboardContext';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
    <DashboardProvider>
      <div className="App">
        <header className="app-header">
          <h1>Dynamic Dashboard</h1>
        </header>
        <Dashboard />
      </div>
    </DashboardProvider>
  );
}

export default App;
