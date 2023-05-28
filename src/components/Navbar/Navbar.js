import { Outlet, Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid ">
                    <div class="navbar-brand text-light">David Peguero</div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb2 mb-lg-0 d-flex">
                            <Link to='/' ><li className="nav-item"><div className="nav-link text-light">About Me</div></li></Link>
                            <Link to='/portfolio'><li className="nav-item" href="/portfolio"><div className="nav-link text-light">Portfolio</div></li></Link>
                            <Link to='/contact' ><li className="nav-item"><div className="nav-link text-light">Contact</div></li></Link>
                            <Link to='/resume' ><li className="nav-item"><div className="nav-link text-light">Resume</div></li></Link>
                        </ul>
                    </div>
                </div>


            </nav>

            <Outlet />


        </>
    )
}