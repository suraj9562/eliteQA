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
import QuestionPreviewOne from "./components/Question/questionPreview/QuestionPreviewOne";
import QuestionPreviewTwo from "./components/Question/questionPreview/QuestionPreviewTwo";
import CreateTest from "./components/Tests/createTest";
import TestScreenTwo from "./components/Tests/screenTwo/TestScreenTwo";
import InviteSentBulk from "./components/Tests/inviteSentBulk/InviteSentBulk";
import TestScreenThree from "./components/Tests/screenThree/TestScreenThree";
import ScreenFour from "./components/Tests/screenFour/ScreenFour";
import NewQuestion from "./components/newQuestion/NewQuestion";
import Published from "./components/Tests/published/Published";
import InviteBulkUpload from "./components/Tests/inviteBulk/inviteBulkUpload/InviteBulkUpload";
import InviteBulkTable from "./components/Tests/inviteBulk/inviteBulkTable/InviteBulkTable";
import NewQuestionCode from "./components/newQuestionCode/NewQuestionCode";
function App() {
  const isAuthenticated = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/password/reset" element={<PasswordReset />} />
        <Route path="/password/new/:email" element={<CreateNewPassword />} />
        {/* <Route element={<ProtectedRoutes isAuthenticated={isAuthenticated} />}> */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/library" element={<Library />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/question" element={<Question />} />
        <Route path="/bulkQuestion" element={<BulkQuestion />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/questionPreview1" element={<QuestionPreviewOne />} />
        <Route path="/questionPreview2" element={<QuestionPreviewTwo />} />
        <Route path="/createTest1" element={<CreateTest />} />
        <Route path="/createTest2" element={<TestScreenTwo />} />
        <Route path="/createTest3" element={<TestScreenThree />} />
        <Route path="/createTest4" element={<ScreenFour />} />
        <Route path="/inviteSent" element={<InviteSentBulk />} />
        <Route path="/newQuestion" element={<NewQuestion />} />
        <Route path="/newQuestionCode" element={<NewQuestionCode />} />
        <Route path="/published" element={<Published />} />
        <Route path="/inviteBulk" element={<InviteBulkUpload />} />
        <Route path="/inviteBulkTable" element={<InviteBulkTable />} />
        {/* </Route> */}
        {/* <Route path="/loading" element={<Loading />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
