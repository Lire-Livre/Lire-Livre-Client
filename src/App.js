import React from 'react';
import SocialLoginPage from './page/Login/SocialLoginPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EmailLoginPage from './page/Login/EmailLoginPage';
import SignupPage from './page/Signup/SignupPage';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SocialLoginPage />} />
        <Route path="/login/email" element={<EmailLoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
