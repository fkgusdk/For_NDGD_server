import './App.css';
import { Route, Routes } from 'react-router-dom'
import MainPage from "./pages/MainPage";
import Procedure from './pages/Procedure';
import Calculator from './pages/Calculator';
import Percentage from './pages/Percentage';
import VocationalTraining from './pages/VocationalTraining';
import MedicalInstitution from './pages/MedicalInstitution';
import JobInstitution from './pages/JobInstitution';
import Login from './pages/Login';
import Community from './pages/Community';
import Review from './pages/Review';
import WritingPost from './pages/WritingPost';
import WritingReview from './pages/WritingReview';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<MainPage />}></Route>
        <Route path="/procedure" element={<Procedure />}></Route>
        <Route path="/calc" element={<Calculator />}></Route>
        <Route path="/percent" element={<Percentage />}></Route>
        <Route path="/training" element={<VocationalTraining />}></Route>        
        <Route path="/rehabilitation" element={<JobInstitution />}></Route>
        <Route path="/medical" element={<MedicalInstitution />}></Route>
        <Route path="/community" element={<Community />}></Route>
        <Route path="/review" element={<Review />}></Route>
        <Route path="/post" element={<WritingPost />}></Route>
        <Route path="/writing" element={<WritingReview />}></Route>

        <Route path="/login" element={<Login />}></Route>

      </Routes>
    </div>
  );
}

export default App;
