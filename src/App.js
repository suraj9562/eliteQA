import "./App.css";
import LandingPage from "./pages/landingPage/LandingPage";
import Login from "./pages/login/Login";
import PasswordReset from "./pages/passordReset/PasswordReset";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/notFound/NotFound";
import CreateNewPassword from "./pages/createNewPassword/CreateNewPassword";
import Loading from "./pages/Loading/Loading";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/reset" element={<PasswordReset />} />
        <Route path="/password/new" element={<CreateNewPassword />} />
        {/* <Route path="/loading" element={<Loading />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
