import React from 'react';
import SocialLoginPage from './page/Login/SocialLoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailLoginPage from './page/Login/EmailLoginPage';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SocialLoginPage />} />
        <Route path="/login/email" element={<EmailLoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
