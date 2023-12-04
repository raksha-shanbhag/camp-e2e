import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import TestResultsPage from './pages/TestResultsPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route
          path="testResults/:test_id"
          element={<TestResultsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
