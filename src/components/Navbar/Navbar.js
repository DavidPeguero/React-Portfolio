import { Outlet, Link } from "react-router-dom"
import { useEffect, useState } from "react";
import './style.css'

export default function Navbar() {
    const [currentPage, setCurrentPage] = useState('');

    useEffect(() => {
        const url = window.location.href;
        switch (url) {
            case url.includes('contact'):
                setCurrentPage('contact');
                break;
            case url.includes('portfolio'):
                setCurrentPage('portfolio');
                break;
            case url.includes('resume'):
                setCurrentPage('resume');
                break;
            default:
                setCurrentPage('about me');
        }
    }, [])

    const changePage = (e) => {
        setCurrentPage(e.target.innerText.toLowerCase())
        console.log(currentPage)
    }

    return (
        <header>
            <nav class="navbar navbar-custom navbar-expand-lg py-3 bg-primary"  >
                <div class="container-fluid">
                    <div class="navbar-brand text-light">David Peguero</div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb2 mb-lg-0 d-flex">
                            <Link to='/' ><li className="nav-item" onClick={changePage}><div className={`nav-link ${currentPage === 'about me' ? 'active' : 'text-light'}`}>About Me</div></li></Link>
                            <Link to='/portfolio' onClick={changePage}><li className="nav-item"  ><div className={`nav-link  ${currentPage === 'portfolio' ? 'active' : 'text-light'}`} value='portfolio' >Portfolio</div></li></Link>
                            <Link to='/contact' ><li className="nav-item" onClick={changePage}><div className={`nav-link ${currentPage === 'contact' ? 'active' : 'text-light'}`}>Contact</div></li></Link>
                            <Link to='/resume' ><li className="nav-item" onClick={changePage}><div className={`nav-link  ${currentPage === 'resume' ? 'active' : 'text-light'}`}>Resume</div></li></Link>
                        </ul>
                    </div>
                </div>
            </nav>

            <Outlet />


        </header>
    )
}