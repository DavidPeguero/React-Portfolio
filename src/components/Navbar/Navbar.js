import { Outlet, Link } from "react-router-dom"
import { AppBar, Typography, Button, Toolbar, Stack} from "@mui/material"
import Menu from '@mui/material/Menu';
import './style.css'

export default function Navbar() {
    return (
        <>
            <AppBar position="static" className="appbar" sx={{
                height : '100px',
                justifyContent : 'center'
            }}>
                <Toolbar variant="dense">
                    <Typography variant="h6" color="inherit" component="div" sx={{
                        flexGrow : 1
                    }}>
                        David Peguero
                    </Typography>
                    <Stack direction="row" spacing={2} sx={{
                        flexGrow : 1
                    }}>
                        <Link to='/' className="nav-link"><Button color="inherit">Home</Button></Link>
                        <Link to='/portfolio' className="nav-link"><Button color="inherit">Portfolio</Button></Link>
                        <Link to='/about' className="nav-link"><Button color="inherit">About</Button></Link>
                        <Link to='/contact' className="nav-link"><Button color="inherit">Contact Me</Button></Link>
                    </Stack>
                </Toolbar>
            </AppBar>
            <Outlet />
            {/* <nav>
                
                <h1>David Peguero</h1>  
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav>

            <Outlet /> */}
        </>
    )
}