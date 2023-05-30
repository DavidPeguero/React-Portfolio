import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import About from './components/About/About';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Portfolio/Portfolio';
import NoPage from './components/NoPage/NoPage';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons'



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
      <footer className=" p-3">
                <ul className="d-flex flex-row justify-content-center align-items-center gap-5" style={{height: '50px',listStyleType : 'none'}}>
                    <a href="https://github.com/DavidPeguero">
                      <li><img className='footer-img' src="./assets/images/github-icon.png" alt="" /></li>
                    </a>
                    <a href="https://www.linkedin.com/in/david-peguero">
                      <li><img className='footer-img' src="./assets/images/linked-in-icon.png" alt="" /></li>
                    </a>
                    <li><img className='footer-img' src="./assets/images/stack-icon.png" alt="" /></li>
                    
                </ul>
      </footer>
    </div>
  );
}

export default App;
