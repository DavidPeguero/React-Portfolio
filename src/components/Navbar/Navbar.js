import { Outlet, Link } from "react-router-dom"

export default function Navbar() {
    return (
        <>
            {/* <AppBar position="static" className="appbar" sx={{
                height : '100px',
                justifyContent : 'center'
            }}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div" sx={{
                        flexGrow : 1,
                        fontSize : 'clamp(.75rem, 5vw, 1.25rem)'
                    }}>
                        David Peguero
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{
                        flexGrow : 1,
                        fontSize : 'clamp(.75rem, 5vw, 1.25rem)'
                    }}>
                        <Link to='/' className="nav-link"><Button color="inherit">Home</Button></Link>
                        <Link to='/portfolio' className="nav-link"><Button color="inherit">Portfolio</Button></Link>
                        <Link to='/about' className="nav-link"><Button color="inherit">About</Button></Link>
                        <Link to='/contact' className="nav-link"><Button color="inherit" className="">Contact Me</Button></Link>
                    </Stack>
                </Toolbar>
            </AppBar> */}
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">
                    <div class="navbar-brand">David Peguero</div>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb2 mb-lg-0 d-flex">
                            <Link to='/'><li className="nav-item" ><div className="nav-link active" aria-current="page">Home</div></li></Link>
                            <Link to='/portfolio'><li className="nav-item" href="/portfolio"><div className="nav-link">Portfolio</div></li></Link>
                            <Link to='/about' ><li className="nav-item"><div className="nav-link">About</div></li></Link>
                            <Link to='/contact' ><li className="nav-item"><div className="nav-link">Contact</div></li></Link>
                        </ul>
                    </div>
                </div>


            </nav>

            <Outlet />


        </>
    )
}