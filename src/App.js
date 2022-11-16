import './App.css';
import Home from './pages/Home';
import Stay from './pages/Stay';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/stay' element={<Stay />} />
      </Routes>
    </div>
  );
}

export default App;
