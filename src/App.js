import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import TestResultsPage from './pages/TestResultsPage';
import TestResultByIdPage from './pages/TestResultByIdPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route
          path="testResults/:testId"
          element={<TestResultsPage />}
        />
        <Route
          path="testResults/:testId/:payloadId"
          element={<TestResultByIdPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
