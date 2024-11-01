import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import HomeScreen from './screens/HomeScreen/HomeScreen';

const LoginScreen = lazy(() => import('./screens/LoginScreen/LoginScreen'));


const App = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route path="/home" element={<HomeScreen />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
