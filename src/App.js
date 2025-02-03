import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MyTournamentPage from './pages/MyTournamentPage';
import TournamentPage from './pages/TournamentPage';
import AdminPage from './pages/AdminPage';
import ChatBot from './pages/ChatBot';
import AdminBadmintonScoreUpdate from './pages/AdminBadminton';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/MyTournament" element={<MyTournamentPage />} />
        <Route path="/tournaments/:sport" element={<TournamentPage />} />
        <Route path="/Admin" element={<AdminBadmintonScoreUpdate />} />
        <Route path ="/ChatBot" element={<ChatBot />} />
      </Routes>
    </Router>
  );
}

export default App;
