import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MyTournamentPage from './pages/MyTournamentPage';
import TournamentPage from './pages/TournamentPage';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/MyTournament" element={<MyTournamentPage />} />
        <Route path="/tournaments/:sport" element={<TournamentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
