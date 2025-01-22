import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import MyTournamentPage from './pages/MyTournamentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/MyTournament" element={<MyTournamentPage />} />
      </Routes>
    </Router>
  );
}

export default App;
