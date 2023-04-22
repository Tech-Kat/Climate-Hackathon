
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Facts from './Pages/Facts';
import Resources from './Pages/Resources';
import Survey from './Pages/Survey';
import Four0Four from './Pages/Four0Four';
import Nav from './Components/Nav';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/facts" element={<Facts />} />
            <Route path="/resources" element={<Resources/>}/>
            <Route path="/survey" element={<Survey />} />
            <Route path="*" element={<Four0Four />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
