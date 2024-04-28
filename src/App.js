//lib da route
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//importações das pages
import HomePage from './pages/HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
