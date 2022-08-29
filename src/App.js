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
import Profile from "./pages/profile/Profile";

import ProtectedRoutes from "./pages/ProtectedRoutes";
import ResetPassword from "./components/resetPassword/ResetPassword";
import Question from "./components/Question/questionTypeModal/Question";
import BulkQuestion from "./components/Question/bulkQuestion/BulkQuestion";
import Notification from "./pages/Notification/Notification";
function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/reset" element={<PasswordReset />} />
        <Route path="/password/new/:email" element={<CreateNewPassword />} />
        <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/library" element={<Library />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/question" element={<Question />} />
          <Route path="/bulkQuestion" element={<BulkQuestion />} />
          <Route path="/notification" element={<Notification />} />
        </Route>
        {/* <Route path="/loading" element={<Loading />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
