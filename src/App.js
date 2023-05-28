import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import NoPage from './components/NoPage/NoPage';



function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="resume" element={<Resume />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <footer className="fixed-bottom">
                <ul className="d-flex flex-row justify-content-center gap-5" style={{listStyleType : 'none'}}>
                    <li>GitHub</li>
                    <li>LinkedIn</li>
                    <li>StackOverflow</li>
                </ul>
      </footer>
    </div>
  );
}

export default App;
