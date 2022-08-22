import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import PasswordReset from "./pages/passordReset/PasswordReset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import CreateNewPassword from "./pages/createNewPassword/CreateNewPassword";
import Loading from "./pages/Loading/Loading";
import Dashboard from "./pages/Dashboard/Dashboard";
import Library from "./pages/Library/Library";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/reset" element={<PasswordReset />} />
        <Route path="/password/new" element={<CreateNewPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<Library />} />
        {/* <Route path="/loading" element={<Loading />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
