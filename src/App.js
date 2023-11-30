import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage'
import TestResultsPage from './pages/TestResultsPage';

const App = () => {
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/testResults/:test_id" component={TestResultsPage} />
    //     <Route path="/" component={HomePage} />
    //   </Routes>
    // </BrowserRouter>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage />}>
        <Route
          path="testResults/:test_id"
          element={<TestResultsPage />}
        />
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
