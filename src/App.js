import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import PasswordReset from "./pages/passordReset/PasswordReset";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/reset" element={<PasswordReset />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
