//lib da route
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//importações das pages
import HomePage from './pages/HomePage';
import GamePage from './pages/GamePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/game" element={<GamePage />} />
      </Routes>
    </Router>
  );
}

export default App;
